const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  // Site Basic Info
  siteName: {
    type: String,
    default: 'Arquitetura do Potencial'
  },
  tagline: {
    type: String,
    default: 'Construindo carreiras extraordinárias através do desenvolvimento pessoal e profissional'
  },
  description: {
    type: String,
    default: 'Blog focado em desenvolvimento pessoal, inteligência emocional, soft skills e liderança para profissionais que buscam excelência.'
  },
  
  // Contact Info
  adminEmail: {
    type: String,
    default: 'admin@example.com'
  },
  contactEmail: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  
  // Social Links
  socialLinks: {
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' },
    instagram: { type: String, default: '' },
    facebook: { type: String, default: '' },
    youtube: { type: String, default: '' },
    github: { type: String, default: '' }
  },
  
  // SEO Settings
  seo: {
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    keywords: { type: String, default: '' },
    ogImage: { type: String, default: '' },
    favicon: { type: String, default: '' },
    googleAnalytics: { type: String, default: '' },
    googleTagManager: { type: String, default: '' }
  },
  
  // Appearance Settings
  appearance: {
    primaryColor: { type: String, default: '#3B82F6' },
    secondaryColor: { type: String, default: '#10B981' },
    logo: { type: String, default: '' },
    favicon: { type: String, default: '' },
    headerStyle: { type: String, enum: ['simple', 'centered', 'modern'], default: 'modern' },
    footerText: { type: String, default: '' }
  },
  
  // Content Settings
  content: {
    articlesPerPage: { type: Number, default: 6 },
    showExcerpts: { type: Boolean, default: true },
    excerptLength: { type: Number, default: 150 },
    enableComments: { type: Boolean, default: false },
    moderateComments: { type: Boolean, default: true },
    allowGuestComments: { type: Boolean, default: false }
  },
  
  // Newsletter Settings
  newsletter: {
    enabled: { type: Boolean, default: true },
    welcomeSubject: { type: String, default: 'Bem-vindo(a) ao Arquitetura do Potencial!' },
    welcomeMessage: { type: String, default: 'Obrigado por se inscrever na nossa newsletter. Você receberá conteúdo exclusivo sobre desenvolvimento pessoal e profissional.' },
    mailProvider: { type: String, enum: ['local', 'mailgun', 'sendgrid', 'ses'], default: 'local' },
    apiKey: { type: String, default: '' },
    fromEmail: { type: String, default: '' },
    fromName: { type: String, default: '' }
  },
  
  // Security Settings
  security: {
    enableCaptcha: { type: Boolean, default: false },
    recaptchaSiteKey: { type: String, default: '' },
    recaptchaSecretKey: { type: String, default: '' },
    enableRateLimit: { type: Boolean, default: true },
    maxLoginAttempts: { type: Number, default: 5 },
    sessionTimeout: { type: Number, default: 24 } // hours
  },
  
  // Backup Settings
  backup: {
    enabled: { type: Boolean, default: false },
    frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'weekly' },
    retention: { type: Number, default: 30 }, // days
    lastBackup: { type: Date, default: null }
  }
}, { 
  timestamps: true,
  // Ensure only one settings document exists
  collection: 'settings'
});

// Static method to get or create settings
settingsSchema.statics.getSettings = async function() {
  let settings = await this.findOne();
  if (!settings) {
    settings = await this.create({});
  }
  return settings;
};

// Static method to update settings
settingsSchema.statics.updateSettings = async function(updates) {
  let settings = await this.findOne();
  if (!settings) {
    settings = await this.create(updates);
  } else {
    Object.assign(settings, updates);
    await settings.save();
  }
  return settings;
};

module.exports = mongoose.model('Settings', settingsSchema);