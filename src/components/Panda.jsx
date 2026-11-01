import { motion } from "framer-motion";

export default function Panda({
  mood = "happy",
  size = "text-7xl",
  className = "",
  onClick,
}) {
  const pandas = {
    happy: "🐼",
    sleepy: "🐼",
    dancing: "🐼",
    love: "🐼",
    party: "🐼",
  };

  const decorations = {
    happy: "♡",
    sleepy: "💤",
    dancing: "♫",
    love: "♥",
    party: "✨",
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={onClick ? { scale: 1.12, rotate: 5 } : undefined}
      animate={
        mood === "dancing"
          ? { rotate: [-10, 10, -10], y: [0, -8, 0] }
          : mood === "sleepy"
            ? { y: [0, 4, 0] }
            : { y: [0, -5, 0] }
      }
      transition={{ duration: mood === "dancing" ? 0.45 : 2, repeat: Infinity }}
      className={`relative inline-flex items-center justify-center ${size} ${className}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(event) => {
        if (onClick && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onClick();
        }
      }}
      aria-label={onClick ? `${mood} panda surprise` : undefined}
    >
      <span>{pandas[mood] || pandas.happy}</span>

      <motion.span
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute -right-3 -top-2 text-xl text-[#d58ba5]"
      >
        {decorations[mood] || "♡"}
      </motion.span>
    </motion.div>
  );
}