
import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const SupportingEcosystem = () => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const supporters = [
    {
      id: 'vnu',
      name: 'Đại học Quốc gia Hà Nội',
      description: 'Cơ sở giáo dục và nghiên cứu hàng đầu Việt Nam',
      logo: '/lovable-uploads/7eec28a8-a177-401d-86e8-da999f14d0ee.png',
      website: '#'
    },
    {
      id: 'visi',
      name: 'VISI Innovation Center',
      description: 'Trung tâm đổi mới sáng tạo và khởi nghiệp',
      logo: '/lovable-uploads/visi-logo.png', // Placeholder - will be updated with actual uploaded logo
      website: '#'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      description: 'Hỗ trợ nền tảng điện toán đám mây',
      logo: '/lovable-uploads/aws-logo.png', // Placeholder - will be updated with actual uploaded logo
      website: '#'
    },
    {
      id: 'perplexity',
      name: 'Perplexity AI',
      description: 'Công nghệ tìm kiếm và trí tuệ nhân tạo',
      logo: '/lovable-uploads/perplexity-logo.png', // Placeholder - will be updated with actual uploaded logo
      website: '#'
    },
    {
      id: 'twendee',
      name: 'Twendee Labs',
      description: 'Hỗ trợ nghiên cứu và phát triển công nghệ',
      logo: '/lovable-uploads/twendee-logo.png', // Placeholder - will be updated with actual uploaded logo
      website: '#'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      description: 'Hỗ trợ nền tảng truyền thông xã hội',
      logo: '/lovable-uploads/tiktok-logo.png', // Placeholder - will be updated with actual uploaded logo
      website: '#'
    },
    {
      id: 'matbao',
      name: 'Mắt Bão',
      description: 'Hỗ trợ dịch vụ công nghệ thông tin',
      logo: '/lovable-uploads/matbao-logo.png', // Placeholder - will be updated with actual uploaded logo
      website: '#'
    },
    {
      id: 'sunwah',
      name: 'Sunwah Innovation Center',
      description: 'Trung tâm đổi mới và phát triển doanh nghiệp',
      logo: '/lovable-uploads/sunwah-logo.png', // Placeholder - will be updated with actual uploaded logo
      website: '#'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#EAE6DE]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-crimson text-foreground mb-6 leading-tight">
            Tự hào là một phần của Vườn ươm VISI và hệ sinh thái hỗ trợ
          </h2>
          
          {/* Descriptive Text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-source">
            Là một dự án tiềm năng tại VISI, chúng tôi may mắn nhận được sự hỗ trợ về công nghệ, 
            chuyên môn và cơ sở vật chất từ các tổ chức hàng đầu.
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {supporters.map((supporter) => (
              <HoverCard key={supporter.id} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div
                    className="group relative flex items-center justify-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 hover:bg-background/80 cursor-pointer"
                    onMouseEnter={() => setHoveredLogo(supporter.id)}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    {/* Logo Image */}
                    <div className="relative w-full h-16 md:h-20 overflow-hidden rounded">
                      <img
                        src={supporter.logo}
                        alt={supporter.name}
                        className={`w-full h-full object-contain transition-all duration-300 ease-out ${
                          hoveredLogo === supporter.id
                            ? 'filter-none transform scale-110'
                            : 'filter grayscale hover:filter-none hover:scale-105'
                        }`}
                        style={{
                          imageRendering: 'crisp-edges',
                          WebkitImageSmoothing: false,
                          imageSmoothing: false
                        }}
                      />
                      
                      {/* Subtle overlay for consistency */}
                      <div className={`absolute inset-0 bg-background/10 transition-opacity duration-300 ${
                        hoveredLogo === supporter.id ? 'opacity-0' : 'opacity-20'
                      }`}></div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                </HoverCardTrigger>
                
                <HoverCardContent 
                  className="w-80 p-4 bg-background/95 backdrop-blur-md border border-border shadow-xl" 
                  side="top"
                  sideOffset={8}
                >
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold font-crimson text-foreground">
                      {supporter.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-source leading-relaxed">
                      {supporter.description}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Subtle decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportingEcosystem;
