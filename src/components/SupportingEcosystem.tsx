
import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ExternalLink, ArrowUpRight } from 'lucide-react';

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
      description: 'Đối tác cung cấp tên miền & nền tảng làm việc Google Workspace',
      logo: '/lovable-uploads/16f2568c-c350-4c2c-b7bf-904d9f5cb931.png',
      website: 'https://matbao.net',
      category: 'hosting'
    },
    {
      id: 'sunwah',
      name: 'Sunwah Innovation Center',
      description: 'Đối tác không gian & hệ sinh thái đổi mới sáng tạo',
      logo: '/lovable-uploads/72b4c62a-05f1-45a6-b054-f0c6744ff460.png',
      website: 'https://sunwah.com',
      category: 'innovation'
    }
  ];

  const handleLogoClick = (supporter: typeof supporters[0]) => {
    setClickedLogo(supporter.id);
    setTimeout(() => setClickedLogo(null), 300);
    
    if (supporter.website && supporter.website !== '#') {
      window.open(supporter.website, '_blank', 'noopener,noreferrer');
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      education: 'from-blue-500/20 to-indigo-500/20',
      incubator: 'from-green-500/20 to-emerald-500/20',
      technology: 'from-orange-500/20 to-red-500/20',
      ai: 'from-purple-500/20 to-pink-500/20',
      investment: 'from-yellow-500/20 to-amber-500/20',
      social: 'from-pink-500/20 to-rose-500/20',
      hosting: 'from-cyan-500/20 to-teal-500/20',
      innovation: 'from-violet-500/20 to-purple-500/20'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500/20 to-slate-500/20';
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#EAE6DE]/30 via-background to-[#EAE6DE]/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Title with enhanced animation */}
          <div className="mb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Hệ sinh thái đối tác</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-crimson text-foreground mb-6 leading-tight">
              Tự hào là một phần của{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                hệ sinh thái Vườn ươm VISI
              </span>{' '}
            </h2>
          </div>
          
          {/* Enhanced Descriptive Text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-source">
            Là một dự án tiềm năng tại VISI, chúng tôi được tăng tốc về{' '}
            <span className="text-primary font-medium">công nghệ</span>,{' '}
            <span className="text-primary font-medium">chuyên môn</span> và{' '}
            <span className="text-primary font-medium">cơ sở vật chất</span> từ các tổ chức hàng đầu trong nước & quốc tế.
          </p>

          {/* Enhanced Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {supporters.map((supporter) => (
              <HoverCard key={supporter.id} openDelay={150} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div
                    className={`group relative flex items-center justify-center p-6 rounded-xl bg-card border border-border/30 transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
                      hoveredLogo === supporter.id
                        ? 'shadow-2xl shadow-primary/20 border-primary/40 -translate-y-2 scale-105'
                        : 'hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1'
                    } ${
                      clickedLogo === supporter.id ? 'scale-95' : ''
                    }`}
                    onMouseEnter={() => setHoveredLogo(supporter.id)}
                    onMouseLeave={() => setHoveredLogo(null)}
                    onClick={() => handleLogoClick(supporter)}
                  >
                    {/* Dynamic background gradient based on category */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(supporter.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Logo Image with enhanced effects */}
                    <div className="relative w-full h-16 md:h-20 overflow-hidden rounded-lg">
                      <img
                        src={supporter.logo}
                        alt={supporter.name}
                        className={`w-full h-full object-contain transition-all duration-500 ease-out ${
                          hoveredLogo === supporter.id
                            ? 'filter-none transform scale-110 brightness-110'
                            : 'filter grayscale transform scale-100 hover:filter-none hover:scale-105'
                        }`}
                        loading="lazy"
                      />
                    </div>

                    {/* Animated border */}
                    <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Click ripple effect */}
                    {clickedLogo === supporter.id && (
                      <div className="absolute inset-0 bg-primary/20 rounded-xl animate-ping"></div>
                    )}

                    {/* External link indicator */}
                    {supporter.website !== '#' && (
                      <div className={`absolute top-2 right-2 w-6 h-6 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${hoveredLogo === supporter.id ? 'scale-100' : 'scale-75'}`}>
                        <ArrowUpRight className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                </HoverCardTrigger>
                
                <HoverCardContent 
                  className="w-80 p-5 bg-card/95 backdrop-blur-md border border-border/40 shadow-xl rounded-xl" 
                  side="top"
                  sideOffset={12}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-semibold font-crimson text-foreground leading-tight">
                        {supporter.name}
                      </h4>
                      {supporter.website !== '#' && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground font-source leading-relaxed">
                      {supporter.description}
                    </p>
                    {supporter.website !== '#' && (
                      <div className="pt-2 border-t border-border/30">
                        <span className="text-xs text-primary font-medium">
                          Click để truy cập website →
                        </span>
                      </div>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Enhanced decorative element with stats */}
          <div className="mt-16 space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-crimson">8+</div>
                <div className="text-sm text-muted-foreground font-source">Đối tác chiến lược</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-crimson">5</div>
                <div className="text-sm text-muted-foreground font-source">Lĩnh vực hỗ trợ</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-crimson">100%</div>
                <div className="text-sm text-muted-foreground font-source">Cam kết hỗ trợ</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportingEcosystem;
