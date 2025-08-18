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
  title = "Acelere Sua Carreira com Frameworks Práticos",
  description = "Receba estratégias exclusivas baseadas em ciência para desenvolver soft skills e inteligência emocional.",
  buttonText = "Quero Acelerar Minha Carreira",
  variant = "newsletter"
}: CTABoxProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Excelente escolha!",
          description: "Você receberá conteúdos exclusivos em breve. Prepare-se para acelerar sua carreira!",
        });
        setEmail("");
      } else {
        const errorData = await response.json();
        if (response.status === 400 && errorData.error?.includes('já está inscrito')) {
          toast({
            title: "E-mail já cadastrado",
            description: "Este e-mail já está inscrito na nossa newsletter.",
            variant: "destructive",
          });
        } else {
          throw new Error(errorData.error || 'Erro desconhecido');
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Erro na inscrição",
        description: "Não foi possível realizar a inscrição. Tente novamente mais tarde.",
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
          <Icon className="w-6 h-6 text-primary" />
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
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" className="sm:px-6" disabled={isSubmitting}>
          {isSubmitting ? "Inscrevendo..." : buttonText}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground mt-3">
        Sem spam. Cancele quando quiser. Seus dados estão seguros.
      </p>
    </div>
  );
};

export default CTABox;