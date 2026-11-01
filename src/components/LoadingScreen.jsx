import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#fff1f4]">
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative mb-8 text-7xl"
      >
        🐼

        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -right-5 -top-3 text-2xl text-[#e99ab0]"
        >
          <Heart fill="currentColor" />
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-serif text-3xl italic text-[#6d5265]">
          a little something for Sruthii...
        </h1>

        <p className="mt-3 font-handwritten text-2xl text-[#d58ba5]">
          sprinkling some birthday magic
        </p>
      </motion.div>

      <div className="mt-8 flex items-center gap-3">
        {[0, 1, 2].map((item) => (
          <motion.span
            key={item}
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: item * 0.2,
            }}
          >
            <Sparkles size={17} className="text-[#d58ba5]" />
          </motion.span>
        ))}
      </div>
    </div>
  );
}