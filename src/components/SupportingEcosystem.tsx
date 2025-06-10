
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';

const SupportingEcosystem = () => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const [clickedLogo, setClickedLogo] = useState<string | null>(null);

  const supporters = [
    {
      id: 'vnu',
      name: 'Đại học Quốc gia Hà Nội',
      description: 'Đơn vị bảo trợ & đối tác chiến lược của VISI',
      logo: '/lovable-uploads/7eec28a8-a177-401d-86e8-da999f14d0ee.png',
      website: 'https://vnu.edu.vn',
      category: 'education'
    },
    {
      id: 'visi',
      name: 'VNU Innovation & Startup Incubator',
      description: 'Bệ phóng tăng tốc, kết nối mentor, nhà đầu tư',
      logo: '/lovable-uploads/ea1d1318-015b-47b4-95f5-1c39c9d3e0d2.png',
      website: 'https://visi.vnu.edu.vn',
      category: 'incubator'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      description: 'Đối tác nền tảng điện toán đám mây toàn cầu',
      logo: '/lovable-uploads/c44380fc-b235-4348-8aec-fef7a3f51411.png',
      website: 'https://aws.amazon.com',
      category: 'technology'
    },
    {
      id: 'perplexity',
      name: 'Perplexity AI',
      description: 'Tăng tốc bởi công nghệ AI thế hệ mới',
      logo: '/lovable-uploads/a67e3b2d-3093-4c93-8dc8-23633791c77d.png',
      website: 'https://perplexity.ai',
      category: 'ai'
    },
    {
      id: 'twendee',
      name: 'Twendee Labs',
      description: 'Đối tác trong mạng lưới đầu tư Công nghệ',
      logo: '/lovable-uploads/b83e5b1c-f946-42b6-adfd-e51600eb3a07.png',
      website: 'https://twendee.com',
      category: 'investment'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      description: 'Đối tác tăng tốc truyền thông xã hội',
      logo: '/lovable-uploads/455ba438-b802-43db-8b27-47840eaf3a0f.png',
      website: 'https://tiktok.com',
      category: 'social'
    },
    {
      id: 'matbao',
      name: 'Mắt Bão',
      description: 'Đối tác Google tại Việt Nam',
      logo: '/lovable-uploads/16f2568c-c350-4c2c-b7bf-904d9f5cb931.png',
      website: 'https://matbao.net',
      category: 'hosting'
    },
    {
      id: 'sunwah',
      name: 'Sunwah Innovation Center',
      description: 'Đối tác không gian & hệ sinh thái đổi mới sáng tạo cho doanh nghiệp',
      logo: '/lovable-uploads/72b4c62a-05f1-45a6-b054-f0c6744ff460.png',
      website: 'https://sunwah.com',
      category: 'innovation'
    }
  ];

  const handleLogoClick = (supporter: typeof supporters[0]) => {
    setClickedLogo(supporter.id);
    setTimeout(() => setClickedLogo(null), 400);
    
    if (supporter.website && supporter.website !== '#') {
      window.open(supporter.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <TooltipProvider delayDuration={300}>
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#EAE6DE]/30 via-background to-[#EAE6DE]/20 relative overflow-hidden">
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced Section Title */}
            <div className="mb-8 space-y-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Hệ sinh thái đối tác</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-crimson text-foreground mb-6 leading-tight animate-fade-in-up-enhanced">
                Tự hào là một phần của hệ sinh thái{' '}
                <span className="bg-gradient-to-r from-primary via-orange-500 to-accent bg-clip-text text-transparent animate-gradient-shift">
                  Vườn ươm VISI
                </span>{' '}
              </h2>
            </div>
            
            {/* Enhanced Descriptive Text */}
            <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-source animate-fade-in-up-enhanced delay-300">
              Là một dự án được lựa chọn bởi VISI, chúng tôi được tôi luyện về{' '}
              <span className="text-primary font-medium">công nghệ</span>,{' '}
              <span className="text-primary font-medium">chuyên môn</span> và{' '}
              <span className="text-primary font-medium">cơ sở vật chất</span> từ các tổ chức hàng đầu trong nước & quốc tế.
            </p>

            {/* Enhanced Logo Grid with Special Interactions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
              {supporters.map((supporter, index) => (
                <Tooltip key={supporter.id}>
                  <TooltipTrigger asChild>
                    <div
                      className={`group relative flex items-center justify-center p-4 md:p-6 lg:p-8 rounded-2xl transition-all duration-700 ease-out cursor-pointer overflow-hidden transform-gpu ${
                        hoveredLogo === supporter.id
                          ? 'bg-gradient-to-br from-orange-400/20 via-orange-500/15 to-orange-600/10 shadow-2xl shadow-orange-500/25 border-2 border-orange-400/40 -translate-y-3 scale-110 rotate-1'
                          : 'bg-card/50 border border-border/30 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-2 hover:scale-105'
                      } ${
                        clickedLogo === supporter.id ? 'scale-95 rotate-0' : ''
                      }`}
                      onMouseEnter={() => setHoveredLogo(supporter.id)}
                      onMouseLeave={() => setHoveredLogo(null)}
                      onClick={() => handleLogoClick(supporter)}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        willChange: 'transform, box-shadow, filter'
                      }}
                    >
                      {/* Magical particle effect */}
                      {hoveredLogo === supporter.id && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-orange-500/20 animate-pulse"></div>
                          <div className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                          <div className="absolute bottom-2 left-2 w-1 h-1 bg-orange-300 rounded-full animate-bounce delay-150"></div>
                          <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse delay-300"></div>
                        </>
                      )}
                      
                      {/* Logo Image with enhanced effects */}
                      <div className="relative w-full h-12 sm:h-16 md:h-20 lg:h-24 overflow-hidden rounded-xl">
                        <img
                          src={supporter.logo}
                          alt={supporter.name}
                          className={`w-full h-full object-contain transition-all duration-700 ease-out transform-gpu ${
                            hoveredLogo === supporter.id
                              ? 'filter-none scale-125 brightness-110 saturate-110'
                              : 'filter grayscale scale-100 hover:filter-none hover:scale-110'
                          }`}
                          loading="lazy"
                        />
                      </div>

                      {/* Enhanced glow effect on hover */}
                      <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
                        hoveredLogo === supporter.id
                          ? 'bg-gradient-to-br from-orange-400/10 via-transparent to-orange-500/10 shadow-inner'
                          : ''
                      }`}></div>
                      
                      {/* Click ripple effect */}
                      {clickedLogo === supporter.id && (
                        <div className="absolute inset-0 bg-orange-400/30 rounded-2xl animate-ping"></div>
                      )}

                      {/* Enhanced external link indicator */}
                      {supporter.website !== '#' && hoveredLogo === supporter.id && (
                        <div className="absolute top-3 right-3 w-7 h-7 bg-orange-500/90 rounded-full flex items-center justify-center animate-bounce">
                          <ArrowUpRight className="w-3 h-3 text-white" />
                        </div>
                      )}

                      {/* Micro-interaction sparkles */}
                      {hoveredLogo === supporter.id && (
                        <>
                          <div className="absolute top-4 left-1/2 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-100"></div>
                          <div className="absolute bottom-4 right-1/3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-pulse delay-200"></div>
                        </>
                      )}
                    </div>
                  </TooltipTrigger>
                  
                  <TooltipContent 
                    className="bg-orange-500/95 text-white px-4 py-2 rounded-lg shadow-xl border border-orange-400/50 backdrop-blur-sm font-medium text-sm"
                    side="top"
                    sideOffset={8}
                  >
                    Click để đăng nhập website
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Enhanced decorative element with animated stats */}
            <div className="mt-20 space-y-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-crimson mb-2 animate-scale-in group-hover:scale-110 transition-transform duration-300">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground font-source">Đối tác chiến lược</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent"></div>
                
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-crimson mb-2 animate-scale-in delay-150 group-hover:scale-110 transition-transform duration-300">
                    5
                  </div>
                  <div className="text-sm text-muted-foreground font-source">Lĩnh vực hỗ trợ</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent"></div>
                
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-crimson mb-2 animate-scale-in delay-300 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground font-source">Cam kết hỗ trợ</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default SupportingEcosystem;
