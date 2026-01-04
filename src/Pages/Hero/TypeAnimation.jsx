import { useEffect, useState } from "react";

const words = ["Wordpress Developer", "Basic SEO Expert"];

const TypeAnimation = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 60 : 120;

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
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span className="type-animation">
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypeAnimation;
