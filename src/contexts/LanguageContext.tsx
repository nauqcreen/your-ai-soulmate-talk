import React, { createContext, useContext, useState } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  vi: {
    // Navigation
    'nav.earlyAccess': 'Early Access',
    
    // Hero
    'hero.badge': 'Phát triển năng lực cá nhân',
    'hero.title': 'Ý tưởng của bạn thực sự trị giá bao nhiêu?',
    'hero.subtitle': 'Khi được trình bày một cách thuyết phục',
    'hero.cta': 'Khám phá ngay',
    
    // Form
    'form.title': 'Đăng ký nhận thông tin sớm, truy cập sớm, và nhận báo cáo năng lực đầu tiên',
    'form.reportNote': 'Báo cáo được AI phân tích dựa trên 1 bài tập ngắn do bạn thực hiện, giúp hiểu rõ điểm mạnh và tiềm năng cải thiện',
    'form.email.placeholder': 'Nhập email của bạn',
    'form.age.placeholder': 'Chọn độ tuổi của bạn',
    'form.age.under23': 'Dưới 23 tuổi',
    'form.age.23to30': '23 - 30 tuổi',
    'form.age.over30': 'Trên 30 tuổi',
    'form.address.placeholder': 'Chọn địa điểm của bạn',
    'form.address.hanoi': 'Hà Nội',
    'form.address.other': 'Khác',
    'form.address.otherInput': 'Nhập địa điểm của bạn',
    'form.button.next': 'Tiếp tục',
    'form.button.submit': 'Đăng ký ngay',
    
    // Success Message
    'success.welcome': 'Chào mừng bạn đến với',
    'success.thanks': 'Cảm ơn bạn đã tin tưởng và đồng hành cùng chúng tôi trong hành trình này!',
    'success.promise': 'Chúng tôi sẽ gửi cho bạn:',
    'success.item1': '• Thông tin độc quyền về sản phẩm',
    'success.item2': '• Quyền truy cập sớm khi ra mắt', 
    'success.item3': '• Báo cáo năng lực cá nhân đầu tiên',
    'success.note': 'Hãy theo dõi email của bạn để không bỏ lỡ tin tức mới nhất nhé! ✨',
    
    // Ecosystem
    'ecosystem.badge': 'Hệ sinh thái đối tác',
    'ecosystem.title': 'Tự hào là một phần của',
    'ecosystem.visi': 'Vườn ươm VISI',
  },
  en: {
    // Navigation
    'nav.earlyAccess': 'Early Access',
    
    // Hero
    'hero.badge': 'Personal Development',
    'hero.title': 'How much is your idea really worth?',
    'hero.subtitle': 'When presented persuasively',
    'hero.cta': 'Explore Now',
    
    // Form
    'form.title': 'Sign up for early access, exclusive updates, and your first capability report',
    'form.reportNote': 'AI-analyzed report based on a short exercise you complete, helping understand your strengths and improvement potential',
    'form.email.placeholder': 'Enter your email',
    'form.age.placeholder': 'Select your age group',
    'form.age.under23': 'Under 23',
    'form.age.23to30': '23 - 30 years old',
    'form.age.over30': 'Over 30',
    'form.address.placeholder': 'Select your location',
    'form.address.hanoi': 'Hanoi',
    'form.address.other': 'Other',
    'form.address.otherInput': 'Enter your location',
    'form.button.next': 'Continue',
    'form.button.submit': 'Sign Up Now',
    
    // Success Message
    'success.welcome': 'Welcome to',
    'success.thanks': 'Thank you for trusting and joining us on this journey!',
    'success.promise': 'We will send you:',
    'success.item1': '• Exclusive product information',
    'success.item2': '• Early access when launched',
    'success.item3': '• Your first personal capability report',
    'success.note': 'Please check your email for the latest updates! ✨',
    
    // Ecosystem
    'ecosystem.badge': 'Partner Ecosystem',
    'ecosystem.title': 'Proud to be part of',
    'ecosystem.visi': 'VISI Incubator',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['vi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};