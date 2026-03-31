import { FiArrowRight, FiDownload } from "react-icons/fi";
import { usePortfolio } from "../Context/PortfolioProvider";

const Hero = () => {
  const { contact, personal } = usePortfolio();

  return (
    <section id="hero" data-section="hero" className="rebuild-hero">
      <div className="rebuild-container rebuild-hero__layout">
        <div className="rebuild-hero__content">
          <div className="rebuild-hero__eyebrow">
            <span className="rebuild-hero__eyebrow-line" aria-hidden="true" />
            <span>
              {personal.name} / {personal.title}
            </span>
          </div>

          <h1 className="rebuild-display">
            <span className="rebuild-display__line rebuild-display__line--lead">
              Full-stack
            </span>
            <span className="rebuild-display__line rebuild-display__line--focus">
              JavaScript <span className="rebuild-display__accent">systems</span>
            </span>
            <span className="rebuild-display__line rebuild-display__line--trail">
              with interface focus.
            </span>
          </h1>

          <p className="rebuild-copy">{personal.heroSummary}</p>

          <div className="rebuild-actions">
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rebuild-link rebuild-link--primary"
            >
              Read Resume
              <FiDownload />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rebuild-link rebuild-link--secondary"
            >
              Discuss a Build
              <FiArrowRight />
            </a>
          </div>

          <div className="rebuild-hero__meta">
            <span className="rebuild-hero__meta-item">{personal.availability}</span>
            <span className="rebuild-hero__meta-divider" aria-hidden="true" />
            <span className="rebuild-hero__meta-item">{contact.location}</span>
          </div>
        </div>

        <div className="rebuild-stage" aria-hidden="true">
          <div className="rebuild-stage__frame" />
          <div className="rebuild-stage__glass" />
          <div className="rebuild-stage__grid" />
          <div className="rebuild-stage__caption">Visual Identity Stage</div>
          <div className="rebuild-stage__note">Portrait-led composition</div>
          <div className="rebuild-stage__backlight" />
          <div className="rebuild-stage__beam" />
          <div className="rebuild-stage__halo" />
          <div className="rebuild-stage__presence" />
          <div className="rebuild-stage__trace rebuild-stage__trace--left" />
          <div className="rebuild-stage__trace rebuild-stage__trace--right" />
          <div className="rebuild-stage__orbital" />
          <div className="rebuild-stage__ground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
