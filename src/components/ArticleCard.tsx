import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CalendarDays, Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  slug: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  publishDate, 
  slug, 
  featured = false 
}: ArticleCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 border-border ${
      featured ? "md:col-span-2" : ""
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground space-x-3">
            <div className="flex items-center">
              <CalendarDays size={12} className="mr-1" />
              {publishDate}
            </div>
            <div className="flex items-center">
              <Clock size={12} className="mr-1" />
              {readTime}
            </div>
          </div>
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className={`font-sans font-semibold group-hover:text-primary transition-colors ${
            featured ? "text-xl md:text-2xl" : "text-lg"
          }`}>
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {excerpt}
        </p>
        <Link 
          to={`/blog/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors"
        >
          Ler artigo completo →
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;