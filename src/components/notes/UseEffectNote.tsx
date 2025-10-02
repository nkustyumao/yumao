const UseEffectNote = () => {
  return (
    <article className="max-w-[900px] mx-auto px-4 text-[rgb(55,53,47)] leading-relaxed">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mt-0 mb-3 text-white">useEffect Hook</h1>
      </header>
      
      <div className="space-y-6 text-white/90">
        <h3 className="bg-[rgba(102,126,234,0.2)] p-4 rounded-lg text-xl font-semibold">
          useEffect 讓你可以在 function component 中執行副作用操作（side effects），例如資料獲取、訂閱或手動更改 DOM。
        </h3>

        <h2 className="text-3xl font-semibold mt-12 mb-4">基本用法</h2>
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code className="text-[#a9b7c6]">{`import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 每次渲染後都會執行
  useEffect(() => {
    document.title = \`你點擊了 \${count} 次\`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      點擊 {count} 次
    </button>
  );
}`}</code>
          </pre>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">依賴陣列</h2>
        <div className="space-y-4">
          <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">1. 無依賴陣列 - 每次渲染都執行</h3>
            <pre className="text-sm overflow-x-auto">
              <code className="text-[#a9b7c6]">{`useEffect(() => {
  // 每次渲染後都執行
});`}</code>
            </pre>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-green-400">2. 空依賴陣列 - 只在掛載時執行一次</h3>
            <pre className="text-sm overflow-x-auto">
              <code className="text-[#a9b7c6]">{`useEffect(() => {
  // 只在組件掛載時執行一次
}, []);`}</code>
            </pre>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-purple-400">3. 指定依賴 - 依賴變化時執行</h3>
            <pre className="text-sm overflow-x-auto">
              <code className="text-[#a9b7c6]">{`useEffect(() => {
  // 當 count 改變時執行
}, [count]);`}</code>
            </pre>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">清理函數</h2>
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code className="text-[#a9b7c6]">{`useEffect(() => {
  // 訂閱
  const subscription = subscribe();
  
  // 返回清理函數
  return () => {
    // 取消訂閱
    subscription.unsubscribe();
  };
}, []);`}</code>
          </pre>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">常見使用場景</h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>從 API 獲取資料</li>
          <li>設置訂閱或監聽器</li>
          <li>手動更改 DOM</li>
          <li>設置定時器</li>
          <li>本地儲存的讀寫</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-4">注意事項</h2>
        <div className="bg-[rgba(255,200,0,0.1)] border-l-4 border-yellow-500 p-4 rounded">
          <ul className="list-disc pl-5 space-y-2">
            <li>確保列出所有在 effect 中使用的組件內部值到依賴陣列中</li>
            <li>清理函數會在組件卸載前執行</li>
            <li>避免在 useEffect 中產生無限循環</li>
            <li>如果 effect 不需要清理，可以不返回清理函數</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default UseEffectNote;

