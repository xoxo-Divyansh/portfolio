import PropTypes from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePortfolio } from "../Context/PortfolioProvider";

const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const previewCardVariants = {
  initial: { opacity: 0, y: 18, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -18, scale: 0.98 },
};

const iconPaths = {
  layout: (
    <>
      <rect x="8" y="10" width="34" height="22" rx="7" />
      <path d="M19 10v22" />
      <path d="M8 20h34" />
    </>
  ),
  system: (
    <>
      <rect x="10" y="12" width="12" height="12" rx="4" />
      <rect x="28" y="12" width="12" height="12" rx="4" />
      <rect x="19" y="28" width="12" height="12" rx="4" />
      <path d="M22 18h6" />
      <path d="M25 24v4" />
    </>
  ),
  speed: (
    <>
      <path d="M12 32a14 14 0 0 1 28 0" />
      <path d="M26 18l6 10" />
      <circle cx="26" cy="32" r="2.2" fill="currentColor" stroke="none" />
    </>
  ),
  focus: (
    <>
      <path d="M11 17V11h6" />
      <path d="M35 11h6v6" />
      <path d="M41 35v6h-6" />
      <path d="M17 41h-6v-6" />
      <circle cx="26" cy="26" r="6.5" />
    </>
  ),
};

const IdentityCard = ({ title, description, icon, shouldReduceMotion }) => (
  <motion.article
    className="identity-stage__card"
    variants={itemVariants}
    whileHover={
      shouldReduceMotion
        ? undefined
        : {
            scale: 1.02,
            y: -4,
            transition: { duration: 0.18, ease: "easeOut" },
          }
    }
  >
    <div className="identity-stage__card-icon" aria-hidden="true">
      <svg viewBox="0 0 52 52" fill="none">
        {iconPaths[icon]}
      </svg>
    </div>
    <div className="identity-stage__card-copy">
      <h3 className="identity-stage__card-title">{title}</h3>
      <p className="identity-stage__card-text">{description}</p>
    </div>
  </motion.article>
);

IdentityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(["layout", "system", "speed", "focus"]).isRequired,
  shouldReduceMotion: PropTypes.bool.isRequired,
};

const TechBadge = ({ label, shouldReduceMotion }) => (
  <motion.span
    className="identity-stage__badge"
    variants={itemVariants}
    whileHover={
      shouldReduceMotion
        ? undefined
        : {
            y: -2,
            scale: 1.02,
            transition: { duration: 0.18, ease: "easeOut" },
          }
    }
  >
    {label}
  </motion.span>
);

TechBadge.propTypes = {
  label: PropTypes.string.isRequired,
  shouldReduceMotion: PropTypes.bool.isRequired,
};

const PreviewReel = ({ item, isActive, shouldReduceMotion }) => (
  <motion.div
    key={item.name}
    className="identity-stage__preview-card"
    variants={previewCardVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="identity-stage__preview-card-bar" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
    <div className="identity-stage__preview-card-content">
      <p className="identity-stage__preview-label">{item.label}</p>
      <h4 className="identity-stage__preview-title">{item.title}</h4>
      <p className="identity-stage__preview-description">{item.description}</p>
    </div>
    <div className="identity-stage__preview-card-footer">
      <span className="identity-stage__preview-accent">{item.accent}</span>
      <div
        className={`identity-stage__preview-progress${
          isActive ? " identity-stage__preview-progress--active" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  </motion.div>
);

PreviewReel.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  shouldReduceMotion: PropTypes.bool.isRequired,
};

const VisualIdentity = () => {
  const { contact, identity, personal } = usePortfolio();
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const videoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);
  const [activePreview, setActivePreview] = useState(0);

  const previewItems = useMemo(
    () => identity?.preview?.items ?? [],
    [identity]
  );

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!identity?.preview?.mediaSrc || !videoRef.current) {
      return undefined;
    }

    const video = videoRef.current;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }

    return undefined;
  }, [identity, isInView]);

  useEffect(() => {
    if (!previewItems.length || identity?.preview?.mediaSrc || !isInView) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActivePreview((current) => (current + 1) % previewItems.length);
    }, shouldReduceMotion ? 3200 : 2600);

    return () => window.clearInterval(interval);
  }, [identity, isInView, previewItems, shouldReduceMotion]);

  return (
    <motion.section
      ref={sectionRef}
      id="identity"
      data-section="identity"
      className="identity-stage"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="rebuild-container">
        <div className="identity-stage__shell">
          <div className="identity-stage__glow identity-stage__glow--top" />
          <div className="identity-stage__glow identity-stage__glow--bottom" />

          <motion.div className="identity-stage__intro" variants={itemVariants}>
            <p className="identity-stage__eyebrow">Developer identity / build philosophy</p>
            <h2 className="identity-stage__title">{identity.heading}</h2>
            <div className="identity-stage__summary">
              {identity.summary.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </motion.div>

          <div className="identity-stage__layout">
            <motion.div
              className="identity-stage__grid"
              variants={itemVariants}
            >
              {identity.cards.map((card) => (
                <IdentityCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  shouldReduceMotion={Boolean(shouldReduceMotion)}
                />
              ))}
            </motion.div>

            <motion.div
              ref={previewRef}
              className="identity-stage__spotlight"
              variants={itemVariants}
              animate={
                shouldReduceMotion
                  ? undefined
                  : isInView
                    ? { scale: 1, y: 0 }
                    : { scale: 0.985, y: 12 }
              }
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="identity-stage__spotlight-head">
                <span>Work preview</span>
                <span>Scroll-aware playback</span>
              </div>

              <div className="identity-stage__player">
                <div className="identity-stage__player-chrome" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="identity-stage__player-screen">
                  {identity.preview.mediaSrc ? (
                    <video
                      ref={videoRef}
                      className="identity-stage__media"
                      src={identity.preview.mediaSrc}
                      poster={identity.preview.mediaPoster || undefined}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className="identity-stage__reel" aria-live="polite">
                      <div className="identity-stage__reel-frame" />
                      <div className="identity-stage__reel-grid" />
                      <PreviewReel
                        item={previewItems[activePreview]}
                        isActive={isInView}
                        shouldReduceMotion={Boolean(shouldReduceMotion)}
                      />
                      <div className="identity-stage__reel-stack identity-stage__reel-stack--back" />
                      <div className="identity-stage__reel-stack identity-stage__reel-stack--front" />
                    </div>
                  )}
                </div>
              </div>

              <div className="identity-stage__spotlight-foot">
                <p className="identity-stage__spotlight-copy">
                  OneTool, Noorvii, and this portfolio are framed here as proof
                  of how I think about usable systems, narrative interfaces, and
                  product clarity.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div className="identity-stage__stack" variants={itemVariants}>
            {identity.tech.map((tech) => (
              <TechBadge
                key={tech}
                label={tech}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
              />
            ))}
          </motion.div>

          <motion.div className="identity-stage__footer" variants={itemVariants}>
            <p className="identity-stage__availability">{personal.availability}</p>
            <p className="identity-stage__location">{contact.location}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default VisualIdentity;
