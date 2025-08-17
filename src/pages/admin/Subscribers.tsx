import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Search, 
  Download,
  Calendar,
  Mail,
  TrendingUp
} from 'lucide-react';

interface Subscriber {
  _id: string;
  email: string;
  createdAt: string;
}

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSubscribers();
  }, []);

  useEffect(() => {
    filterSubscribers();
  }, [subscribers, searchTerm]);

  const loadSubscribers = async () => {
    setIsLoading(true);
    try {
      // Simular dados
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockSubscribers: Subscriber[] = [
        { _id: '1', email: 'joao@example.com', createdAt: '2024-01-20T10:30:00Z' },
        { _id: '2', email: 'maria@example.com', createdAt: '2024-01-19T15:45:00Z' },
        { _id: '3', email: 'pedro@example.com', createdAt: '2024-01-18T09:15:00Z' },
        { _id: '4', email: 'ana@example.com', createdAt: '2024-01-17T14:20:00Z' },
        { _id: '5', email: 'carlos@example.com', createdAt: '2024-01-16T11:35:00Z' },
      ];
      
      setSubscribers(mockSubscribers);
    } catch (error) {
      console.error('Erro ao carregar subscribers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterSubscribers = () => {
    if (!searchTerm) {
      setFilteredSubscribers(subscribers);
      return;
    }

    const filtered = subscribers.filter(subscriber =>
      subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSubscribers(filtered);
  };

  const exportSubscribers = () => {
    const csvContent = [
      'Email,Data de Inscrição',
      ...filteredSubscribers.map(sub => 
        `${sub.email},${new Date(sub.createdAt).toLocaleDateString('pt-BR')}`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subscribers.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getGrowthStats = () => {
    const thisMonth = subscribers.filter(sub => {
      const subDate = new Date(sub.createdAt);
      const now = new Date();
      return subDate.getMonth() === now.getMonth() && subDate.getFullYear() === now.getFullYear();
    }).length;

    const lastMonth = subscribers.filter(sub => {
      const subDate = new Date(sub.createdAt);
      const now = new Date();
      const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);
      return subDate.getMonth() === lastMonthDate.getMonth() && subDate.getFullYear() === lastMonthDate.getFullYear();
    }).length;

    const growth = lastMonth > 0 ? ((thisMonth - lastMonth) / lastMonth * 100) : 0;
    
    return { thisMonth, lastMonth, growth };
  };

  const stats = getGrowthStats();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            {[1,2,3].map(i => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
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
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Subscribers da Newsletter</h1>
        <p className="text-gray-600 mt-1">
          Gerencie os inscritos na sua newsletter
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total de Subscribers
            </CardTitle>
            <Users className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{subscribers.length}</div>
            <p className="text-xs text-gray-600 mt-1">
              Todos os inscritos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Este Mês
            </CardTitle>
            <Calendar className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stats.thisMonth}</div>
            <p className="text-xs text-gray-600 mt-1">
              Novos inscritos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Crescimento
            </CardTitle>
            <TrendingUp className={`w-4 h-4 ${stats.growth >= 0 ? 'text-green-600' : 'text-red-600'}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stats.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stats.growth >= 0 ? '+' : ''}{stats.growth.toFixed(1)}%
            </div>
            <p className="text-xs text-gray-600 mt-1">
              vs. mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Lista de Subscribers</CardTitle>
              <CardDescription>
                {filteredSubscribers.length} subscriber{filteredSubscribers.length !== 1 ? 's' : ''}
              </CardDescription>
            </div>
            <Button onClick={exportSubscribers} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar por email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {filteredSubscribers.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? 'Nenhum subscriber encontrado' : 'Nenhum subscriber ainda'}
              </h3>
              <p className="text-gray-600">
                {searchTerm 
                  ? 'Tente ajustar sua busca.' 
                  : 'Os inscritos na newsletter aparecerão aqui.'
                }
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Data de Inscrição</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubscribers.map((subscriber) => (
                    <TableRow key={subscriber._id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {subscriber.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {new Date(subscriber.createdAt).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">Ativo</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Subscribers;