
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, MessageCircle, Facebook, Github, ArrowUpRight, Code } from 'lucide-react';
import { useContent } from '../../lib/useContent';
import { Button } from './Button';

export const Footer: React.FC = () => {
  const { content, language } = useContent();
  const { footer, brand } = content;
  const [message, setMessage] = useState('');

  const WHATSAPP_NUMBER = "201016495229";

  const handleQuickMessage = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: language === 'ar' ? 'الرئيسية' : 'Home', path: '/' },
    { label: language === 'ar' ? 'من نحن' : 'About', path: '/about' },
    { label: language === 'ar' ? 'خدماتنا' : 'Services', path: '/services' },
    { label: language === 'ar' ? 'تواصل معنا' : 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { label: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy', path: '/legal/privacy' },
    { label: language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service', path: '/legal/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Elsakr/61584979738922/', label: 'Facebook' },
    { icon: Github, href: 'https://github.com/khalidsakrjoker/', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-slate-100 dark:bg-[#010208] border-t border-slate-200 dark:border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Quick Message */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="/Sakr-logo.webp" 
                alt={brand.name} 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" 
              />
              <span className="text-2xl font-bold tracking-wider uppercase font-mono text-gold-24k">
                {brand.name}
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              {language === 'ar' 
                ? 'نبني حلول برمجية متكاملة للشركات الطموحة. من الفكرة للتنفيذ.' 
                : 'We build scalable software solutions for ambitious companies. From idea to execution.'}
            </p>
            
            {/* WhatsApp Quick Message */}
            <div className="bg-white dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-white/10">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                {language === 'ar' ? 'رسالة سريعة على واتساب' : 'Quick WhatsApp Message'}
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleQuickMessage()}
                  placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
                  className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                />
                <Button 
                  onClick={handleQuickMessage}
                  className="!bg-green-500 hover:!bg-green-600 !px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {language === 'ar' ? 'قانوني' : 'Legal'}
            </h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {language === 'ar' ? 'تابعنا' : 'Follow Us'}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} {brand.name}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-slate-400 dark:text-slate-600 text-xs">
              {language === 'ar' ? 'صُنع بـ ❤️ في مصر' : 'Made with ❤️ in Egypt'}
            </p>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a 
              href="https://github.com/khalidsakrjoker/Elsakr-Main-Website"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-slate-400 dark:text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 text-xs flex items-center gap-1 transition-colors"
            >
              <Code className="w-3 h-3" />
              {language === 'ar' ? 'الكود المصدري' : 'Source Code'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
