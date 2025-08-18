import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { 
  FileText, 
  Users, 
  Mail, 
  TrendingUp,
  Eye,
  Calendar,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalSubscribers: number;
  totalMessages: number;
  unreadMessages: number;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalArticles: 0,
    publishedArticles: 0,
    draftArticles: 0,
    totalSubscribers: 0,
    totalMessages: 0,
    unreadMessages: 0
  });
  const [recentArticles, setRecentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      // Fetch stats and articles in parallel
      const [statsResponse, articlesResponse] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/stats`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${import.meta.env.VITE_API_URL}/articles/all`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);
      
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }

      if (articlesResponse.ok) {
        const articles = await articlesResponse.json();
        // Show recent articles (limit to 3)
        const recentArticles = articles
          .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 3);
        
        setRecentArticles(recentArticles);
      }

    } catch (error) {
      console.error('Erro ao carregar dados do dashboard:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total de Artigos',
      value: stats.totalArticles,
      description: `${stats.publishedArticles} publicados, ${stats.draftArticles} rascunhos`,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Subscribers',
      value: stats.totalSubscribers,
      description: 'Inscritos na newsletter',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Mensagens',
      value: stats.totalMessages,
      description: `${stats.unreadMessages} não lidas`,
      icon: Mail,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Visualizações',
      value: '0',
      description: 'Este mês',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Bem-vindo de volta, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-1">
            Aqui está um resumo do seu blog hoje.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link to="/admin/articles/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Artigo
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Articles */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Artigos Recentes
            </CardTitle>
            <CardDescription>
              Últimos artigos publicados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentArticles.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="font-medium text-gray-900 mb-2">Nenhum artigo ainda</h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Comece criando seu primeiro artigo para ver aparecer aqui.
                  </p>
                  <Link to="/admin/articles/new">
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Criar Primeiro Artigo
                    </Button>
                  </Link>
                </div>
              ) : (
                recentArticles.map((article: any) => (
                  <div key={article._id} className="flex items-start justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-gray-900 mb-1">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.publishedAt || article.createdAt).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <Badge 
                      variant={article.status === 'published' ? 'default' : 'secondary'}
                      className="ml-2"
                    >
                      {article.status === 'published' ? 'Publicado' : 'Rascunho'}
                    </Badge>
                  </div>
                ))
              )}
            </div>
            <div className="mt-4">
              <Link to="/admin/articles">
                <Button variant="outline" size="sm" className="w-full">
                  Ver Todos os Artigos
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>
              Acesso rápido às funcionalidades principais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Link to="/admin/articles/new">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Novo Artigo
                </Button>
              </Link>
              
              <Link to="/admin/messages">
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Ver Mensagens {stats.unreadMessages > 0 && `(${stats.unreadMessages} não lidas)`}
                </Button>
              </Link>
              
              <Link to="/admin/subscribers">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Gerenciar Subscribers
                </Button>
              </Link>
              
              <Link to="/admin/settings">
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Ver Estatísticas
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;