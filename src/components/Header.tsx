interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgba(26,26,46,0.95)] backdrop-blur-[10px] border-b border-white/10 z-[1000]">
      <div className="max-w-[1200px] mx-auto py-6 px-8 flex justify-between items-center">
        <h1 className="text-[1.8rem] font-bold bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent m-0">
          YUMAO
        </h1>
        <nav className="flex gap-8">
          <button
            className={`py-2 px-4 border-0 text-base font-medium cursor-pointer transition-all duration-300 rounded-lg ${
              activeSection === "home"
                ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_15px_rgba(102,126,234,0.4)]"
                : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => scrollToSection("home")}
          >
            首頁
          </button>
          <button
            className={`py-2 px-4 border-0 text-base font-medium cursor-pointer transition-all duration-300 rounded-lg ${
              activeSection === "about"
                ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_15px_rgba(102,126,234,0.4)]"
                : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => scrollToSection("about")}
          >
            關於我
          </button>
          <button
            className={`py-2 px-4 border-0 text-base font-medium cursor-pointer transition-all duration-300 rounded-lg ${
              activeSection === "education"
                ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_15px_rgba(102,126,234,0.4)]"
                : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => scrollToSection("education")}
          >
            經歷
          </button>
          <button
            className={`py-2 px-4 border-0 text-base font-medium cursor-pointer transition-all duration-300 rounded-lg ${
              activeSection === "portfolio"
                ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_15px_rgba(102,126,234,0.4)]"
                : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => scrollToSection("portfolio")}
          >
            作品集
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
