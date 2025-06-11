
const PartnerStats = () => {
  const stats = [
    { value: '15+', label: 'Đối tác chiến lược' },
    { value: '5', label: 'Lĩnh vực hỗ trợ' },
    { value: '100%', label: 'Cam kết hỗ trợ' }
  ];

  return (
    <div className="mt-20 space-y-10">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-8 md:gap-16">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary font-crimson mb-2 animate-scale-in group-hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 150}ms` }}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-source">{stat.label}</div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {index < stats.length - 1 && (
              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default PartnerStats;
