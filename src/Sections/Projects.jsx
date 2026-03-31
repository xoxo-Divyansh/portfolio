import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { usePortfolio } from "../Context/PortfolioProvider";

const renderProjectVisual = (visualType) => {
  switch (visualType) {
    case "feed":
      return (
        <div className="rebuild-proof rebuild-proof--feed">
          <div className="rebuild-proof__label">Swipe sequence</div>
          <div className="rebuild-proof-feed__phone">
            <span className="rebuild-proof-feed__notch" />
            <span className="rebuild-proof-feed__media" />
            <span className="rebuild-proof-feed__line rebuild-proof-feed__line--wide" />
            <span className="rebuild-proof-feed__line" />
            <span className="rebuild-proof-feed__line rebuild-proof-feed__line--short" />
          </div>
          <div className="rebuild-proof-feed__panel">
            <span className="rebuild-proof-feed__chip" />
            <span className="rebuild-proof-feed__chip rebuild-proof-feed__chip--soft" />
            <div className="rebuild-proof-feed__grid">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      );
    case "pulse":
      return (
        <div className="rebuild-proof rebuild-proof--pulse">
          <div className="rebuild-proof__label">Mood mapping</div>
          <div className="rebuild-proof-pulse__halo" />
          <div className="rebuild-proof-pulse__ring rebuild-proof-pulse__ring--outer" />
          <div className="rebuild-proof-pulse__ring rebuild-proof-pulse__ring--inner" />
          <div className="rebuild-proof-pulse__core" />
          <div className="rebuild-proof-pulse__list">
            <span className="rebuild-proof-pulse__bar rebuild-proof-pulse__bar--active" />
            <span className="rebuild-proof-pulse__bar" />
            <span className="rebuild-proof-pulse__bar rebuild-proof-pulse__bar--short" />
            <span className="rebuild-proof-pulse__bar" />
          </div>
        </div>
      );
    case "masonry":
    default:
      return (
        <div className="rebuild-proof rebuild-proof--masonry">
          <div className="rebuild-proof__label">Content field</div>
          <div className="rebuild-proof-masonry__grid">
            <span className="rebuild-proof-masonry__tile rebuild-proof-masonry__tile--tall" />
            <span className="rebuild-proof-masonry__tile rebuild-proof-masonry__tile--medium" />
            <span className="rebuild-proof-masonry__tile rebuild-proof-masonry__tile--short" />
            <span className="rebuild-proof-masonry__tile rebuild-proof-masonry__tile--short" />
            <span className="rebuild-proof-masonry__tile rebuild-proof-masonry__tile--tall" />
            <span className="rebuild-proof-masonry__tile rebuild-proof-masonry__tile--medium" />
          </div>
        </div>
      );
  }
};

const Projects = () => {
  const { projects = [] } = usePortfolio();

  return (
    <section id="projects" data-section="projects" className="rebuild-projects">
      <div className="rebuild-container">
        <div className="rebuild-projects__intro">
          <div className="rebuild-projects__kicker">
            <span className="rebuild-projects__kicker-line" aria-hidden="true" />
            Selected Work
          </div>

          <div className="rebuild-projects__header">
            <div className="rebuild-projects__header-main">
              <p className="rebuild-projects__eyebrow">Resume projects / product proof</p>
              <h2 className="rebuild-projects__title">
                Real projects, edited into proof
                <br />
                of how I build and think.
              </h2>
            </div>

            <div className="rebuild-projects__lead">
              <p>
                These projects are rewritten from the resume into shorter
                product stories, so the work reads with more clarity than a
                feature dump or bullet stack.
              </p>
              <p>
                Each case study stays focused on the product goal, the problem
                being solved, and the technical decision that gave the build its
                shape.
              </p>
            </div>
          </div>
        </div>

        <div className="rebuild-projects__list">
          {projects.map((project, index) => (
            <article key={project.id} className="rebuild-project">
              <div className="rebuild-project__rail">
                <p className="rebuild-project__index">0{index + 1}</p>

                {project.meta.map((item) => (
                  <div key={`${project.id}-${item.label}`} className="rebuild-project__rail-group">
                    <p className="rebuild-project__rail-label">{item.label}</p>
                    <p className="rebuild-project__rail-value">{item.value}</p>
                  </div>
                ))}

                <div className="rebuild-project__rail-group">
                  <p className="rebuild-project__rail-label">Technical focus</p>
                  <p className="rebuild-project__stack">
                    {project.tech.join(" / ")}
                  </p>
                </div>
              </div>

              <div className="rebuild-project__body">
                <div className="rebuild-project__head">
                  <p className="rebuild-project__section-label">
                    Selected case study
                  </p>
                  <h3 className="rebuild-project__title">{project.title}</h3>
                  <p className="rebuild-project__description">
                    {project.description}
                  </p>
                </div>

                <div className="rebuild-project__proof">
                  <div className="rebuild-project__proof-copy">
                    <p className="rebuild-project__section-label">Proof focus</p>
                    <h4 className="rebuild-project__proof-title">
                      {project.proofTitle}
                    </h4>
                    <p className="rebuild-project__proof-summary">
                      {project.proofSummary}
                    </p>

                    <div className="rebuild-project__proof-points">
                      {project.highlights.map((item) => (
                        <div key={item} className="rebuild-project__proof-point">
                          <span
                            className="rebuild-project__proof-marker"
                            aria-hidden="true"
                          />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rebuild-project__visual">
                    {renderProjectVisual(project.visualType)}
                  </div>
                </div>

                <div className="rebuild-project__footer">
                  <div className="rebuild-project__note">
                    <p className="rebuild-project__section-label">Build note</p>
                    <p className="rebuild-project__note-copy">{project.outcome}</p>
                  </div>

                  <div className="rebuild-project__actions">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rebuild-link rebuild-link--secondary"
                      >
                        Source
                        <FiGithub />
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rebuild-link rebuild-link--primary"
                      >
                        Live Demo
                        <FiArrowUpRight />
                      </a>
                    ) : (
                      <span className="rebuild-project__status">{project.status}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rebuild-projects__closing">
          <p className="rebuild-projects__closing-line">
            Selected work, rewritten for clarity.
          </p>
          <p className="rebuild-projects__closing-copy">
            The portfolio now reads in a steadier sequence: identity, approach,
            and then proof. That makes the work easier to scan without reducing
            it to generic portfolio filler.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
