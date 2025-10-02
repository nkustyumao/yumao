const NoteHomePage = () => {
  return (
    <article className="max-w-[900px] mx-auto px-4 text-white leading-relaxed">
      {/* 主標題區域 */}
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          學習筆記
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          記錄我的學習旅程，分享技術心得與實踐經驗
        </p>
      </header>

      {/* 介紹區塊 */}
      <div className="space-y-8 mb-12">
        <div className="bg-gradient-to-br from-[rgba(102,126,234,0.1)] to-[rgba(118,75,162,0.1)] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📚</div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">關於這個筆記本</h2>
              <p className="text-white/80 leading-relaxed">
                這裡整理了我在前端開發學習過程中的各種筆記與心得。從 React 到 Vue，從基礎概念到進階應用，
                每一篇筆記都是我實際學習和實踐的記錄。希望這些內容不僅能幫助我自己複習，也能對其他學習者有所幫助。
              </p>
            </div>
          </div>
        </div>

        {/* 特色卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-lg font-semibold mb-2">React 學習</h3>
            <p className="text-sm text-white/70">
              深入學習 React Hooks、Virtual DOM 等核心概念
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">實踐導向</h3>
            <p className="text-sm text-white/70">
              結合實際專案經驗，記錄遇到的問題與解決方案
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-lg font-semibold mb-2">持續更新</h3>
            <p className="text-sm text-white/70">
              隨著學習的深入，不斷補充和完善筆記內容
            </p>
          </div>
        </div>
      </div>

      {/* 學習主題區域 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">目前涵蓋的主題</h2>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#667eea]/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#61dafb] to-[#4fa3d1] rounded-lg flex items-center justify-center text-2xl font-bold">
                R
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">React</h3>
                <p className="text-sm text-white/70">
                  Virtual DOM、Hooks（useState、useEffect、useContext）等核心概念
                </p>
              </div>
              <div className="text-sm text-white/50">4 篇筆記</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#42b883]/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#42b883] to-[#35495e] rounded-lg flex items-center justify-center text-2xl font-bold">
                V
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Vue</h3>
                <p className="text-sm text-white/70">
                  Vue 3 基礎語法、Composition API、響應式系統等
                </p>
              </div>
              <div className="text-sm text-white/50">1 篇筆記</div>
            </div>
          </div>
        </div>
      </div>

      {/* 使用指南 */}
      <div className="bg-gradient-to-r from-[rgba(102,126,234,0.05)] to-[rgba(118,75,162,0.05)] border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span>💡</span>
          <span>如何使用</span>
        </h2>
        <div className="space-y-3 text-white/80">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
              1
            </div>
            <p>點擊左側側邊欄的主題分類，展開查看該主題下的所有筆記</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
              2
            </div>
            <p>選擇感興趣的子主題，查看詳細的學習筆記內容</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
              3
            </div>
            <p>每篇筆記包含概念說明、程式碼範例和實用建議</p>
          </div>
        </div>
      </div>

      {/* 底部引導 */}
      <div className="mt-12 text-center">
        <p className="text-white/60 text-sm mb-4">
          ← 從左側選單開始探索學習筆記
        </p>
        <div className="inline-flex items-center gap-2 text-xs text-white/40">
          <span>📅</span>
          <span>持續更新中</span>
        </div>
      </div>
    </article>
  );
};

export default NoteHomePage;
