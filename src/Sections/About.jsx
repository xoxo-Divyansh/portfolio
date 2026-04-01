import { usePortfolio } from "../Context/PortfolioProvider";

const About = () => {
  const { about, contact, personal, projects = [] } = usePortfolio();
  const oneTool = projects.find((project) => project.id === "onetool");
  const noorvii = projects.find((project) => project.id === "noorvii");
  const getProjectImage = (project, preferredIndex, fallbackIndex = 0) =>
    project?.images?.[preferredIndex] ?? project?.images?.[fallbackIndex] ?? null;

  const processVisuals = [
    {
      id: "ui-decisions",
      number: "01",
      label: "UI flow",
      title: "UI decisions",
      project: "OneTool",
      image: getProjectImage(oneTool, 1),
      focus: "24% 18%",
      summary: "Formatter controls cropped to show readable grouping and scan flow.",
    },
    {
      id: "performance",
      number: "02",
      label: "interaction layer",
      title: "Performance",
      project: "OneTool",
      image: getProjectImage(oneTool, 3),
      focus: "70% 16%",
      summary: "Response-heavy tooling surface used as the speed and feedback study.",
    },
    {
      id: "backend",
      number: "03",
      label: "component logic",
      title: "Backend",
      project: "Noorvii",
      image: getProjectImage(noorvii, 3),
      focus: "56% 18%",
      summary: "Dashboard crop hints at the system layer behind publishing and retrieval.",
    },
    {
      id: "product-thinking",
      number: "04",
      label: "final surface",
      title: "Product thinking",
      project: "Noorvii",
      image: getProjectImage(noorvii, 7),
      focus: "52% 14%",
      summary: "Reading panel crop keeps the outcome tied to clarity and product feel.",
    },
  ];

  const [uiDecision, performance, backend, product] = processVisuals;

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
                Real-world products, built with calm precision.
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
              <span>Process board</span>
              <span>Mapped to 01-04</span>
            </div>

            <div className="rebuild-about__stage-visual">
              <div className="rebuild-about__process-board">
                <article className="rebuild-about__process-card rebuild-about__process-card--main">
                  <div className="rebuild-about__process-media">
                    {uiDecision.image?.src ? (
                      <img
                        className="rebuild-about__process-image"
                        src={uiDecision.image.src}
                        alt={uiDecision.image.alt}
                        style={{ objectPosition: uiDecision.focus }}
                      />
                    ) : (
                      <div className="rebuild-about__process-empty">
                        <p>UI study unavailable</p>
                      </div>
                    )}
                  </div>

                  <div className="rebuild-about__process-overlay">
                    <span className="rebuild-about__process-chip">
                      {uiDecision.number} {uiDecision.label}
                    </span>
                    <p className="rebuild-about__process-caption">
                      Dense utility UI, cropped down to the decision zone.
                    </p>
                  </div>

                  <div className="rebuild-about__process-inset">
                    <div className="rebuild-about__process-media rebuild-about__process-media--inset">
                      {performance.image?.src ? (
                        <img
                          className="rebuild-about__process-image"
                          src={performance.image.src}
                          alt={performance.image.alt}
                          style={{ objectPosition: performance.focus }}
                        />
                      ) : (
                        <div className="rebuild-about__process-empty">
                          <p>Interaction study unavailable</p>
                        </div>
                      )}
                    </div>

                    <div className="rebuild-about__process-note">
                      <span className="rebuild-about__process-chip rebuild-about__process-chip--ghost">
                        {performance.number} {performance.label}
                      </span>
                    </div>
                  </div>
                </article>

                <div className="rebuild-about__process-stack">
                  {[backend, product].map((item) => (
                    <article
                      key={item.id}
                      className="rebuild-about__process-card rebuild-about__process-card--support"
                    >
                      <div className="rebuild-about__process-media rebuild-about__process-media--support">
                        {item.image?.src ? (
                          <img
                            className="rebuild-about__process-image"
                            src={item.image.src}
                            alt={item.image.alt}
                            style={{ objectPosition: item.focus }}
                          />
                        ) : (
                          <div className="rebuild-about__process-empty">
                            <p>{item.title} study unavailable</p>
                          </div>
                        )}
                      </div>

                      <div className="rebuild-about__process-note">
                        <span className="rebuild-about__process-chip rebuild-about__process-chip--ghost">
                          {item.number} {item.label}
                        </span>
                        <p className="rebuild-about__process-project">{item.project}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="rebuild-about__stage-foot">
              <div className="rebuild-about__process-map" aria-label="How I work visual map">
                {processVisuals.map((item) => (
                  <div key={item.id} className="rebuild-about__process-map-item">
                    <span className="rebuild-about__process-map-index">
                      {item.number}
                    </span>

                    <div className="rebuild-about__process-map-copy">
                      <p className="rebuild-about__process-map-title">{item.title}</p>
                      <p>{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="rebuild-about__availability-label">Availability</p>
              <p className="rebuild-about__availability-copy">
                {personal.availability}
              </p>
              <p className="rebuild-about__availability-location">{contact.location}</p>
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
