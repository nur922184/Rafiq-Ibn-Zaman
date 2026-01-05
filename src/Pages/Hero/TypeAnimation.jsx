import { useEffect, useState } from "react";

const words = ["Wordpress Developer", "SEO Specialist"];

// ৫টি কালার
const colors = [
  "#22c55e", // green
  "#3b82f6", // blue
  "#f97316", // orange
  "#ec4899", // pink
  "#a855f7", // purple
];

const TypeAnimation = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);

          // 👉 নতুন word এ গেলে color change
          setColorIndex((prev) => (prev + 1) % colors.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span
      className="type-animation"
      style={{ color: colors[colorIndex] }}
    >
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypeAnimation;
