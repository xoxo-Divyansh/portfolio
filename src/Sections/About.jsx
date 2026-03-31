import { usePortfolio } from "../Context/PortfolioProvider";

const About = () => {
  const { about, contact, personal } = usePortfolio();

  return (
    <section id="about" data-section="about" className="rebuild-about">
      <div className="rebuild-container">
        <div className="rebuild-about__intro">
          <div className="rebuild-about__kicker">
            <span className="rebuild-about__kicker-line" aria-hidden="true" />
            About
          </div>

          <div className="rebuild-about__header">
            <div className="rebuild-about__header-main">
              <p className="rebuild-about__eyebrow">Developer profile / product approach</p>
              <h2 className="rebuild-about__title">
                Real-world products,
                <br />
                built with calm precision.
              </h2>
            </div>

            <div className="rebuild-about__lead">
              <p>{about.intro}</p>
              <p>{about.philosophy}</p>
            </div>
          </div>
        </div>

        <div className="rebuild-about__grid">
          <article
            className="rebuild-about__manifesto"
            aria-labelledby="about-approach-title"
          >
            <p className="rebuild-about__section-label">How I work</p>
            <h3 id="about-approach-title" className="rebuild-about__manifesto-copy">
              Usability first. Interface decisions with intent. Architecture
              that stays modular as the product grows.
            </h3>

            <div className="rebuild-about__principles">
              {about.highlights.map((item, index) => (
                <div key={item} className="rebuild-about__principle">
                  <span className="rebuild-about__principle-index">
                    0{index + 1}
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rebuild-about__stage-panel" aria-label="Working model">
            <div className="rebuild-about__stage-head">
              <span>Working model</span>
              <span>{contact.location}</span>
            </div>

            <div className="rebuild-about__stage-visual" aria-hidden="true">
              <div className="rebuild-about__stage-glow" />
              <div className="rebuild-about__stage-beam" />
              <div className="rebuild-about__stage-track rebuild-about__stage-track--left" />
              <div className="rebuild-about__stage-track rebuild-about__stage-track--right" />
              <div className="rebuild-about__stage-frame" />
              <div className="rebuild-about__stage-figure" />
              <div className="rebuild-about__stage-floor" />
            </div>

            <div className="rebuild-about__stage-foot">
              <p className="rebuild-about__availability-label">Availability</p>
              <p className="rebuild-about__availability-copy">
                {personal.availability}
              </p>
            </div>
          </aside>
        </div>

        <div className="rebuild-about__meta">
          <div className="rebuild-about__stats" aria-label="About metrics">
            {about.stats.map((item) => (
              <div key={item.label} className="rebuild-about__stat">
                <p className="rebuild-about__stat-value">{item.value}</p>
                <p className="rebuild-about__stat-label">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="rebuild-about__roles-wrap">
            <p className="rebuild-about__section-label">Build strengths</p>
            <div className="rebuild-about__roles">
              {about.roles.map((role) => (
                <article key={role.title} className="rebuild-about__role">
                  <h3 className="rebuild-about__role-title">{role.title}</h3>
                  <p className="rebuild-about__role-text">{role.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
