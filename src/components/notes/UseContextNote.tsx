const UseContextNote = () => {
  return (
    <article className="max-w-[900px] mx-auto px-4 text-[rgb(55,53,47)] leading-relaxed">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mt-0 mb-3 text-white">useContext Hook</h1>
      </header>
      
      <div className="space-y-6 text-white/90">
        <h3 className="bg-[rgba(102,126,234,0.2)] p-4 rounded-lg text-xl font-semibold">
          useContext 讓你可以讀取和訂閱組件中的 context，避免 props drilling 問題。
        </h3>

        <h2 className="text-3xl font-semibold mt-12 mb-4">基本用法</h2>
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code className="text-[#a9b7c6]">{`import { createContext, useContext } from 'react';

// 1. 創建 Context
const ThemeContext = createContext('light');

// 2. 提供 Context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. 使用 Context
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>按鈕</button>;
}`}</code>
          </pre>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">完整範例</h2>
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code className="text-[#a9b7c6]">{`// UserContext.tsx
import { createContext, useState, useContext } from 'react';

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}`}</code>
          </pre>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">優點</h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>
            <strong>避免 Props Drilling</strong>：不需要通過多層組件傳遞 props
          </li>
          <li>
            <strong>全域狀態管理</strong>：適合管理應用級別的狀態
          </li>
          <li>
            <strong>組件解耦</strong>：減少組件之間的依賴關係
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-4">使用場景</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[rgba(102,126,234,0.1)] p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-blue-400">✓ 適合使用</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>主題設置</li>
              <li>用戶認證資訊</li>
              <li>語言設置</li>
              <li>全域配置</li>
            </ul>
          </div>
          <div className="bg-[rgba(255,100,100,0.1)] p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-red-400">✗ 不適合使用</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>頻繁變化的狀態</li>
              <li>需要高性能的場景</li>
              <li>簡單的父子組件通信</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">注意事項</h2>
        <div className="bg-[rgba(255,200,0,0.1)] border-l-4 border-yellow-500 p-4 rounded">
          <ul className="list-disc pl-5 space-y-2">
            <li>Context 變化會導致所有使用該 Context 的組件重新渲染</li>
            <li>考慮將 Context 拆分成多個較小的 Context 以優化性能</li>
            <li>使用 memo 或 useMemo 來避免不必要的重新渲染</li>
            <li>不要過度使用 Context，簡單場景用 props 即可</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default UseContextNote;

