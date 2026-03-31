import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { usePortfolio } from "../../Context/PortfolioProvider";

const MinimalNavbar = () => {
  const { personal } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="rebuild-nav-wrap">
      <div className="rebuild-container">
        <nav
          className={`rebuild-nav${isScrolled ? " rebuild-nav--scrolled" : ""}`}
          aria-label="Primary"
        >
          <a href="#hero" className="rebuild-brand">
            <span className="rebuild-brand__mark" aria-hidden="true">
              D
            </span>
            <span className="rebuild-brand__text">
              <span className="rebuild-brand__name">{personal.name}</span>
              <span className="rebuild-brand__role">Full-Stack Developer</span>
            </span>
          </a>

          <div className="rebuild-nav__actions">
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rebuild-link rebuild-link--ghost"
            >
              Resume
              <FiArrowUpRight />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MinimalNavbar;
