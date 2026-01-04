import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
const TypingText = ({
  text,
  speed = 20,
  className = "",
  start = false,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const completedRef = useRef(false);

  // Reset ONLY when start becomes true
  useEffect(() => {
    if (!start) return;

    setDisplayedText("");
    setHasTyped(false);
    completedRef.current = false;
  }, [start]);

  useEffect(() => {
    if (!start || hasTyped) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setHasTyped(true);

        if (!completedRef.current) {
          completedRef.current = true;
          onComplete?.();
        }
      }
    }, speed);
TypingText.propTypes = {
  text: PropTypes.string.isRequired,     // text is required
  speed: PropTypes.number,               // optional, defaults to 20
  className: PropTypes.string,           // optional, defaults to ""
  start: PropTypes.bool,                 // optional, defaults to false
  onComplete: PropTypes.func,            // optional callback
};

// Optional: default props (though you already set them in destructuring)
TypingText.defaultProps = {
  speed: 20,
  className: "",
  start: false,
  onComplete: undefined,
};
    return () => clearInterval(interval);
  }, [start, text, speed, hasTyped, onComplete]);

  return <p className={className}>{displayedText}</p>;
  
};

export default TypingText;
