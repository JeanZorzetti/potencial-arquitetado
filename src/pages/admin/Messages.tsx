import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  MailOpen, 
  Calendar,
  User,
  ExternalLink
} from 'lucide-react';

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    setIsLoading(true);
    try {
      // Simular dados
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockMessages: ContactMessage[] = [
        {
          _id: '1',
          name: 'João Silva',
          email: 'joao@example.com',
          message: 'Olá! Gostaria de saber mais sobre os frameworks de desenvolvimento pessoal. Vocês oferecem consultoria personalizada?',
          isRead: false,
          createdAt: '2024-01-20T10:30:00Z'
        },
        {
          _id: '2',
          name: 'Maria Santos',
          email: 'maria@example.com',
          message: 'Excelente artigo sobre inteligência emocional! Gostaria de receber mais conteúdo sobre o tema.',
          isRead: true,
          createdAt: '2024-01-19T15:45:00Z'
        },
        {
          _id: '3',
          name: 'Pedro Costa',
          email: 'pedro@example.com',
          message: 'Sou gestor de uma empresa de tecnologia e preciso desenvolver soft skills na minha equipe. Vocês têm algum programa corporativo?',
          isRead: false,
          createdAt: '2024-01-18T09:15:00Z'
        }
      ];
      
      setMessages(mockMessages);
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = (messageId: string) => {
    setMessages(prev => prev.map(msg =>
      msg._id === messageId ? { ...msg, isRead: true } : msg
    ));
  };

  const unreadCount = messages.filter(msg => !msg.isRead).length;

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Mensagens de Contato</h1>
        <p className="text-gray-600 mt-1">
          {messages.length} mensagem{messages.length !== 1 ? 's' : ''} • {unreadCount} não lida{unreadCount !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {messages.map((message) => (
          <Card key={message._id} className={`${!message.isRead ? 'border-primary' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${!message.isRead ? 'bg-primary/10' : 'bg-gray-100'}`}>
                    {!message.isRead ? (
                      <Mail className={`w-4 h-4 text-primary`} />
                    ) : (
                      <MailOpen className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{message.name}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {message.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(message.createdAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {!message.isRead && (
                    <Badge variant="default">Nova</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {message.message}
                </p>
                
                <Separator />
                
                <div className="flex items-center gap-2">
                  {!message.isRead && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => markAsRead(message._id)}
                    >
                      <MailOpen className="w-4 h-4 mr-2" />
                      Marcar como Lida
                    </Button>
                  )}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a href={`mailto:${message.email}`}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Responder por Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {messages.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhuma mensagem ainda
            </h3>
            <p className="text-gray-600">
              As mensagens enviadas através do formulário de contato aparecerão aqui.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Messages;