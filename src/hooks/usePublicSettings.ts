import { useState, useEffect } from 'react';

interface PublicSettings {
  siteName: string;
  tagline: string;
  description: string;
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
    headerStyle: string;
    footerText: string;
  };
}

const getDefaultPublicSettings = (): PublicSettings => ({
  siteName: 'Arquitetura do Potencial',
  tagline: 'Construindo carreiras extraordinárias através do desenvolvimento pessoal e profissional',
  description: 'Blog focado em desenvolvimento pessoal, inteligência emocional, soft skills e liderança para profissionais que buscam excelência.',
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
    googleAnalytics: 'G-FZQCMWQ69M', // Default Google Analytics ID
    googleTagManager: ''
  },
  appearance: {
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981',
    logo: '',
    favicon: '',
    headerStyle: 'modern',
    footerText: ''
  }
});

export const usePublicSettings = () => {
  const [settings, setSettings] = useState<PublicSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPublicSettings = async () => {
      try {
        // Try to load from localStorage first (saved settings)
        const savedSettings = localStorage.getItem('blog-settings');
        
        if (savedSettings) {
          const parsed = JSON.parse(savedSettings);
          // Extract only public settings
          const publicSettings: PublicSettings = {
            siteName: parsed.siteName || getDefaultPublicSettings().siteName,
            tagline: parsed.tagline || getDefaultPublicSettings().tagline,
            description: parsed.description || getDefaultPublicSettings().description,
            contactEmail: parsed.contactEmail || '',
            phone: parsed.phone || '',
            address: parsed.address || '',
            socialLinks: parsed.socialLinks || getDefaultPublicSettings().socialLinks,
            seo: parsed.seo || getDefaultPublicSettings().seo,
            appearance: parsed.appearance || getDefaultPublicSettings().appearance
          };
          setSettings(publicSettings);
          setIsLoading(false);
          return;
        }

        // Try to fetch from API
        const response = await fetch(`${import.meta.env.VITE_API_URL}/settings/public`);
        
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        } else {
          // Fallback to default settings
          setSettings(getDefaultPublicSettings());
        }
      } catch (error) {
        console.error('Error loading public settings:', error);
        // Fallback to default settings
        setSettings(getDefaultPublicSettings());
      } finally {
        setIsLoading(false);
      }
    };

    loadPublicSettings();
  }, []);

  return { settings, isLoading };
};