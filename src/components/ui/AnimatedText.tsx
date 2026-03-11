"use client";

import { Typewriter } from "react-simple-typewriter";

interface AnimatedTextProps {
  words: string[];
  loop?: boolean | number;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export function AnimatedText({
  words,
  loop = true,
  cursor = true,
  cursorStyle = "|",
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
}: AnimatedTextProps) {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">
      <Typewriter
        words={words}
        loop={loop}
        cursor={cursor}
        cursorStyle={cursorStyle}
        typeSpeed={typeSpeed}
        deleteSpeed={deleteSpeed}
        delaySpeed={delaySpeed}
      />
    </span>
  );
}
