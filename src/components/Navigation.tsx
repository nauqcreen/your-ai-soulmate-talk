
import { useState } from "react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold font-crimson text-foreground">
          Tinktalk
        </div>
        
        {/* Minimal navigation - no menu items needed for single page */}
        <div className="text-sm text-muted-foreground">
          Early Access
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
