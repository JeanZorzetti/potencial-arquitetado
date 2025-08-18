import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  RefreshCw,
  Palette,
  Search,
  Lock,
  MessageSquare,
  RotateCcw
} from 'lucide-react';

interface BlogSettings {
  _id?: string;
  siteName: string;
  tagline: string;
  description: string;
  adminEmail: string;
  contactEmail: string;
  phone: string;
  address: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
    youtube: string;
    github: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    ogImage: string;
    favicon: string;
    googleAnalytics: string;
    googleTagManager: string;
  };
  appearance: {
    primaryColor: string;
    secondaryColor: string;
    logo: string;
    favicon: string;
    headerStyle: 'simple' | 'centered' | 'modern';
    footerText: string;
  };
  content: {
    articlesPerPage: number;
    showExcerpts: boolean;
    excerptLength: number;
    enableComments: boolean;
    moderateComments: boolean;
    allowGuestComments: boolean;
  };
  newsletter: {
    enabled: boolean;
    welcomeSubject: string;
    welcomeMessage: string;
    mailProvider: 'local' | 'mailgun' | 'sendgrid' | 'ses';
    apiKey: string;
    fromEmail: string;
    fromName: string;
  };
  security: {
    enableCaptcha: boolean;
    recaptchaSiteKey: string;
    recaptchaSecretKey: string;
    enableRateLimit: boolean;
    maxLoginAttempts: number;
    sessionTimeout: number;
  };
}

const getDefaultSettings = (): BlogSettings => ({
  siteName: 'Arquitetura do Potencial',
  tagline: 'Construindo carreiras extraordinárias através do desenvolvimento pessoal e profissional',
  description: 'Blog focado em desenvolvimento pessoal, inteligência emocional, soft skills e liderança para profissionais que buscam excelência.',
  adminEmail: 'admin@example.com',
  contactEmail: '',
  phone: '',
  address: '',
  socialLinks: {
    linkedin: '',
    twitter: '',
    instagram: '',
    facebook: '',
    youtube: '',
    github: ''
  },
  seo: {
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    ogImage: '',
    favicon: '',
    googleAnalytics: '',
    googleTagManager: ''
  },
  appearance: {
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981',
    logo: '',
    favicon: '',
    headerStyle: 'modern' as const,
    footerText: ''
  },
  content: {
    articlesPerPage: 6,
    showExcerpts: true,
    excerptLength: 150,
    enableComments: false,
    moderateComments: true,
    allowGuestComments: false
  },
  newsletter: {
    enabled: true,
    welcomeSubject: 'Bem-vindo(a) ao Arquitetura do Potencial!',
    welcomeMessage: 'Obrigado por se inscrever na nossa newsletter. Você receberá conteúdo exclusivo sobre desenvolvimento pessoal e profissional.',
    mailProvider: 'local' as const,
    apiKey: '',
    fromEmail: '',
    fromName: ''
  },
  security: {
    enableCaptcha: false,
    recaptchaSiteKey: '',
    recaptchaSecretKey: '',
    enableRateLimit: true,
    maxLoginAttempts: 5,
    sessionTimeout: 24
  }
});

