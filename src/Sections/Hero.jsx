import { FiArrowRight, FiDownload } from "react-icons/fi";
import { usePortfolio } from "../Context/PortfolioProvider";

const Hero = () => {
  const { contact, personal } = usePortfolio();
  const heroPortraitSrc = `${import.meta.env.BASE_URL}hero/portrait-cinematic.png`;

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
              <span className="rebuild-display__lead-top">Full-stack</span>
              <span className="rebuild-display__lead-lockup">
                <span className="rebuild-display__highlight rebuild-display__highlight--green">
                  MERN
                </span>
                <span className="rebuild-display__lead-role">Developer</span>
              </span>
            </span>
            <span className="rebuild-display__line rebuild-display__line--focus">
              building systems with
            </span>
            <span className="rebuild-display__line rebuild-display__line--trail">
              interface{" "}
              <span className="rebuild-display__highlight rebuild-display__highlight--orange">
                focus
              </span>
              .
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
          <div className="rebuild-stage__backdrop" />
          <div className="rebuild-stage__backlight" />
          <div className="rebuild-stage__portrait-wrap">
            <img
              className="rebuild-stage__portrait"
              src={heroPortraitSrc}
              alt=""
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="rebuild-stage__blend" />
          <div className="rebuild-stage__ground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
