const TONE_SEQUENCE = [
  "silver",
  "red",
  "white",
  "silver",
  "gold",
  "red",
  "silver",
  "violet",
  "red",
  "silver",
  "white",
  "red",
  "silver",
  "purple",
  "gold",
  "red",
];

const EDGE_COLUMNS = [4, 8, 13, 19, 25, 74, 80, 86, 92, 96];

function clamp(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function createParticles(count, zone) {
  return Array.from({ length: count }, (_, index) => {
    const toneOffset = zone === "top" ? 0 : 3;
    const tone = TONE_SEQUENCE[(index + toneOffset) % TONE_SEQUENCE.length];
    const column = EDGE_COLUMNS[index % EDGE_COLUMNS.length];
    const lateralJitter = ((index % 3) - 1) * 1.3 + (zone === "top" ? 0.5 : -0.5);
    const rowShift = Math.floor(index / EDGE_COLUMNS.length) * 1.45;

    const left = `${clamp(2, column + lateralJitter + rowShift, 98).toFixed(2)}%`;
    const top =
      zone === "top"
        ? `${(6 + ((index * 4.7) % 32)).toFixed(2)}%`
        : `${(61 + ((index * 4.9) % 28)).toFixed(2)}%`;

    const size =
      tone === "white" || tone === "silver"
        ? `${(2.1 + (index % 4) * 0.46).toFixed(2)}px`
        : tone === "gold"
          ? `${(2 + (index % 3) * 0.44).toFixed(2)}px`
          : `${(1.55 + (index % 4) * 0.38).toFixed(2)}px`;

    const opacity =
      tone === "white"
        ? (0.78 + (index % 3) * 0.05).toFixed(2)
        : tone === "silver" || tone === "gold"
          ? (0.68 + (index % 3) * 0.05).toFixed(2)
          : (0.46 + (index % 4) * 0.06).toFixed(2);

    const blur =
      tone === "white"
        ? "0.1px"
        : tone === "silver" || tone === "gold"
          ? "0.28px"
          : `${(0.34 + (index % 3) * 0.16).toFixed(2)}px`;

    const driftX = `${(index % 2 === 0 ? 1 : -1) * (7 + (index % 5) * 2.4)}px`;
    const driftY =
      zone === "top"
        ? `${10 + (index % 5) * 2.8}px`
        : `${-10 - (index % 5) * 2.8}px`;

    const duration = `${18 + (index % 6) * 2.6}s`;
    const twinkleDuration = `${4.8 + (index % 5) * 1.35}s`;
    const delay = `-${(index % 8) * 1.45}s`;

    return {
      id: `${zone}-${index}`,
      tone,
      style: {
        "--particle-left": left,
        "--particle-top": top,
        "--particle-size": size,
        "--particle-opacity": opacity,
        "--particle-blur": blur,
        "--particle-drift-x": driftX,
        "--particle-drift-y": driftY,
        "--particle-duration": duration,
        "--particle-twinkle-duration": twinkleDuration,
        "--particle-delay": delay,
      },
    };
  });
}

const TOP_PARTICLES = createParticles(20, "top");
const BOTTOM_PARTICLES = createParticles(20, "bottom");

const renderParticle = (particle) => (
  <span
    key={particle.id}
    className={`edge-particles__particle edge-particles__particle--${particle.tone}`}
    style={particle.style}
  />
);

const EdgeParticles = () => {
  return (
    <div className="edge-particles" aria-hidden="true">
      <div className="edge-particles__band edge-particles__band--top">
        {TOP_PARTICLES.map(renderParticle)}
      </div>
      <div className="edge-particles__band edge-particles__band--bottom">
        {BOTTOM_PARTICLES.map(renderParticle)}
      </div>
    </div>
  );
};

export default EdgeParticles;
