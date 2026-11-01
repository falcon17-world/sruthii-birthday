import { motion } from "framer-motion";

const decorations = [
  { symbol: "♡", left: "5%", delay: 0, size: "text-2xl" },
  { symbol: "✧", left: "17%", delay: 1, size: "text-xl" },
  { symbol: "♡", left: "32%", delay: 2, size: "text-lg" },
  { symbol: "✦", left: "48%", delay: 0.5, size: "text-2xl" },
  { symbol: "♡", left: "65%", delay: 1.5, size: "text-xl" },
  { symbol: "✧", left: "80%", delay: 2.5, size: "text-2xl" },
  { symbol: "♡", left: "94%", delay: 1, size: "text-lg" },
];

export default function Decor() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {decorations.map((item, index) => (
        <motion.span
          key={index}
          className={`absolute top-0 ${item.size} select-none text-[#d58ba5]/40`}
          style={{ left: item.left }}
          animate={{
            y: ["-10vh", "110vh"],
            rotate: [0, 180, 360],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 18 + index * 2,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {item.symbol}
        </motion.span>
      ))}
    </div>
  );
}