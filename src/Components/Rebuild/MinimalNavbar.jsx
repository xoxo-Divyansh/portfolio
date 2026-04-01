import { useEffect, useEffectEvent, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { usePortfolio } from "../../Context/PortfolioProvider";

const NAV_TOP_RESET = 40;
const NAV_HIDE_OFFSET = 88;
const NAV_DIRECTION_THRESHOLD = 14;
const NAV_DELTA_IGNORE = 2;

const MinimalNavbar = () => {
  const { personal } = usePortfolio();
  const [navState, setNavState] = useState({
    isHidden: false,
    isElevated: false,
  });
  const lastScrollY = useRef(0);
  const scrollAccumulator = useRef(0);
  const frameRef = useRef(0);

  const syncNavbarState = useEffectEvent(() => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY.current;
    lastScrollY.current = currentScrollY;

    if (currentScrollY <= NAV_TOP_RESET) {
      scrollAccumulator.current = 0;
      setNavState((current) =>
        current.isHidden || current.isElevated
          ? { isHidden: false, isElevated: false }
          : current
      );
      return;
    }

    const nextElevated = true;

    if (Math.abs(delta) <= NAV_DELTA_IGNORE) {
      setNavState((current) =>
        current.isElevated === nextElevated
          ? current
          : { ...current, isElevated: nextElevated }
      );
      return;
    }

    scrollAccumulator.current += delta;

    let nextHidden;
    if (Math.abs(scrollAccumulator.current) >= NAV_DIRECTION_THRESHOLD) {
      nextHidden =
        scrollAccumulator.current > 0 && currentScrollY > NAV_HIDE_OFFSET;
      scrollAccumulator.current = 0;
    }

    setNavState((current) => {
      const resolvedHidden = nextHidden ?? current.isHidden;

      if (
        current.isHidden === resolvedHidden &&
        current.isElevated === nextElevated
      ) {
        return current;
      }

      return {
        isHidden: resolvedHidden,
        isElevated: nextElevated,
      };
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        syncNavbarState();
        frameRef.current = 0;
      });
    };

    lastScrollY.current = window.scrollY;
    syncNavbarState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`rebuild-nav-wrap${
        navState.isHidden ? " rebuild-nav-wrap--hidden" : ""
      }${navState.isElevated ? " rebuild-nav-wrap--elevated" : ""}`}
    >
      <div className="rebuild-nav-wrap__inner">
        <div className="rebuild-container">
          <nav className="rebuild-nav" aria-label="Primary">
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
      </div>
    </header>
  );
};

export default MinimalNavbar;
