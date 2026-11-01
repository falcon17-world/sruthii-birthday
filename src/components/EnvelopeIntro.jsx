import { motion } from "framer-motion";
import { Heart, Sparkles, Mail } from "lucide-react";

export default function EnvelopeIntro({ onOpen }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff1f4] via-[#fff9f2] to-[#f1e9fa] px-5 py-16">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] text-3xl text-[#e7a8bd]">
        ✧
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[20%] text-2xl text-[#c4a8e8]">
        ♡
      </div>

      <div className="pointer-events-none absolute bottom-[15%] left-[18%] text-2xl text-[#e7a8bd]">
        ✦
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-lg text-center"
      >
        <motion.div
          animate={{ rotate: [-3, 3, -3], y: [0, -7, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-5 inline-block"
        >
          <span className="text-6xl">🐼</span>
          <div className="mt-1 font-handwritten text-xl text-[#b77c98]">
            a tiny messenger ♡
          </div>
        </motion.div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c18ba3]">
          a little secret awaits
        </p>

        <h1 className="font-serif text-3xl leading-relaxed text-[#49364d] sm:text-5xl">
          pssst... it's Sruthii's
          <br />
          day today <span className="text-[#dc91ad]">🎀</span>
        </h1>

        <p className="mt-5 font-handwritten text-2xl text-[#9d718c]">
          I made a little something for you...
        </p>

        {/* Envelope */}
        <motion.div
          whileHover={{ scale: 1.04, rotate: -1 }}
          className="relative mx-auto mt-10 flex h-48 w-64 items-center justify-center sm:h-56 sm:w-80"
        >
          <div className="absolute inset-0 rounded-xl border border-[#e8b7c7] bg-[#f8cbd8] shadow-[0_20px_45px_rgba(172,112,139,0.18)]" />

          <div className="absolute bottom-0 left-0 h-0 w-0 border-b-[95px] border-l-[128px] border-r-[128px] border-b-[#f1b4c8] border-l-transparent border-r-transparent sm:border-b-[112px] sm:border-l-[160px] sm:border-r-[160px]" />

          <div className="absolute left-0 top-0 h-0 w-0 border-l-[128px] border-r-[128px] border-t-[100px] border-l-transparent border-r-transparent border-t-[#f9dce5] sm:border-l-[160px] sm:border-r-[160px] sm:border-t-[115px]" />

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-[#fff5f7] shadow-lg"
          >
            <Heart size={28} fill="#e99ab0" color="#e99ab0" />
          </motion.div>

          <div className="absolute -right-3 -top-4 text-2xl">✨</div>
          <div className="absolute -left-3 bottom-5 text-xl">♡</div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="mx-auto mt-12 flex items-center gap-3 rounded-full bg-[#b77c98] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#b77c98]/20 transition-colors hover:bg-[#98627e]"
        >
          <Mail size={18} />
          open your little surprise
          <Sparkles size={17} />
        </motion.button>

        <p className="mt-5 text-xs tracking-wider text-[#a88b9e]">
          made with a little love and lots of panda energy ♡
        </p>
      </motion.div>
    </section>
  );
}