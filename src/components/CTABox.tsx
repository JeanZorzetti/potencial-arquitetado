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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Excelente escolha!",
        description: "Você receberá conteúdos exclusivos em breve. Prepare-se para acelerar sua carreira!",
      });
      setEmail("");
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
        <Button type="submit" className="sm:px-6">
          {buttonText}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground mt-3">
        Sem spam. Cancele quando quiser. Seus dados estão seguros.
      </p>
    </div>
  );
};

export default CTABox;