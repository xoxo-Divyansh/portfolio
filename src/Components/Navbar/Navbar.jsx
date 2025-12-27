import { useState } from "react";
import { usePortfolio } from "../../Context/PortfolioProvider";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const { personal } = usePortfolio();
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="text-xl font-bold text-purple-400 bg-transparent border-none p-0 cursor-pointer"
        >
          {personal?.name || "XOXO"}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="cursor-pointer hover:text-green-400 hover:font-semibold transition bg-transparent border-none p-0 text-inherit"
              >
                {link.name}
              </button>
            </li>
          ))}
          {personal?.resume && (
            <li>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                Resume
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl bg-transparent border-none p-0"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖️" : "🔗"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-white/10">
          <ul className="flex flex-col gap-4 p-6 text-gray-300">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="cursor-pointer hover:text-purple-400 transition bg-transparent border-none p-0 text-inherit"
                >
                  {link.name}
                </button>
              </li>
            ))}
            {personal?.resume && (
              <li>
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400"
                >
                  Resume
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
