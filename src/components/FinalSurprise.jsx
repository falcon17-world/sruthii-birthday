import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Moon, Sparkles, Stars } from "lucide-react";
import Panda from "./Panda";

export default function FinalSurprise({ wishMade }) {
  const [hugged, setHugged] = useState(false);

  return (
    <section
      id="final-surprise"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#25213d] via-[#39304e] to-[#51405e] px-5 py-24 text-center"
    >
      {/* Stars */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 2 + (index % 3),
            repeat: Infinity,
            delay: index * 0.15,
          }}
          className="absolute text-[#f8e4b9]"
          style={{
            top: `${(index * 37) % 95}%`,
            left: `${(index * 53) % 95}%`,
          }}
        >
          ✦
        </motion.span>
      ))}

      <motion.div
        animate={{ rotate: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[12%] top-[12%] text-[#f7e5b8]"
      >
        <Moon size={55} fill="currentColor" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-7 flex items-center justify-center gap-4">
            <Sparkles className="text-[#e7b5ce]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7b5ce]">
              one last little thing
            </p>
            <Sparkles className="text-[#e7b5ce]" />
          </div>

          <div className="mb-8 flex items-center justify-center gap-5">
            <Panda mood="love" size="text-7xl sm:text-8xl" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-5xl text-[#f2a9c3]"
            >
              ♡
            </motion.div>
            <Panda mood="happy" size="text-7xl sm:text-8xl" />
          </div>

          <h2 className="font-serif text-5xl leading-tight text-[#fff3f5] sm:text-7xl">
            happy birthday,
            <br />
            <span className="italic text-[#f2b3cb]">sruthiiii</span> ♡
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#e5d8eb] sm:text-lg">
            here's to more college memories, random laughs, dancing moments,
            sleepy days, and stories we haven't written yet.
          </p>

          <p className="mt-6 font-handwritten text-3xl leading-relaxed text-[#f2b3cb]">
            stay happy, stay a little crazy,
            <br />
            and never stop being you.
          </p>

          {wishMade && (
            <p className="mt-5 font-handwritten text-2xl text-[#f8e4b9]">
              may your birthday wish come true ✨
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setHugged(true)}
            className="mx-auto mt-12 flex items-center gap-3 rounded-full bg-[#e9a9c2] px-8 py-4 text-sm font-semibold text-[#39283d] shadow-xl shadow-black/20 transition hover:bg-[#f5c5d5]"
          >
            <Heart size={19} fill="currentColor" />
            send sruthii a panda hug
            🐼
          </motion.button>

          <AnimatePresence>
            {hugged && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mt-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1, repeat: 2 }}
                  className="mb-3 text-5xl"
                >
                  🫂 💗
                </motion.div>

                <p className="font-handwritten text-2xl text-[#f8dce8]">
                  virtual panda hug delivered successfully ♡
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-16 border-t border-white/15 pt-8">
            <div className="mb-4 flex justify-center gap-3 text-[#e7b5ce]">
              <Stars size={18} />
              <Heart size={18} />
              <Stars size={18} />
            </div>

            <p className="font-handwritten text-3xl text-[#f2b3cb]">
              made with love, just for you.
            </p>

            <p className="mt-3 text-xs tracking-[0.2em] text-[#c5b4d2]">
              END OF YOUR LITTLE BIRTHDAY SURPRISE ♡
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}