const Portfolio = () => {
  const Skill = ({ skill }: { skill: string }) => {
    return (
      <div className="flex gap-3 flex-wrap">
        <span className="py-2 px-4 bg-[rgba(102,126,234,0.2)] border border-[rgba(102,126,234,0.5)] rounded-[20px] text-[#667eea] text-[0.9rem]">
          {skill}
        </span>
      </div>
    );
  };

  return (
    <section id="portfolio" className="min-h-screen py-20 px-8 flex items-center justify-center">
      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          作品集
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
          {/* Portfolio Item 1 - Lelemom */}
          <div className="group bg-white/5 rounded-[15px] overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-[#667eea]">
            <div className="relative w-full h-[250px] bg-gradient-to-br from-[rgba(102,126,234,0.3)] to-[rgba(118,75,162,0.3)] overflow-hidden">
              <img src="/lelemom.png" alt="Lelemom" className="w-full h-full object-cover object-center block" />
              <div className="absolute inset-0 bg-[rgba(102,126,234,0.9)] flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-white text-[1.8rem] mb-2">Lelemom</h3>
                <a href="https://www.lelemom.com/" target="_blank" rel="noopener noreferrer">
                  <span className="text-white">點擊查看詳情</span>
                </a>
              </div>
            </div>
            <div className="p-8 relative min-h-[200px]">
              <h4 className="text-2xl text-white mb-4 group-hover:hidden">Lelemom</h4>

              {/* 正常狀態顯示 */}
              <div className="group-hover:hidden transition-all duration-300">
                <p className="text-white/70 mb-6 leading-[1.6]">使用 React + TypeScript 開發的網頁應用</p>
                <div className="flex gap-3 flex-wrap">
                  <Skill skill="Next.js" />
                  <Skill skill="useContext" />
                  <Skill skill="React Query" />
                  <Skill skill="React Hook Form" />
                  <Skill skill="Cloudflare" />
                </div>
              </div>

              {/* Hover 狀態顯示詳細描述 */}
              <div className="hidden group-hover:block transition-all duration-300">
                <p className="text-white/90 mb-4 leading-[1.8]">
                  販售檸檬甜點為主的網路平台，有訂位系統、第三方支付。採用 Next.js SSR 提升 SEO 效果，整合 React Query
                  進行高效資料管理，並使用 Bootstrap 與 CSS Modules 打造響應式介面。
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 - Badminton */}
          <div className="group bg-white/5 rounded-[15px] overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-[#667eea]">
            <div className="relative w-full h-[250px] bg-gradient-to-br from-[rgba(102,126,234,0.3)] to-[rgba(118,75,162,0.3)] overflow-hidden">
              <img src="/project2.jpg" alt="Badminton" className="w-full h-full object-cover object-center block" />
              <div className="absolute inset-0 bg-[rgba(102,126,234,0.9)] flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-white text-[1.8rem] mb-2">Badminton</h3>
                <p className="text-white/90 text-base">點擊查看詳情</p>
              </div>
            </div>
            <div className="p-8 relative min-h-[200px]">
              <h4 className="text-2xl text-white mb-4 group-hover:hidden">Badminton</h4>

              {/* 正常狀態顯示 */}
              <div className="group-hover:hidden transition-all duration-300">
                <p className="text-white/70 mb-6 leading-[1.6]">響應式網頁設計作品</p>
                <div className="flex gap-3 flex-wrap group-hover:hidden">
                  <Skill skill="Next.js for Full Stack" />
                  <Skill skill="MySQL" />
                  <Skill skill="Tailwind CSS" />
                  <Skill skill="Vercel" />
                </div>
              </div>

              {/* Hover 狀態顯示詳細描述 */}
              <div className="hidden group-hover:block transition-all duration-300">
                <p className="text-white/90 mb-4 leading-[1.8]">
                  羽球排隊下場系統。使用 Next.js 做全端開發，並將人員、場地等等資料以 MySQL 做資料庫管理。
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 3 - Bookcamp 書營 */}
          <div className="group bg-white/5 rounded-[15px] overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-[#667eea]">
            <div className="relative w-full h-[250px] bg-gradient-to-br from-[rgba(102,126,234,0.3)] to-[rgba(118,75,162,0.3)] overflow-hidden">
              <img src="/bookcamp.png" alt="Bookcamp 書營" className="w-full h-full object-cover object-center block" />
              <div className="absolute inset-0 bg-[rgba(102,126,234,0.9)] flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-white text-[1.8rem] mb-2">Bookcamp 書營</h3>
              </div>
            </div>
            <div className="p-8 relative min-h-[200px]">
              <h4 className="text-2xl text-white mb-4">Bookcamp 書營</h4>

              {/* 正常狀態顯示 */}
              <div className="group-hover:hidden transition-all duration-300">
                <p className="text-white/70 mb-6 leading-[1.6]">互動式使用者介面設計</p>
                <div className="flex gap-3 flex-wrap">
                  <Skill skill="React" />
                  <Skill skill="JWT" />
                  <Skill skill="Axios" />
                  <Skill skill="Bootstrap" />
                </div>
              </div>

              {/* Hover 狀態顯示詳細描述 */}
              <div className="hidden group-hover:block transition-all duration-300">
                <p className="text-white/90 mb-4 leading-[1.8]">
                  專案發想以遊戲與點陣圖風格去做設計，並且以諧音輸贏為網站名稱，希望讓使用者在瀏覽網站時，是以輕鬆且帶有點好奇的心情去操作，就如同在玩遊戲一樣。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
