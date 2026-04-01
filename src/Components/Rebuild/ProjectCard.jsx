import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const transitionEase = [0.22, 1, 0.36, 1];

const ProjectCard = ({ project, index, reverse, shouldReduceMotion }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef(null);
  const mediaItems = project.images ?? [];
  const activeMedia = mediaItems[activeIndex] ?? mediaItems[0];
  const hasMultipleImages = mediaItems.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [project.id]);

  const stepMedia = (direction) => {
    if (!hasMultipleImages) {
      return;
    }

    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0) {
        return mediaItems.length - 1;
      }

      if (nextIndex >= mediaItems.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (!hasMultipleImages || touchStartXRef.current === null) {
      touchStartXRef.current = null;
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX;

    if (typeof touchEndX !== "number") {
      touchStartXRef.current = null;
      return;
    }

    const deltaX = touchEndX - touchStartXRef.current;

    if (Math.abs(deltaX) >= 36) {
      stepMedia(deltaX > 0 ? -1 : 1);
    }

    touchStartXRef.current = null;
  };

  const copyVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : reverse ? 32 : -32,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.68,
        ease: transitionEase,
      },
    },
  };

  const visualVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : reverse ? -36 : 36,
      y: shouldReduceMotion ? 0 : 24,
      scale: shouldReduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.78,
        ease: transitionEase,
      },
    },
  };

  return (
    <article
      className={`showcase-project${reverse ? " showcase-project--reverse" : ""}`}
    >
      <motion.div
        className="showcase-project__copy"
        variants={copyVariants}
      >
        <div className="showcase-project__meta">
          <p className="showcase-project__index">0{index + 1}</p>
          <p className="showcase-project__eyebrow">{project.eyebrow}</p>
        </div>

        <div className="showcase-project__body">
          <h3 className="showcase-project__title">{project.title}</h3>
          <p className="showcase-project__description">{project.description}</p>

          <div className="showcase-project__narrative">
            <div className="showcase-project__story">
              <p className="showcase-project__label">Problem</p>
              <p className="showcase-project__story-copy">{project.problem}</p>
            </div>

            <div className="showcase-project__story">
              <p className="showcase-project__label">What makes it strong</p>
              <p className="showcase-project__story-copy">{project.strength}</p>
            </div>
          </div>

          <ul className="showcase-project__features">
            {project.features.map((feature) => (
              <li key={feature} className="showcase-project__feature">
                <span className="showcase-project__feature-marker" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="showcase-project__footer">
            <div className="showcase-project__stack" aria-label={`${project.title} tech stack`}>
              {project.tech.map((item) => (
                <span key={item} className="showcase-project__badge">
                  {item}
                </span>
              ))}
            </div>

            <div className="showcase-project__actions">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rebuild-link rebuild-link--secondary showcase-project__link"
                >
                  Show Git Repo
                  <FiGithub />
                </a>
              ) : null}

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rebuild-link rebuild-link--primary showcase-project__link"
              >
                View Live Project
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="showcase-project__visual"
        variants={visualVariants}
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                y: -4,
                transition: { duration: 0.18, ease: "easeOut" },
              }
        }
      >
        <div className="showcase-project__frame">
          <div className="showcase-project__chrome" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="showcase-project__surface">
            <div className="showcase-project__surface-head">
              <span className="showcase-project__surface-label">
                {hasMultipleImages ? "Project gallery" : "Selected screen"}
              </span>
              <span className="showcase-project__surface-title">{project.title}</span>
            </div>

            {activeMedia ? (
              <div
                className="showcase-project__image-wrap"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="showcase-project__slider"
                  style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
                >
                  {mediaItems.map((mediaItem) => (
                    <div key={mediaItem.src} className="showcase-project__slide">
                      {mediaItem.type === "video" ? (
                        <video
                          className="showcase-project__media showcase-project__media--video"
                          src={mediaItem.src}
                          poster={mediaItem.poster}
                          muted
                          loop
                          playsInline
                          autoPlay
                          preload="metadata"
                        />
                      ) : (
                        <img
                          className="showcase-project__media showcase-project__media--image"
                          src={mediaItem.src}
                          alt={mediaItem.alt}
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {hasMultipleImages ? (
                  <>
                    <div className="showcase-project__controls">
                      <button
                        type="button"
                        className="showcase-project__control"
                        onClick={() => stepMedia(-1)}
                        aria-label={`Show previous ${project.title} visual`}
                      >
                        <FiChevronLeft />
                      </button>

                      <button
                        type="button"
                        className="showcase-project__control"
                        onClick={() => stepMedia(1)}
                        aria-label={`Show next ${project.title} visual`}
                      >
                        <FiChevronRight />
                      </button>
                    </div>

                    <div className="showcase-project__counter" aria-live="polite">
                      <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                      <span aria-hidden="true">/</span>
                      <span>{String(mediaItems.length).padStart(2, "0")}</span>
                    </div>
                  </>
                ) : null}
              </div>
            ) : (
              <div className="showcase-project__empty">
                <p>No project visuals added yet.</p>
              </div>
            )}
          </div>

          <div className="showcase-project__caption">
            <p>{activeMedia?.caption ?? "Live project visuals will appear here."}</p>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    problem: PropTypes.string.isRequired,
    strength: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveUrl: PropTypes.string.isRequired,
    repoUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["image", "video"]).isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        poster: PropTypes.string,
      }),
    ).isRequired,
    cta: PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
    preview: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
  reverse: PropTypes.bool.isRequired,
  shouldReduceMotion: PropTypes.bool.isRequired,
};

export default ProjectCard;
