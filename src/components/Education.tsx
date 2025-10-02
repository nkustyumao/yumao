function Education() {
  return (
    <section id="education" className="min-h-screen py-20 px-8 flex items-center justify-center">
      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          經歷
        </h2>
        <div className="relative max-w-[800px] mx-auto">
          {/* 時間線 */}
          <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#667eea] to-[#764ba2]"></div>

          {/* 大真有限公司 */}
          <div className="relative pl-20 mb-12">
            <div className="absolute left-5 top-[10px] w-5 h-5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] border-4 border-[#1a1a2e] shadow-[0_0_20px_rgba(102,126,234,0.6)]"></div>
            <div className="bg-white/5 p-8 rounded-[15px] border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#667eea] hover:translate-x-[10px] hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/dazhen.png"
                    alt="大真有限公司"
                    className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[1.8rem] text-white mb-2">大真有限公司</h3>
                  <p className="text-xl text-[#667eea] mb-2">前端工程師</p>
                  <p className="text-[0.95rem] text-white/50 mb-4">2025 - 至今</p>
                  <ul className="text-base text-white/70 leading-[1.6] list-disc pl-5 text-left">
                    <li>重構舊專案解決長期冗餘 Bug，加入註解提升閱讀性與開發效率。</li>
                    <li>使用 TypeScript 提升專案型別安全性與可維護性，降低執行階段錯誤風險。</li>
                    <li>搭配 Tailwind CSS 開發，提升開發速度與樣式一致性。</li>
                    <li>運用 Zustand 管理應用程式狀態，簡化狀態邏輯並優化效能表現。</li>
                    <li>結合 React Query 處理伺服器資料快取與同步，自動管理請求狀態，提升使用者操作流暢度。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 均福七七有限公司 */}
          <div className="relative pl-20 mb-12">
            <div className="absolute left-5 top-[10px] w-5 h-5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] border-4 border-[#1a1a2e] shadow-[0_0_20px_rgba(102,126,234,0.6)]"></div>
            <div className="bg-white/5 p-8 rounded-[15px] border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#667eea] hover:translate-x-[10px] hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0 bg-white rounded-lg">
                  <img
                    src="/lelemom-logo.png"
                    alt="均福七七有限公司"
                    className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[1.8rem] text-white mb-2">均福七七有限公司</h3>
                  <p className="text-xl text-[#667eea] mb-2">前端工程師</p>
                  <p className="text-[0.95rem] text-white/50 mb-4">2023 - 2025</p>
                  <ul className="text-base text-white/70 leading-[1.6] list-disc pl-5 text-left">
                    <li>
                      選擇 Next.js 伺服器端渲染（Server-Side Rendering）動態生成頁面內容，改善搜尋引擎索引效率與網站 SEO
                      評分，並優化首次載入體驗。
                    </li>
                    <li>
                      使用 useContext 搭配 React Query
                      管理資料狀態與伺服器請求，自動快取與同步資料，有效降低頁面載入延遲，提升使用者體驗與開發效率。
                    </li>
                    <li>使用 Bootstrap 與 CSS Modules，實現高維護性與可擴展性的網頁切版，降低樣式衝突風險。</li>
                    <li>使用 Node.js 搭配 Express 開發後端 API 服務，串接資料庫進行資料讀寫操作。</li>
                    <li>實作 JWT 身分驗證機制，處理使用者登入、權限與授權驗證。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 國立高雄科技大學 */}
          <div className="relative pl-20 mb-12">
            <div className="absolute left-5 top-[10px] w-5 h-5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] border-4 border-[#1a1a2e] shadow-[0_0_20px_rgba(102,126,234,0.6)]"></div>
            <div className="bg-white/5 p-8 rounded-[15px] border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#667eea] hover:translate-x-[10px] hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/nkust.png"
                    alt="國立高雄科技大學校徽"
                    className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[1.8rem] text-white mb-2">國立高雄科技大學</h3>
                  <p className="text-xl text-[#667eea] mb-2">電子工程學系-資訊工程組</p>
                  <p className="text-[0.95rem] text-white/50 mb-4">2020 - 2023</p>
                  <p className="text-base text-white/70 leading-[1.6]">
                    基於 YOLO 行人偵測之監視系統中可疑行為偵測之研究
                  </p>
                  <p className="text-base text-white/70 leading-[1.6]">
                    The Study on Suspicious Person Detection in Surveillance System Based on YOLO Pedestrian Detection
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 私立義守大學 */}
          <div className="relative pl-20 mb-12">
            <div className="absolute left-5 top-[10px] w-5 h-5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] border-4 border-[#1a1a2e] shadow-[0_0_20px_rgba(102,126,234,0.6)]"></div>
            <div className="bg-white/5 p-8 rounded-[15px] border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#667eea] hover:translate-x-[10px] hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/isu.jpeg"
                    alt="私立義守大學校徽"
                    className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[1.8rem] text-white mb-2">私立義守大學</h3>
                  <p className="text-xl text-[#667eea] mb-2">資訊工程學系</p>
                  <p className="text-[0.95rem] text-white/50 mb-4">2015 - 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
