function About() {
  const skills = ["React.js", "Next.js", "Tailwind CSS","Bootstrap 5", "Node.js", "Express.js", "MySQL", "TypeScript"];

  return (
    <section id="about" className="min-h-screen py-20 px-8 flex items-center justify-center">
      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          關於我
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xl leading-[1.8] text-white/80 mb-8 text-justify">
            我是 Jie，一個愛打羽球的前端工程師。專注於網頁前端開發，樂於探索並學習各種前端新技術，因為對前端開發有很大的興趣，所以大多都是以自我學習為主，也不排斥學習後端的相關技術，期望透過不斷學習與精進，持續在快速變化的資訊科技領域提升自身價值，為團隊與專案帶來更多貢獻。
            </p>
            <div>
              <h3 className="text-2xl mb-6 text-white">技能專長</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-6 py-[0.7rem] bg-gradient-to-r from-[rgba(102,126,234,0.2)] to-[rgba(118,75,162,0.2)] border border-[#667eea] rounded-lg text-white text-base transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(102,126,234,0.3)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[350px] h-[350px] rounded-[20px] overflow-hidden border-[3px] border-[#667eea] shadow-[0_10px_40px_rgba(102,126,234,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(102,126,234,0.5)]">
              <img src="/fish.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
