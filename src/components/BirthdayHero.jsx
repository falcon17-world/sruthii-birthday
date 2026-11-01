import { motion } from "framer-motion";
import { Sparkles, Heart, PartyPopper } from "lucide-react";
import Panda from "./Panda";

export default function BirthdayHero({ onWish }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#fff1f4] via-[#fff9f2] to-[#f8edf8] px-5 py-24 text-center"
    >
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[8%] top-[16%] text-4xl"
      >
        🎈
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute right-[9%] top-[20%] text-4xl"
      >
        🎈
      </motion.div>

      <div className="absolute left-[15%] top-[45%] text-[#dca5bd]">
        <Sparkles size={24} />
      </div>

      <div className="absolute bottom-[20%] right-[15%] text-[#c4a8e8]">
        <Heart size={25} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#b77c98]">
          a day as lovely as you
        </p>

        <h1 className="font-serif text-5xl leading-tight text-[#49364d] sm:text-7xl md:text-8xl">
          happy birthday,
          <br />
          <span className="italic text-[#d58ba5]">sruthiiii</span>
          <span className="text-[#d58ba5]"> ♡</span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#8e7187] sm:text-lg">
          two months of knowing you, and a little corner of the internet made
          just for you.
        </p>

        <div className="my-10 flex items-center justify-center gap-5 sm:gap-10">
          <Panda mood="party" size="text-6xl sm:text-8xl" />

          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl sm:text-8xl"
          >
            🎂
          </motion.div>

          <Panda mood="dancing" size="text-6xl sm:text-8xl" />
        </div>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          onClick={onWish}
          className="inline-flex items-center gap-3 rounded-full bg-[#b77c98] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#b77c98]/20 transition-colors hover:bg-[#98627e]"
        >
          <Sparkles size={18} />
          make a little wish
          <PartyPopper size={18} />
        </motion.button>

        <p className="mt-5 font-handwritten text-xl text-[#b77c98]">
          today is all about you ♡
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-7 text-xs tracking-[0.2em] text-[#b69aab]"
      >
        SCROLL TO EXPLORE ↓
      </motion.div>
    </section>
  );
}