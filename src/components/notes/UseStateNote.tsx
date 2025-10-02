const UseStateNote = () => {
  return (
    <article className="max-w-[900px] mx-auto px-4 text-[rgb(55,53,47)] leading-relaxed">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mt-0 mb-3 text-white">useState Hook</h1>
      </header>

      <div className="space-y-6 text-white/90">
        <h3 className="bg-[rgba(102,126,234,0.2)] p-4 rounded-lg text-xl font-semibold">
          useState 是 React 提供的一個 Hook，讓你可以在 function component 中使用 state。
        </h3>

        <h2 className="text-3xl font-semibold mt-12 mb-4">基本用法</h2>
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code className="text-[#a9b7c6]">{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>目前計數: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  );
}`}</code>
          </pre>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">重要概念</h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>
            <strong>初始值</strong>：useState 接受一個初始值作為參數
          </li>
          <li>
            <strong>返回值</strong>：返回一個陣列，包含當前狀態值和更新狀態的函數
          </li>
          <li>
            <strong>狀態更新</strong>：呼叫 setState 會觸發組件重新渲染
          </li>
          <li>
            <strong>非同步更新</strong>：狀態更新可能是非同步的，如需基於前一個狀態更新，應使用函數形式
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-4">進階用法</h2>
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code className="text-[#a9b7c6]">{`// 使用函數形式更新狀態
setCount(prevCount => prevCount + 1);

// 惰性初始化（只在首次渲染時執行）
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation();
  return initialState;
});`}</code>
          </pre>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">注意事項</h2>
        <div className="bg-[rgba(255,200,0,0.1)] border-l-4 border-yellow-500 p-4 rounded">
          <ul className="list-disc pl-5 space-y-2">
            <li>不要在循環、條件或嵌套函數中呼叫 Hook</li>
            <li>只在 React 函數組件或自定義 Hook 中呼叫 Hook</li>
            <li>狀態更新是非同步的，不要依賴於立即取得更新後的值</li>
            <li>對於複雜的狀態邏輯，考慮使用 useReducer</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default UseStateNote;
