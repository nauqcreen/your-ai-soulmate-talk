
import { useState } from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import SupportingEcosystemHeader from './SupportingEcosystemHeader';
import PartnerLogo from './PartnerLogo';
import PartnerStats from './PartnerStats';

const SupportingEcosystem = () => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const supporters = [
    {
      id: 'vnu',
      name: 'Đại học Quốc gia Hà Nội',
      description: 'Đơn vị bảo trợ & đối tác chiến lược của VISI',
      logo: '/lovable-uploads/7eec28a8-a177-401d-86e8-da999f14d0ee.png',
      category: 'education'
    },
    {
      id: 'visi',
      name: 'VNU Innovation & Startup Incubator',
      description: 'Bệ phóng tăng tốc, kết nối mentor, nhà đầu tư',
      logo: '/lovable-uploads/ea1d1318-015b-47b4-95f5-1c39c9d3e0d2.png',
      category: 'incubator'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      description: 'Đối tác nền tảng điện toán đám mây toàn cầu',
      logo: '/lovable-uploads/c44380fc-b235-4348-8aec-fef7a3f51411.png',
      category: 'technology'
    },
    {
      id: 'perplexity',
      name: 'Perplexity AI',
      description: 'Tăng tốc bởi công nghệ AI thế hệ mới',
      logo: '/lovable-uploads/a67e3b2d-3093-4c93-8dc8-23633791c77d.png',
      category: 'ai'
    },
    {
      id: 'twendee',
      name: 'Twendee Labs',
      description: 'Đối tác trong mạng lưới đầu tư Công nghệ',
      logo: '/lovable-uploads/b83e5b1c-f946-42b6-adfd-e51600eb3a07.png',
      category: 'investment'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      description: 'Đối tác tăng tốc truyền thông xã hội',
      logo: '/lovable-uploads/455ba438-b802-43db-8b27-47840eaf3a0f.png',
      category: 'social'
    },
    {
      id: 'matbao',
      name: 'Mắt Bão',
      description: 'Đối tác Google tại Việt Nam',
      logo: '/lovable-uploads/16f2568c-c350-4c2c-b7bf-904d9f5cb931.png',
      category: 'hosting'
    },
    {
      id: 'sunwah',
      name: 'Sunwah Innovation Center',
      description: 'Đối tác không gian & hệ sinh thái đổi mới sáng tạo cho doanh nghiệp',
      logo: '/lovable-uploads/72b4c62a-05f1-45a6-b054-f0c6744ff460.png',
      category: 'innovation'
    }
  ];

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
            <SupportingEcosystemHeader />

            {/* Enhanced Logo Grid with Special Interactions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
              {supporters.map((supporter, index) => (
                <PartnerLogo
                  key={supporter.id}
                  supporter={supporter}
                  index={index}
                  hoveredLogo={hoveredLogo}
                  onMouseEnter={setHoveredLogo}
                  onMouseLeave={() => setHoveredLogo(null)}
                />
              ))}
            </div>

            <PartnerStats />
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default SupportingEcosystem;
