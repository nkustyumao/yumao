const VueBasicsNote = () => {
  return (
    <article className="max-w-[900px] mx-auto px-4 text-[rgb(55,53,47)] leading-relaxed">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mt-0 mb-3 text-white">Vue 基礎</h1>
      </header>
      
      <div className="space-y-6 text-white/90">
        <h3 className="bg-[rgba(66,184,131,0.2)] p-4 rounded-lg text-xl font-semibold">
          Vue 是一個漸進式的 JavaScript 框架，用於構建使用者介面。
        </h3>

        <h2 className="text-3xl font-semibold mt-12 mb-4">創建 Vue 應用</h2>
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code className="text-[#a9b7c6]">{`import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`}</code>
          </pre>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">模板語法</h2>
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code className="text-[#a9b7c6]">{`<template>
  <div>
    <!-- 文本插值 -->
    <p>{{ message }}</p>
    
    <!-- 屬性綁定 -->
    <div :id="dynamicId"></div>
    
    <!-- 事件處理 -->
    <button @click="handleClick">點擊</button>
    
    <!-- 條件渲染 -->
    <p v-if="isVisible">可見內容</p>
    
    <!-- 列表渲染 -->
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
const isVisible = ref(true)
const items = ref([
  { id: 1, text: '項目 1' },
  { id: 2, text: '項目 2' }
])

function handleClick() {
  console.log('按鈕被點擊')
}
</script>`}</code>
          </pre>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">核心特性</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[rgba(66,184,131,0.1)] p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-400">響應式系統</h3>
            <p className="text-sm">自動追蹤資料變化並更新 DOM</p>
          </div>
          <div className="bg-[rgba(66,184,131,0.1)] p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-400">組件系統</h3>
            <p className="text-sm">構建可重用的 UI 組件</p>
          </div>
          <div className="bg-[rgba(66,184,131,0.1)] p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-400">指令系統</h3>
            <p className="text-sm">使用 v- 前綴的特殊屬性</p>
          </div>
          <div className="bg-[rgba(66,184,131,0.1)] p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-400">單文件組件</h3>
            <p className="text-sm">.vue 文件包含模板、邏輯和樣式</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4">Composition API vs Options API</h2>
        <div className="space-y-4">
          <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Composition API（推薦）</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>更好的 TypeScript 支持</li>
              <li>更靈活的邏輯組合</li>
              <li>更容易重用代碼</li>
            </ul>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-purple-400">Options API</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>更傳統的寫法</li>
              <li>學習曲線較平緩</li>
              <li>適合簡單應用</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VueBasicsNote;

