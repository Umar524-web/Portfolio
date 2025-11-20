import { 
  ArrowUp, 
  Facebook, 
  Github, 
  Linkedin, 
  Instagram 
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-4 px-6 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Left - Copyright */}
        <p className="text-xs md:text-sm opacity-80 text-center">
          © {new Date().getFullYear()} <span className="font-semibold">Umar</span>. All rights reserved.
        </p>

        {/* Center - Social Icons (same line) */}
        <div className="flex gap-3 items-center">
          {[
            {
              href: "https://www.facebook.com/umar.faruque.942",
              icon: <Facebook size={18} />
            },
            {
              href: "https://www.instagram.com/umar_524",
              icon: <Instagram size={18} />
            },
            {
              href: "https://github.com/Umar524-web",
              icon: <Github size={18} />
            },
            {
              href: "https://www.linkedin.com/in/umar-faruque-59533a25b",
              icon: <Linkedin size={18} />
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className="p-2 bg-white/15 rounded-full backdrop-blur-sm hover:bg-white/25 
              transition-all hover:scale-105"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Right - Scroll to Top */}
        <a
          href="#hero"
          className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 
          backdrop-blur-md transition-transform hover:scale-110 shadow-md"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};