import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Mail, BookOpen } from "lucide-react";

interface CTABoxProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "newsletter" | "framework";
}

const CTABox = ({ 
  title = "Receba os próximos guias",
  description = "Um e-mail quando sair um guia novo de soft skills, inteligência emocional ou liderança.",
  buttonText = "Receber os guias",
  variant = "newsletter"
}: CTABoxProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Inscrição feita",
          description: "Você vai receber um e-mail quando sair um guia novo.",
        });
        setEmail("");
      } else {
        const errorData = await response.json();
        if (response.status === 400 && errorData.error?.includes('já está inscrito')) {
          toast({
            title: "Este e-mail já está inscrito",
            description: "Os próximos guias já vão chegar nele.",
            variant: "destructive",
          });
        } else {
          throw new Error(errorData.error || 'Erro desconhecido');
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Não deu para inscrever agora",
        description: "Tente de novo em alguns minutos.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const Icon = variant === "newsletter" ? Mail : BookOpen;

  return (
    <div className="cta-box max-w-2xl mx-auto text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-primary/20 p-3 rounded-full">
          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
      </div>
      
      <h3 className="text-xl font-sans font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          aria-label="Seu e-mail"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" className="sm:px-6" disabled={isSubmitting}>
          {isSubmitting ? "Inscrevendo…" : buttonText}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground mt-3">
        Sem spam. Cancele quando quiser.{" "}
        <a href="/privacidade" className="underline underline-offset-2">
          Política de Privacidade
        </a>
      </p>
    </div>
  );
};

export default CTABox;