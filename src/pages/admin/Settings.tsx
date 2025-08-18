import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { 
  Settings as SettingsIcon, 
  Save, 
  User, 
  Mail, 
  Globe,
  Database,
  Shield,
  Trash2,
  Download,
  RefreshCw
} from 'lucide-react';

interface BlogSettings {
  siteName: string;
  tagline: string;
  description: string;
  adminEmail: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const Settings = () => {
  const [settings, setSettings] = useState<BlogSettings>({
    siteName: 'Arquitetura do Potencial',
    tagline: 'Construindo carreiras extraordinárias através do desenvolvimento pessoal e profissional',
    description: 'Blog focado em desenvolvimento pessoal, inteligência emocional, soft skills e liderança para profissionais que buscam excelência.',
    adminEmail: 'admin@example.com',
    socialLinks: {
      linkedin: '',
      twitter: '',
      instagram: ''
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    totalArticles: 0,
    totalSubscribers: 0,
    totalMessages: 0,
    lastBackup: null as string | null
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/stats`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setStats({
          totalArticles: data.totalArticles,
          totalSubscribers: data.totalSubscribers,
          totalMessages: data.totalMessages,
          lastBackup: null // TODO: Implementar backup quando necessário
        });
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleSettingsChange = (field: string, value: string) => {
    if (field.startsWith('socialLinks.')) {
      const socialField = field.split('.')[1];
      setSettings(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [socialField]: value
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const saveSettings = async () => {
    setIsLoading(true);
    try {
      // Simular salvamento (implementar endpoint quando necessário)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações salvas",
        description: "As configurações foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar as configurações.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearAllData = async () => {
    if (!confirm('ATENÇÃO: Esta ação irá remover TODOS os artigos. Esta ação não pode ser desfeita. Deseja continuar?')) {
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/clear`, {
        method: 'POST'
      });

      if (response.ok) {
        toast({
          title: "Dados limpos",
          description: "Todos os artigos foram removidos com sucesso.",
        });
        loadStats(); // Recarregar estatísticas
      } else {
        throw new Error('Failed to clear data');
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível limpar os dados.",
        variant: "destructive",
      });
    }
  };

  const exportData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      // Buscar todos os dados
      const [articlesRes, subscribersRes, messagesRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/articles/all`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${import.meta.env.VITE_API_URL}/subscribers`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${import.meta.env.VITE_API_URL}/messages`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      const [articles, subscribers, messages] = await Promise.all([
        articlesRes.json(),
        subscribersRes.json(),
        messagesRes.json()
      ]);

      const exportData = {
        articles,
        subscribers,
        messages,
        exportDate: new Date().toISOString(),
        settings
      };

      // Criar arquivo de download
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `arquitetura-potencial-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Backup criado",
        description: "O arquivo de backup foi baixado com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível criar o backup.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <SettingsIcon className="w-6 h-6" />
          Configurações
        </h1>
        <p className="text-gray-600 mt-1">
          Gerencie as configurações do blog e dados do sistema.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Site Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Configurações do Site
              </CardTitle>
              <CardDescription>
                Informações básicas do blog
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName">Nome do Site</Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) => handleSettingsChange('siteName', e.target.value)}
                  placeholder="Nome do seu blog"
                />
              </div>
              
              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={settings.tagline}
                  onChange={(e) => handleSettingsChange('tagline', e.target.value)}
                  placeholder="Breve descrição do seu blog"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={settings.description}
                  onChange={(e) => handleSettingsChange('description', e.target.value)}
                  placeholder="Descrição detalhada do blog"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Admin Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Configurações do Admin
              </CardTitle>
              <CardDescription>
                Configurações da conta administrativa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="adminEmail">Email do Admin</Label>
                <Input
                  id="adminEmail"
                  type="email"
                  value={settings.adminEmail}
                  onChange={(e) => handleSettingsChange('adminEmail', e.target.value)}
                  placeholder="seu@email.com"
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Redes Sociais
              </CardTitle>
              <CardDescription>
                Links para suas redes sociais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={settings.socialLinks.linkedin || ''}
                  onChange={(e) => handleSettingsChange('socialLinks.linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
              </div>
              
              <div>
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  value={settings.socialLinks.twitter || ''}
                  onChange={(e) => handleSettingsChange('socialLinks.twitter', e.target.value)}
                  placeholder="https://twitter.com/seu-perfil"
                />
              </div>
              
              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={settings.socialLinks.instagram || ''}
                  onChange={(e) => handleSettingsChange('socialLinks.instagram', e.target.value)}
                  placeholder="https://instagram.com/seu-perfil"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* System Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Estatísticas do Sistema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Artigos</span>
                <Badge variant="secondary">{stats.totalArticles}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Subscribers</span>
                <Badge variant="secondary">{stats.totalSubscribers}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Mensagens</span>
                <Badge variant="secondary">{stats.totalMessages}</Badge>
              </div>
              <Separator />
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={loadStats}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Atualizar
              </Button>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Ações do Sistema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={saveSettings}
                className="w-full"
                disabled={isLoading}
              >
                <Save className="w-4 h-4 mr-2" />
                {isLoading ? 'Salvando...' : 'Salvar Configurações'}
              </Button>
              
              <Button
                variant="outline"
                onClick={exportData}
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar Dados
              </Button>
              
              <Separator />
              
              <Button
                variant="destructive"
                onClick={clearAllData}
                className="w-full"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar Todos os Dados
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;