const Settings = () => {
  const [settings, setSettings] = useState<BlogSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [stats, setStats] = useState({
    totalArticles: 0,
    totalSubscribers: 0,
    totalMessages: 0,
    lastBackup: null as string | null
  });

  useEffect(() => {
    loadSettings();
    loadStats();
  }, []);

  const loadSettings = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Try to load from localStorage first
      const savedSettings = localStorage.getItem('blog-settings');
      
      if (!token) {
        // If no token, use saved settings or defaults
        if (savedSettings) {
          setSettings(JSON.parse(savedSettings));
        } else {
          setSettings(getDefaultSettings());
        }
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/settings`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSettings(data);
      } else {
        console.error('Failed to load settings, using saved or defaults');
        // Fallback to saved settings or defaults if API fails
        if (savedSettings) {
          setSettings(JSON.parse(savedSettings));
        } else {
          setSettings(getDefaultSettings());
        }
      }
    } catch (error) {
      console.error('Error loading settings:', error);
      // Fallback to saved settings or defaults if API fails
      const savedSettings = localStorage.getItem('blog-settings');
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      } else {
        setSettings(getDefaultSettings());
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // If no token, use mock stats for development
        setStats({
          totalArticles: 0,
          totalSubscribers: 0,
          totalMessages: 0,
          lastBackup: null
        });
        return;
      }

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
          lastBackup: null
        });
      } else {
        // Fallback to mock stats if API fails
        setStats({
          totalArticles: 0,
          totalSubscribers: 0,
          totalMessages: 0,
          lastBackup: null
        });
      }
    } catch (error) {
      console.error('Error loading stats:', error);
      // Fallback to mock stats if API fails
      setStats({
        totalArticles: 0,
        totalSubscribers: 0,
        totalMessages: 0,
        lastBackup: null
      });
    }
  };

  const updateNestedSetting = (path: string, value: any) => {
    if (!settings) return;
    
    const keys = path.split('.');
    const newSettings = { ...settings };
    let current: any = newSettings;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current[keys[i]] = { ...current[keys[i]] };
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setSettings(newSettings);
  };

  const saveSettings = async () => {
    if (!settings) return;
    
    setIsSaving(true);
    try {
      const token = localStorage.getItem('token');
      
      // If no token, save to localStorage as fallback
      if (!token) {
        localStorage.setItem('blog-settings', JSON.stringify(settings));
        toast({
          title: "Configurações salvas (localmente)",
          description: "As configurações foram salvas no navegador.",
        });
        setIsSaving(false);
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/settings`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
      });

      if (response.ok) {
        toast({
          title: "Configurações salvas",
          description: "As configurações foram atualizadas com sucesso.",
        });
      } else {
        // Fallback to localStorage if API fails
        localStorage.setItem('blog-settings', JSON.stringify(settings));
        toast({
          title: "Configurações salvas (localmente)",
          description: "API não disponível. Configurações salvas no navegador.",
        });
      }
    } catch (error) {
      // Fallback to localStorage if API fails
      localStorage.setItem('blog-settings', JSON.stringify(settings));
      toast({
        title: "Configurações salvas (localmente)",
        description: "API não disponível. Configurações salvas no navegador.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const resetSettings = async () => {
    if (!confirm('Isso irá restaurar todas as configurações para os valores padrão. Continuar?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        // If no token, reset localStorage and use defaults
        localStorage.removeItem('blog-settings');
        setSettings(getDefaultSettings());
        toast({
          title: "Configurações restauradas",
          description: "Todas as configurações foram restauradas para os valores padrão.",
        });
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/settings/reset`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSettings(data.settings);
        // Also update localStorage
        localStorage.setItem('blog-settings', JSON.stringify(data.settings));
        toast({
          title: "Configurações restauradas",
          description: "Todas as configurações foram restauradas para os valores padrão.",
        });
      } else {
        // Fallback to local reset
        localStorage.removeItem('blog-settings');
        setSettings(getDefaultSettings());
        toast({
          title: "Configurações restauradas (localmente)",
          description: "API não disponível. Configurações restauradas localmente.",
        });
      }
    } catch (error) {
      // Fallback to local reset
      localStorage.removeItem('blog-settings');
      setSettings(getDefaultSettings());
      toast({
        title: "Configurações restauradas (localmente)",
        description: "API não disponível. Configurações restauradas localmente.",
      });
    }
  };

  const exportData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

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
        settings,
        exportDate: new Date().toISOString()
      };

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
        loadStats();
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

  if (isLoading || !settings) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
              <div className="h-96 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="h-48 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <SettingsIcon className="w-6 h-6" />
            Configurações
          </h1>
          <p className="text-gray-600 mt-1">
            Gerencie todas as configurações do seu blog.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={resetSettings}
            className="text-orange-600 border-orange-600 hover:bg-orange-50"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restaurar Padrões
          </Button>
          <Button
            onClick={saveSettings}
            disabled={isSaving}
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="general">Geral</TabsTrigger>
              <TabsTrigger value="appearance">Aparência</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="content">Conteúdo</TabsTrigger>
              <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
            </TabsList>

            {/* General Settings */}
            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Informações do Site
                  </CardTitle>
                  <CardDescription>
                    Configurações básicas do seu blog
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="siteName">Nome do Site</Label>
                      <Input
                        id="siteName"
                        value={settings.siteName}
                        onChange={(e) => updateNestedSetting('siteName', e.target.value)}
                        placeholder="Nome do seu blog"
                      />
                    </div>
                    <div>
                      <Label htmlFor="adminEmail">Email do Admin</Label>
                      <Input
                        id="adminEmail"
                        type="email"
                        value={settings.adminEmail}
                        onChange={(e) => updateNestedSetting('adminEmail', e.target.value)}
                        placeholder="admin@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      value={settings.tagline}
                      onChange={(e) => updateNestedSetting('tagline', e.target.value)}
                      placeholder="Breve descrição do seu blog"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      value={settings.description}
                      onChange={(e) => updateNestedSetting('description', e.target.value)}
                      placeholder="Descrição detalhada do blog"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactEmail">Email de Contato</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={settings.contactEmail}
                        onChange={(e) => updateNestedSetting('contactEmail', e.target.value)}
                        placeholder="contato@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={settings.phone}
                        onChange={(e) => updateNestedSetting('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Endereço</Label>
                    <Textarea
                      id="address"
                      value={settings.address}
                      onChange={(e) => updateNestedSetting('address', e.target.value)}
                      placeholder="Endereço completo"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        value={settings.socialLinks.linkedin}
                        onChange={(e) => updateNestedSetting('socialLinks.linkedin', e.target.value)}
                        placeholder="https://linkedin.com/in/seu-perfil"
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        value={settings.socialLinks.twitter}
                        onChange={(e) => updateNestedSetting('socialLinks.twitter', e.target.value)}
                        placeholder="https://twitter.com/seu-perfil"
                      />
                    </div>
                    <div>
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        value={settings.socialLinks.instagram}
                        onChange={(e) => updateNestedSetting('socialLinks.instagram', e.target.value)}
                        placeholder="https://instagram.com/seu-perfil"
                      />
                    </div>
                    <div>
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        value={settings.socialLinks.facebook}
                        onChange={(e) => updateNestedSetting('socialLinks.facebook', e.target.value)}
                        placeholder="https://facebook.com/seu-perfil"
                      />
                    </div>
                    <div>
                      <Label htmlFor="youtube">YouTube</Label>
                      <Input
                        id="youtube"
                        value={settings.socialLinks.youtube}
                        onChange={(e) => updateNestedSetting('socialLinks.youtube', e.target.value)}
                        placeholder="https://youtube.com/c/seu-canal"
                      />
                    </div>
                    <div>
                      <Label htmlFor="github">GitHub</Label>
                      <Input
                        id="github"
                        value={settings.socialLinks.github}
                        onChange={(e) => updateNestedSetting('socialLinks.github', e.target.value)}
                        placeholder="https://github.com/seu-usuario"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Aparência do Site
                  </CardTitle>
                  <CardDescription>
                    Personalize o visual do seu blog
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="primaryColor">Cor Primária</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primaryColor"
                          type="color"
                          value={settings.appearance.primaryColor}
                          onChange={(e) => updateNestedSetting('appearance.primaryColor', e.target.value)}
                          className="w-16 h-10 p-1"
                        />
                        <Input
                          value={settings.appearance.primaryColor}
                          onChange={(e) => updateNestedSetting('appearance.primaryColor', e.target.value)}
                          placeholder="#3B82F6"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="secondaryColor">Cor Secundária</Label>
                      <div className="flex gap-2">
                        <Input
                          id="secondaryColor"
                          type="color"
                          value={settings.appearance.secondaryColor}
                          onChange={(e) => updateNestedSetting('appearance.secondaryColor', e.target.value)}
                          className="w-16 h-10 p-1"
                        />
                        <Input
                          value={settings.appearance.secondaryColor}
                          onChange={(e) => updateNestedSetting('appearance.secondaryColor', e.target.value)}
                          placeholder="#10B981"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="headerStyle">Estilo do Cabeçalho</Label>
                    <Select 
                      value={settings.appearance.headerStyle} 
                      onValueChange={(value) => updateNestedSetting('appearance.headerStyle', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simple">Simples</SelectItem>
                        <SelectItem value="centered">Centralizado</SelectItem>
                        <SelectItem value="modern">Moderno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="footerText">Texto do Rodapé</Label>
                    <Textarea
                      id="footerText"
                      value={settings.appearance.footerText}
                      onChange={(e) => updateNestedSetting('appearance.footerText', e.target.value)}
                      placeholder="Texto personalizado para o rodapé"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SEO Settings */}
            <TabsContent value="seo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Configurações de SEO
                  </CardTitle>
                  <CardDescription>
                    Otimize seu blog para mecanismos de busca
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      value={settings.seo.metaTitle}
                      onChange={(e) => updateNestedSetting('seo.metaTitle', e.target.value)}
                      placeholder="Título que aparece no Google"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      value={settings.seo.metaDescription}
                      onChange={(e) => updateNestedSetting('seo.metaDescription', e.target.value)}
                      placeholder="Descrição que aparece no Google"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="keywords">Palavras-chave</Label>
                    <Input
                      id="keywords"
                      value={settings.seo.keywords}
                      onChange={(e) => updateNestedSetting('seo.keywords', e.target.value)}
                      placeholder="palavra1, palavra2, palavra3"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                      <Input
                        id="googleAnalytics"
                        value={settings.seo.googleAnalytics}
                        onChange={(e) => updateNestedSetting('seo.googleAnalytics', e.target.value)}
                        placeholder="G-XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="googleTagManager">Google Tag Manager ID</Label>
                      <Input
                        id="googleTagManager"
                        value={settings.seo.googleTagManager}
                        onChange={(e) => updateNestedSetting('seo.googleTagManager', e.target.value)}
                        placeholder="GTM-XXXXXXX"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Settings */}
            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Configurações de Conteúdo
                  </CardTitle>
                  <CardDescription>
                    Configure como o conteúdo é exibido
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="articlesPerPage">Artigos por Página</Label>
                      <Input
                        id="articlesPerPage"
                        type="number"
                        value={settings.content.articlesPerPage}
                        onChange={(e) => updateNestedSetting('content.articlesPerPage', parseInt(e.target.value))}
                        min="1"
                        max="50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="excerptLength">Tamanho do Resumo</Label>
                      <Input
                        id="excerptLength"
                        type="number"
                        value={settings.content.excerptLength}
                        onChange={(e) => updateNestedSetting('content.excerptLength', parseInt(e.target.value))}
                        min="50"
                        max="500"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showExcerpts">Mostrar Resumos</Label>
                        <p className="text-sm text-gray-500">Exibir resumos dos artigos nas listagens</p>
                      </div>
                      <Switch
                        id="showExcerpts"
                        checked={settings.content.showExcerpts}
                        onCheckedChange={(checked) => updateNestedSetting('content.showExcerpts', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="enableComments">Habilitar Comentários</Label>
                        <p className="text-sm text-gray-500">Permitir comentários nos artigos</p>
                      </div>
                      <Switch
                        id="enableComments"
                        checked={settings.content.enableComments}
                        onCheckedChange={(checked) => updateNestedSetting('content.enableComments', checked)}
                      />
                    </div>

                    {settings.content.enableComments && (
                      <>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="moderateComments">Moderar Comentários</Label>
                            <p className="text-sm text-gray-500">Comentários precisam ser aprovados</p>
                          </div>
                          <Switch
                            id="moderateComments"
                            checked={settings.content.moderateComments}
                            onCheckedChange={(checked) => updateNestedSetting('content.moderateComments', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="allowGuestComments">Permitir Comentários de Visitantes</Label>
                            <p className="text-sm text-gray-500">Comentários sem necessidade de cadastro</p>
                          </div>
                          <Switch
                            id="allowGuestComments"
                            checked={settings.content.allowGuestComments}
                            onCheckedChange={(checked) => updateNestedSetting('content.allowGuestComments', checked)}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Newsletter Settings */}
            <TabsContent value="newsletter" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Configurações da Newsletter
                  </CardTitle>
                  <CardDescription>
                    Configure o sistema de newsletter
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="newsletterEnabled">Habilitar Newsletter</Label>
                      <p className="text-sm text-gray-500">Permite inscrições na newsletter</p>
                    </div>
                    <Switch
                      id="newsletterEnabled"
                      checked={settings.newsletter.enabled}
                      onCheckedChange={(checked) => updateNestedSetting('newsletter.enabled', checked)}
                    />
                  </div>

                  {settings.newsletter.enabled && (
                    <>
                      <div>
                        <Label htmlFor="welcomeSubject">Assunto do Email de Boas-vindas</Label>
                        <Input
                          id="welcomeSubject"
                          value={settings.newsletter.welcomeSubject}
                          onChange={(e) => updateNestedSetting('newsletter.welcomeSubject', e.target.value)}
                          placeholder="Bem-vindo(a) ao nosso blog!"
                        />
                      </div>

                      <div>
                        <Label htmlFor="welcomeMessage">Mensagem de Boas-vindas</Label>
                        <Textarea
                          id="welcomeMessage"
                          value={settings.newsletter.welcomeMessage}
                          onChange={(e) => updateNestedSetting('newsletter.welcomeMessage', e.target.value)}
                          placeholder="Mensagem enviada para novos inscritos"
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fromEmail">Email Remetente</Label>
                          <Input
                            id="fromEmail"
                            type="email"
                            value={settings.newsletter.fromEmail}
                            onChange={(e) => updateNestedSetting('newsletter.fromEmail', e.target.value)}
                            placeholder="newsletter@exemplo.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="fromName">Nome Remetente</Label>
                          <Input
                            id="fromName"
                            value={settings.newsletter.fromName}
                            onChange={(e) => updateNestedSetting('newsletter.fromName', e.target.value)}
                            placeholder="Seu Nome"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="mailProvider">Provedor de Email</Label>
                        <Select 
                          value={settings.newsletter.mailProvider} 
                          onValueChange={(value) => updateNestedSetting('newsletter.mailProvider', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="local">Local (Desenvolvimento)</SelectItem>
                            <SelectItem value="mailgun">Mailgun</SelectItem>
                            <SelectItem value="sendgrid">SendGrid</SelectItem>
                            <SelectItem value="ses">Amazon SES</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {settings.newsletter.mailProvider !== 'local' && (
                        <div>
                          <Label htmlFor="mailApiKey">API Key</Label>
                          <Input
                            id="mailApiKey"
                            type="password"
                            value={settings.newsletter.apiKey}
                            onChange={(e) => updateNestedSetting('newsletter.apiKey', e.target.value)}
                            placeholder="Sua API key do provedor de email"
                          />
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Configurações de Segurança
                  </CardTitle>
                  <CardDescription>
                    Configure a segurança do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableRateLimit">Limite de Taxa</Label>
                      <p className="text-sm text-gray-500">Limita requisições por IP</p>
                    </div>
                    <Switch
                      id="enableRateLimit"
                      checked={settings.security.enableRateLimit}
                      onCheckedChange={(checked) => updateNestedSetting('security.enableRateLimit', checked)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maxLoginAttempts">Max Tentativas de Login</Label>
                      <Input
                        id="maxLoginAttempts"
                        type="number"
                        value={settings.security.maxLoginAttempts}
                        onChange={(e) => updateNestedSetting('security.maxLoginAttempts', parseInt(e.target.value))}
                        min="1"
                        max="20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sessionTimeout">Timeout da Sessão (horas)</Label>
                      <Input
                        id="sessionTimeout"
                        type="number"
                        value={settings.security.sessionTimeout}
                        onChange={(e) => updateNestedSetting('security.sessionTimeout', parseInt(e.target.value))}
                        min="1"
                        max="168"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableCaptcha">Habilitar CAPTCHA</Label>
                      <p className="text-sm text-gray-500">Proteção contra bots nos formulários</p>
                    </div>
                    <Switch
                      id="enableCaptcha"
                      checked={settings.security.enableCaptcha}
                      onCheckedChange={(checked) => updateNestedSetting('security.enableCaptcha', checked)}
                    />
                  </div>

                  {settings.security.enableCaptcha && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="recaptchaSiteKey">reCAPTCHA Site Key</Label>
                        <Input
                          id="recaptchaSiteKey"
                          value={settings.security.recaptchaSiteKey}
                          onChange={(e) => updateNestedSetting('security.recaptchaSiteKey', e.target.value)}
                          placeholder="Chave pública do reCAPTCHA"
                        />
                      </div>
                      <div>
                        <Label htmlFor="recaptchaSecretKey">reCAPTCHA Secret Key</Label>
                        <Input
                          id="recaptchaSecretKey"
                          type="password"
                          value={settings.security.recaptchaSecretKey}
                          onChange={(e) => updateNestedSetting('security.recaptchaSecretKey', e.target.value)}
                          placeholder="Chave secreta do reCAPTCHA"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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