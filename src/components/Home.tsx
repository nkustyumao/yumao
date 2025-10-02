interface HomeProps {
  scrollToSection: (sectionId: string) => void;
}

const Home = ({ scrollToSection }: HomeProps) => {
  return (
    <section id="home" className="min-h-screen py-20 px-8 flex items-center justify-center text-center">
      <div className="max-w-[800px] mx-auto animate-[fadeIn_1s_ease-out]">
        <h1 className="text-[4.5rem] font-bold mb-6 leading-[1.2]">
          你好，我是 <span className="bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">YUMAO</span>
        </h1>
        <p className="text-[2rem] text-white/80 mb-4">歡迎來到我的個人網站</p>
        <p className="text-xl text-white/60 mb-12">
          一位愛打羽球的前端工程師
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <button 
            className="py-4 px-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-0 rounded-[10px] text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(102,126,234,0.4)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(102,126,234,0.6)]"
            onClick={() => scrollToSection("project")}
          >
            查看作品
          </button>
          <button 
            className="py-4 px-8 bg-transparent text-white border-2 border-[#667eea] rounded-[10px] text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 hover:bg-[rgba(102,126,234,0.1)] hover:-translate-y-[2px]"
            onClick={() => scrollToSection("about")}
          >
            了解更多
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
