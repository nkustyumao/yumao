const ReactVirtualDOMNote = () => {
  return (
    <article className="max-w-[900px] mx-auto px-4 text-[rgb(55,53,47)] leading-relaxed">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mt-0 mb-3 text-white">React Virtual DOM</h1>
      </header>
      
      <div className="space-y-6 text-white/90">
        <h3 className="bg-[rgba(102,126,234,0.2)] p-4 rounded-lg text-xl font-semibold">
          DOM 是一種樹狀資料結構，用於表示瀏覽器中的畫面元素，<strong>操作DOM會連動瀏覽器的渲染引擎重繪畫面因而效能成本昂貴</strong>。
        </h3>
        
        <h3 className="bg-[rgba(102,126,234,0.2)] p-4 rounded-lg text-xl font-semibold">
          Virtual DOM 是一種程式設計概念，旨在有效處理 UI 結構管理。它透過創建一個虛擬的畫面結構來模擬實際的 DOM，這種虛擬結構會持續同步化到與實際的 DOM，從而為 UI 管理提供便利和效能優勢。
        </h3>
        
        <h3 className="bg-[rgba(102,126,234,0.2)] p-4 rounded-lg text-xl font-semibold">
          React Element 是 React 基於 Virtual DOM 概念所實現的虛擬畫面結構元素，因此它本質上只是一個 JS 物件，用於描述一個預期的實際 DOM Element 結構，同時也是 React 中畫面結構描述的最小單位。
        </h3>
        
        <h3 className="bg-[rgba(102,126,234,0.2)] p-4 rounded-lg text-xl font-semibold">
          React element 一旦被建立後就不得被事後修改，這是因為 React element 是在描述某個歷史時間點版本的畫面結構。
        </h3>
        
        <h3 className="bg-[rgba(102,126,234,0.2)] p-4 rounded-lg text-xl font-semibold">
          React 基於 Virtual DOM 的概念，將定義以及管理畫面結構描述（reconciler）、將畫面結構的描述繪製成實際畫面成品（renderer），分拆成兩個階段處理，因此 React 可以藉由替換 renderer 來管理並產生瀏覽器以外的其他環境裡的 UI 畫面，達到 Learn once, write anywhere。
        </h3>

        <h1 className="text-4xl font-semibold mt-12 mb-4 text-white">我的理解</h1>
        <h3 className="text-xl font-normal leading-relaxed">
          在 React 要進行畫面渲染時，會先生成一個虛擬的 DOM 樹狀資料結構，再經過 React 本身的處理就可以生成實際的 DOM tree。之所以這樣設計是因為 React 希望當畫面有地方要作修改或者更新時，不需要重新生成整個 DOM tree。如果只是一個小部分做了改動就重新生成，這樣非常的耗能。所以 React 的虛擬 DOM 就是在當畫面有任何變動時，一樣會先生成新的虛擬 DOM，然後將新的虛擬 DOM 與舊的虛擬 DOM 作比較，最後就只針對有變動的地方去作畫面渲染。雖然說這樣也是會需要生成虛擬的 DOM tree，但是這些 React Element 就只是 JavaScript 的物件而已，跟生成實際的 DOM tree 能耗比較來說還是相對低很多的。
        </h3>

        <h1 className="text-4xl font-semibold mt-12 mb-4 text-white">深入理解</h1>
        <p className="my-4">
          Virtual DOM 的運作方式可以補充一些細節來更精準地描述：
        </p>

        <hr className="my-6 border-0 border-b border-[rgba(255,255,255,0.1)]" />

        <h3 className="text-xl font-semibold mb-4 text-white">核心概念：</h3>
        <ol className="list-decimal pl-8 space-y-4">
          <li>
            <strong>React 會先生成虛擬 DOM (Virtual DOM)</strong>：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>虛擬 DOM 是一個用 JavaScript 表示的樹狀結構，代表 UI 的狀態。</li>
              <li>React 使用虛擬 DOM 來模擬實際 DOM。</li>
            </ul>
          </li>
          <li>
            <strong>比對新舊虛擬 DOM</strong>：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>當 UI 發生變化時，React 會生成一棵新的虛擬 DOM。</li>
              <li>React 比對新的虛擬 DOM 和舊的虛擬 DOM，找出差異。</li>
            </ul>
          </li>
          <li>
            <strong>只更新需要更新的部分</strong>：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>React 根據差異生成一個更新補丁（Patch），只對真實 DOM 執行必要的更新操作。</li>
              <li>這種方式比直接操作整個真實 DOM 高效許多。</li>
            </ul>
          </li>
          <li>
            <strong>虛擬 DOM 操作更高效</strong>：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>虛擬 DOM 是用 JavaScript 物件實現的，因此操作虛擬 DOM 比直接操作真實 DOM 快很多。</li>
            </ul>
          </li>
        </ol>

        <hr className="my-6 border-0 border-b border-[rgba(255,255,255,0.1)]" />

        <h3 className="text-xl font-semibold mb-4 text-white">進階概念：</h3>
        <ol className="list-decimal pl-8 space-y-4">
          <li>
            <strong>React 的虛擬 DOM 不直接生成實際 DOM Tree</strong>：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>虛擬 DOM 是一個用於描述 UI 的抽象層，但它不會「直接」生成實際的 DOM tree。</li>
              <li>真正生成或更新 DOM 是 React 的「Reconciliation（協調）」過程的一部分，包含比對和應用更新。</li>
            </ul>
          </li>
          <li>
            <strong>Diffing 過程中的優化</strong>：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>React 使用 <strong>Diffing Algorithm</strong>（差異算法）來快速比較新舊虛擬 DOM，並找到需要更新的部分。</li>
              <li>它不會逐層完全比對，而是使用一些策略（如 key 的應用）來優化比對過程。</li>
            </ul>
          </li>
          <li>
            <strong>局部更新的背後：Batching 和 Fiber</strong>：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>React 的更新過程中引入了「批量更新」（Batching），確保多個狀態變化能合併成一次 DOM 更新。</li>
              <li>React Fiber（React 16 引入）進一步優化了虛擬 DOM 的渲染機制，使得更新過程可以分片執行，優化性能並提高用戶體驗。</li>
            </ul>
          </li>
          <li>
            <strong>虛擬 DOM 並非唯一解法</strong>：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>雖然虛擬 DOM 的效率高於直接操作真實 DOM，但也有其他框架（如 Svelte）採用了不同的優化方式。</li>
            </ul>
          </li>
        </ol>

        <hr className="my-6 border-0 border-b border-[rgba(255,255,255,0.1)]" />

        <h3 className="text-xl font-semibold mb-4 text-white">總結：</h3>
        <p className="my-4 leading-relaxed">
          在 React 中，虛擬 DOM 是用 JavaScript 表示的一個樹狀結構，用於描述 UI 的狀態。在更新過程中，React 會生成新的虛擬 DOM，並與舊的虛擬 DOM 比較，找出差異。通過這些差異，React 只對需要更新的部分進行操作，而不重新渲染整棵 DOM tree。虛擬 DOM 的操作效率高，因為它是基於記憶體的 JavaScript 物件，比直接操作真實 DOM 快得多。React 的設計（如 Fiber 和批量更新）進一步提升了這一過程的性能。
        </p>

        <div className="bg-[rgba(102,126,234,0.1)] border-l-4 border-blue-500 p-4 rounded mt-8">
          <p className="text-sm">
            💡 <strong>提示：</strong>理解 Virtual DOM 的核心在於認識到它是一種性能優化策略，通過在記憶體中進行計算來減少昂貴的 DOM 操作。
          </p>
        </div>
      </div>
    </article>
  );
};

export default ReactVirtualDOMNote;

