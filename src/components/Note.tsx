import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import NoteHomePage from "./NoteHomePage";
import ReactVirtualDOMNote from "./notes/ReactVirtualDOMNote";
import UseStateNote from "./notes/UseStateNote";
import UseEffectNote from "./notes/UseEffectNote";
import UseContextNote from "./notes/UseContextNote";
import VueBasicsNote from "./notes/VueBasicsNote";

// 定義筆記分類和頁面結構
const noteCategories = [
  {
    id: "react",
    title: "React",
    subPages: [
      { id: "react-virtual-dom", title: "Virtual DOM" },
      { id: "react-usestate", title: "useState" },
      { id: "react-useeffect", title: "useEffect" },
      { id: "react-usecontext", title: "useContext" },
    ],
  },
  {
    id: "vue",
    title: "Vue",
    subPages: [{ id: "vue-basics", title: "Vue 基礎" }],
  },
];

const Note = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 進入頁面時滾動到頂部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 當切換頁面時滾動到頂部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPage]);

  // 根據選中的頁面渲染對應的內容
  const renderContent = () => {
    switch (selectedPage) {
      case "home":
        return <NoteHomePage />;
      case "react-virtual-dom":
        return <ReactVirtualDOMNote />;
      case "react-usestate":
        return <UseStateNote />;
      case "react-useeffect":
        return <UseEffectNote />;
      case "react-usecontext":
        return <UseContextNote />;
      case "vue-basics":
        return <VueBasicsNote />;
      default:
        return <NoteHomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      {/* 手機版漢堡選單按鈕 */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed left-4 top-28 z-30 md:hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-3 rounded-lg shadow-lg"
        aria-label="開啟選單"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <Sidebar
        categories={noteCategories}
        selectedPage={selectedPage}
        onSelectPage={setSelectedPage}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* 主內容區域，桌面版左側留出 sidebar 空間，手機版全寬 */}
      <div className="md:ml-64 pt-24 pb-16 px-4 md:px-0">{renderContent()}</div>
    </div>
  );
};

export default Note;
