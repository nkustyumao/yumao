import { useState } from "react";

interface SubPage {
  id: string;
  title: string;
}

interface Category {
  id: string;
  title: string;
  subPages: SubPage[];
}

interface SidebarProps {
  categories: Category[];
  selectedPage: string;
  onSelectPage: (pageId: string) => void;
}

const Sidebar = ({ categories, selectedPage, onSelectPage }: SidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["react"]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  return (
    <aside className="fixed left-0 top-24 bottom-0 w-64 bg-[rgba(26,26,46,0.95)] backdrop-blur-[10px] border-r border-white/10 overflow-y-auto z-50">
      <div className="p-4">
        {/* <h2 className="text-xl font-bold text-white mb-4 px-2">學習筆記</h2> */}

        {/* 首頁按鈕 */}
        <button
          onClick={() => onSelectPage("home")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 mb-4 text-left rounded-lg transition-all duration-300 ${
            selectedPage === "home"
              ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_15px_rgba(102,126,234,0.4)]"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="font-semibold">首頁</span>
        </button>

        <div className="border-t border-white/10 mb-4"></div>

        {categories.map((category) => {
          const isExpanded = expandedCategories.includes(category.id);

          return (
            <div key={category.id} className="mb-2">
              {/* 主標題 */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left text-white/90 hover:bg-white/5 rounded-lg transition-all duration-300 group"
              >
                <span className="font-semibold text-base">{category.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 子頁面列表 */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-2 mt-1 space-y-1">
                  {category.subPages.map((subPage) => (
                    <button
                      key={subPage.id}
                      onClick={() => onSelectPage(subPage.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                        selectedPage === subPage.id
                          ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_15px_rgba(102,126,234,0.4)]"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {subPage.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
