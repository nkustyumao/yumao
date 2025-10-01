const Footer = () => {
  return (
    <footer className="bg-[#0f0f1e] w-full">
      {/* <div>
          <h3 className="text-[1.3rem] text-white mb-6">聯絡方式</h3>
          <p className="text-white/70 mb-3">Email: your.email@example.com</p>
          <p className="text-white/70 mb-3">Phone: +886 123 456 789</p>
        </div> */}
      {/* <div>
          <h3 className="text-[1.3rem] text-white mb-6">社群媒體</h3>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#667eea]">
              GitHub
            </a>
            <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#667eea]">
              LinkedIn
            </a>
            <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#667eea]">
              Instagram
            </a>
          </div>
        </div> */}
      <p className="text-white/70  text-center bg-white/10 py-4">
        © {new Date().getFullYear()} YUMAO. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
