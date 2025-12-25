import { useEffect, useState } from "react";

const TypingText = ({
  text,
  speed = 20,
  className = "",
  start = false,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  // ✅ FIX 1: reset when typing STARTS, not when text changes
  useEffect(() => {
    if (!start) return;
    setDisplayedText("");
    setHasTyped(false);
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
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed, hasTyped, onComplete]);

  return <p className={className}>{displayedText}</p>;
};

export default TypingText;
