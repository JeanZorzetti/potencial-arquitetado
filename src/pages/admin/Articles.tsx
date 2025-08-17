import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  Filter,
  MoreHorizontal,
  Calendar,
  Star
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { toast } from '@/hooks/use-toast';

interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  status: 'published' | 'draft';
  isFeatured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const Articles = () => {
  const { token } = useAuth();
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    'Desenvolvimento Pessoal',
    'Inteligência Emocional',
    'Soft Skills',
    'Mentalidade',
    'Liderança',
    'Produtividade'
  ];

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [articlesList, searchTerm, statusFilter, categoryFilter]);

  const loadArticles = async () => {
    setIsLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_URL}/articles/all`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setArticlesList(data);
      } else {
        throw new Error('Failed to fetch articles');
      }
    } catch (error) {
      console.error('Erro ao carregar artigos:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os artigos.",
        variant: "destructive",
      });
      setArticlesList([]);
    } finally {
      setIsLoading(false);
    }
  };

  const filterArticles = () => {
    let filtered = articlesList;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(article => article.status === statusFilter);
    }

    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(article => article.category === categoryFilter);
    }

    setFilteredArticles(filtered);
  };

  const handleDelete = async (articleId: string) => {
    try {
      // Aqui você faria a chamada real para a API
      // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      // await fetch(`${API_URL}/articles/${articleId}`, {
      //   method: 'DELETE',
      //   headers: { Authorization: `Bearer ${token}` }
      // });

      setArticlesList(prev => prev.filter(article => article._id !== articleId));
      
      toast({
        title: "Sucesso!",
        description: "Artigo deletado com sucesso.",
      });
    } catch (error) {
      console.error('Erro ao deletar artigo:', error);
      toast({
        title: "Erro",
        description: "Não foi possível deletar o artigo.",
        variant: "destructive",
      });
    }
  };

  const toggleFeatured = async (articleId: string, isFeatured: boolean) => {
    try {
      // Aqui você faria a chamada real para a API
      // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      // await fetch(`${API_URL}/articles/${articleId}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`
      //   },
      //   body: JSON.stringify({ isFeatured: !isFeatured })
      // });

      setArticlesList(prev => prev.map(article =>
        article._id === articleId ? { ...article, isFeatured: !isFeatured } : article
      ));

      toast({
        title: "Sucesso!",
        description: `Artigo ${!isFeatured ? 'adicionado aos' : 'removido dos'} destaques.`,
      });
    } catch (error) {
      console.error('Erro ao atualizar artigo:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o artigo.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
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
          <h1 className="text-2xl font-bold text-gray-900">Artigos</h1>
          <p className="text-gray-600 mt-1">
            Gerencie todos os artigos do blog
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

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filtros</CardTitle>
          <CardDescription>
            Encontre artigos específicos usando os filtros abaixo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="published">Publicados</SelectItem>
                <SelectItem value="draft">Rascunhos</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Articles Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                {filteredArticles.length} artigo{filteredArticles.length !== 1 ? 's' : ''}
              </CardTitle>
              <CardDescription>
                {statusFilter !== 'all' && `Filtrado por: ${statusFilter === 'published' ? 'Publicados' : 'Rascunhos'}`}
                {categoryFilter !== 'all' && ` • Categoria: ${categoryFilter}`}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-gray-600 mb-6">
                Tente ajustar os filtros ou criar um novo artigo.
              </p>
              <Link to="/admin/articles/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Primeiro Artigo
                </Button>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-center">Destaque</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredArticles.map((article) => (
                    <TableRow key={article._id}>
                      <TableCell>
                        <div>
                          <div className="font-medium text-gray-900">
                            {article.title}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {article.excerpt.substring(0, 100)}...
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            /{article.slug}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          {article.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={article.status === 'published' ? 'default' : 'secondary'}
                        >
                          {article.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="flex items-center text-gray-900">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(article.publishedAt || article.createdAt).toLocaleDateString('pt-BR')}
                          </div>
                          <div className="text-gray-500 text-xs mt-1">
                            Atualizado: {new Date(article.updatedAt).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFeatured(article._id, article.isFeatured)}
                          className={article.isFeatured ? 'text-yellow-600' : 'text-gray-400'}
                        >
                          <Star 
                            className={`w-4 h-4 ${article.isFeatured ? 'fill-current' : ''}`} 
                          />
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to={`/admin/articles/${article._id}`}>
                                <Edit className="w-4 h-4 mr-2" />
                                Editar
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to={`/blog/${article.slug}`} target="_blank">
                                <Eye className="w-4 h-4 mr-2" />
                                Visualizar
                              </Link>
                            </DropdownMenuItem>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <DropdownMenuItem 
                                  onSelect={(e) => e.preventDefault()}
                                  className="text-destructive"
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Deletar
                                </DropdownMenuItem>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Tem certeza que deseja deletar o artigo "{article.title}"? 
                                    Esta ação não pode ser desfeita.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(article._id)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Deletar
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
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

export default Articles;