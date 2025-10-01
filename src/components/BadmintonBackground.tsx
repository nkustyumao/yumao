const BadmintonBackground = () => {
  // 創建多個羽毛球，每個有不同的動畫參數
  const shuttlecocks = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    startX: Math.random() * 100,
    endX: Math.random() * 100,
    size: 20 + Math.random() * 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shuttlecocks.map((shuttle) => (
        <div
          key={shuttle.id}
          className="absolute animate-float"
          style={{
            left: `${shuttle.startX}%`,
            animationDelay: `${shuttle.delay}s`,
            animationDuration: `${shuttle.duration}s`,
            width: `${shuttle.size}px`,
            height: `${shuttle.size}px`,
            opacity: 0.3,
          }}
        >
          {/* 羽毛球 SVG */}
          <img src="/badminton-ball.png" alt="Badminton" className="w-full h-full object-cover object-center block" />
        </div>
      ))}

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.15;
          }
          90% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() > 0.5 ? "" : "-"}${
        50 + Math.random() * 100
      }px) rotate(${360 + Math.random() * 360}deg);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BadmintonBackground;
