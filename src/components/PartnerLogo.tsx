
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
          className={`group relative flex items-center justify-center p-4 md:p-6 lg:p-8 rounded-2xl transition-all duration-700 ease-out overflow-hidden transform-gpu ${
            hoveredLogo === supporter.id
              ? 'bg-gradient-to-br from-orange-400/20 via-orange-500/15 to-orange-600/10 shadow-2xl shadow-orange-500/25 border-2 border-orange-400/40 -translate-y-3 scale-110 rotate-1'
              : 'bg-card/50 border border-border/30 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-2 hover:scale-105'
          }`}
          onMouseEnter={() => onMouseEnter(supporter.id)}
          onMouseLeave={onMouseLeave}
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
        {supporter.name}
      </TooltipContent>
    </Tooltip>
  );
};

export default PartnerLogo;
