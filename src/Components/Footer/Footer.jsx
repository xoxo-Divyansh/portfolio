import { usePortfolio } from "../../Context/PortfolioProvider";

const Footer = () => {
  const { personal, contact } = usePortfolio();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">{personal.name}</h3>
          <p className="text-sm">{personal.title}</p>
          <span className="text-purple-400 font-sm text-sm block">
            🖤🟣 Echoes of xoxo — where code meets creativity.
          </span>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-white font-medium">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400">
                Contact
              </a>
            </li>
            <li>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h4 className="text-white font-medium">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-purple-400"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-4 text-center text-sm">
        © {year} {personal.name}. Built with React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
