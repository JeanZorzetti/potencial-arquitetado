import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Editor from '@/components/admin/Editor';
import { ArrowLeft, Save, Eye, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ArticleData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  isFeatured: boolean;
  status: 'draft' | 'published';
}

const ArticleEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const isEditing = Boolean(id && id !== 'new');

  const [formData, setFormData] = useState<ArticleData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    category: '',
    isFeatured: false,
    status: 'draft'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    'Desenvolvimento Pessoal',
    'Inteligência Emocional',
    'Soft Skills',
    'Mentalidade',
    'Liderança',
    'Produtividade'
  ];

  useEffect(() => {
    if (isEditing) {
      loadArticle();
    }
  }, [id, isEditing]);

  const loadArticle = async () => {
    if (!id || id === 'new') return;
    
    setIsLoading(true);
    try {
      // Por enquanto, simular carregamento de artigo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Aqui você faria a chamada real para a API
      // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      // const response = await fetch(`${API_URL}/articles/${id}`, {
      //   headers: { Authorization: `Bearer ${token}` }
      // });
      // const article = await response.json();
      
      // Dados simulados
      const article = {
        title: 'Artigo de Exemplo',
        slug: 'artigo-de-exemplo',
        content: '<p>Conteúdo do artigo aqui...</p>',
        excerpt: 'Resumo do artigo',
        featuredImage: '',
        category: 'Desenvolvimento Pessoal',
        isFeatured: false,
        status: 'draft' as const
      };
      
      setFormData(article);
    } catch (error) {
      console.error('Erro ao carregar artigo:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar o artigo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório';
    }
    if (!formData.content.trim()) {
      newErrors.content = 'Conteúdo é obrigatório';
    }
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Resumo é obrigatório';
    }
    if (!formData.category) {
      newErrors.category = 'Categoria é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async (status: 'draft' | 'published') => {
    if (!validateForm()) return;

    setIsSaving(true);
    try {
      const dataToSave = { ...formData, status };
      
      // Aqui você faria a chamada real para a API
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const url = isEditing ? `${API_URL}/articles/${id}` : `${API_URL}/articles`;
      const method = isEditing ? 'PUT' : 'POST';
      
      // Por enquanto, simular save
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // const response = await fetch(url, {
      //   method,
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`
      //   },
      //   body: JSON.stringify(dataToSave)
      // });

      // if (!response.ok) throw new Error('Erro ao salvar');

      toast({
        title: "Sucesso!",
        description: `Artigo ${status === 'published' ? 'publicado' : 'salvo como rascunho'} com sucesso.`,
      });

      navigate('/admin/articles');
    } catch (error) {
      console.error('Erro ao salvar artigo:', error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar o artigo.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = () => {
    // Abrir preview em nova aba
    window.open(`/blog/${formData.slug}`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/admin/articles')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div>
            <h1 className="text-2xl font-bold">
              {isEditing ? 'Editar Artigo' : 'Novo Artigo'}
            </h1>
            <p className="text-muted-foreground">
              {isEditing ? 'Edite as informações do artigo' : 'Crie um novo artigo para o blog'}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handlePreview}
            disabled={!formData.slug}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            variant="outline"
            onClick={() => handleSave('draft')}
            disabled={isSaving}
          >
            {isSaving ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Salvar Rascunho
          </Button>
          <Button
            onClick={() => handleSave('published')}
            disabled={isSaving}
          >
            {isSaving ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              'Publicar'
            )}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>
                Título, slug e resumo do artigo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Título do artigo"
                  className={errors.title ? 'border-destructive' : ''}
                />
                {errors.title && (
                  <p className="text-sm text-destructive mt-1">{errors.title}</p>
                )}
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="slug-do-artigo"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  URL: /blog/{formData.slug}
                </p>
              </div>

              <div>
                <Label htmlFor="excerpt">Resumo *</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Resumo do artigo (máximo 2 linhas)"
                  rows={3}
                  className={errors.excerpt ? 'border-destructive' : ''}
                />
                {errors.excerpt && (
                  <p className="text-sm text-destructive mt-1">{errors.excerpt}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card>
            <CardHeader>
              <CardTitle>Conteúdo *</CardTitle>
              <CardDescription>
                Escreva o conteúdo do seu artigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Editor
                content={formData.content}
                onChange={(content) => setFormData(prev => ({ ...prev, content }))}
              />
              {errors.content && (
                <Alert variant="destructive" className="mt-4">
                  <AlertDescription>{errors.content}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Configurações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="category">Categoria *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger className={errors.category ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-destructive mt-1">{errors.category}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="featured">Artigo em destaque</Label>
                <Switch
                  id="featured"
                  checked={formData.isFeatured}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isFeatured: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle>Imagem de Destaque</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="featuredImage">URL da Imagem</Label>
                <Input
                  id="featuredImage"
                  value={formData.featuredImage}
                  onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                  placeholder="https://..."
                />
              </div>
              {formData.featuredImage && (
                <div className="mt-4">
                  <img
                    src={formData.featuredImage}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditor;