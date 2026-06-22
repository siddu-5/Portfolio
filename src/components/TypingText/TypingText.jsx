import { TypeAnimation } from "react-type-animation";
import typingTexts from "../../constants/typingTexts";

function TypingText() {
  const sequence = [];

  typingTexts.forEach((text) => {
    sequence.push(text);
    sequence.push(2000);
  });

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-2xl md:text-3xl font-semibold text-blue-400"
    />
  );
}

export default TypingText;