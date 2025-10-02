import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return location.pathname === "/note" ? null : (
    <footer className="bg-[#0f0f1e] w-full">
      <p className="text-white/70  text-center bg-white/10 py-4">
        © {new Date().getFullYear()} YUMAO. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
