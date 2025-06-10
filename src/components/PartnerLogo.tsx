
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface PartnerLogoProps {
  supporter: {
    id: string;
    name: string;
    logo: string;
  };
  index: number;
  hoveredLogo: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

const PartnerLogo = ({ 
  supporter, 
  index, 
  hoveredLogo, 
  onMouseEnter, 
  onMouseLeave
}: PartnerLogoProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`group relative flex items-center justify-center p-4 md:p-6 lg:p-8 rounded-2xl transition-all duration-300 ease-out overflow-hidden transform-gpu bg-white border border-border/30 ${
            hoveredLogo === supporter.id
              ? 'shadow-xl hover:shadow-primary/10 hover:border-primary/30 -translate-y-2 scale-105'
              : 'hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 hover:scale-102'
          }`}
          onMouseEnter={() => onMouseEnter(supporter.id)}
          onMouseLeave={onMouseLeave}
          style={{
            animationDelay: `${index * 100}ms`,
            willChange: 'transform, box-shadow'
          }}
        >
          {/* Logo Image with enhanced effects */}
          <div className="relative w-full h-12 sm:h-16 md:h-20 lg:h-24 overflow-hidden rounded-xl">
            <img
              src={supporter.logo}
              alt={supporter.name}
              className={`w-full h-full object-contain transition-all duration-300 ease-out transform-gpu ${
                hoveredLogo === supporter.id
                  ? 'filter-none scale-125'
                  : 'filter grayscale scale-100 hover:filter-none hover:scale-110'
              }`}
              loading="lazy"
            />
          </div>
        </div>
      </TooltipTrigger>
      
      <TooltipContent 
        className="bg-popover text-popover-foreground px-4 py-2 rounded-lg shadow-xl border border-border backdrop-blur-sm font-medium text-sm"
        side="top"
        sideOffset={8}
      >
        {supporter.name}
      </TooltipContent>
    </Tooltip>
  );
};

export default PartnerLogo;
