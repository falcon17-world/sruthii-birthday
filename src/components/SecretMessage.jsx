import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, Sparkles, X } from "lucide-react";

export default function SecretMessage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f8eff8] px-5 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <motion.div
          animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mx-auto mb-7 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[#fff9f2] text-[#d6a4bb] shadow-lg shadow-[#a87b9c]/10"
          onClick={() => setRevealed(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setRevealed(true);
            }
          }}
          aria-label="Reveal secret birthday message"
        >
          <Star size={42} fill="currentColor" />
        </motion.div>

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b77c98]">
          a tiny secret
        </p>

        <h2 className="mt-4 font-serif text-4xl text-[#49364d] sm:text-5xl">
          found a little star?
        </h2>

        <p className="mt-5 text-[#92778a]">
          It might have something special to tell you...
        </p>

        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-8 rounded-full border border-[#d9afc3] px-7 py-3 text-sm font-semibold text-[#a36e8b] transition hover:bg-white"
        >
          reveal the secret ♡
        </button>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative mt-12 rounded-[2rem] border border-[#ead5e3] bg-[#fffaf8] px-7 py-10 shadow-xl shadow-[#98748a]/10 sm:px-12"
            >
              <button
                type="button"
                onClick={() => setRevealed(false)}
                aria-label="Close secret message"
                className="absolute right-5 top-5 rounded-full p-2 text-[#92778a] hover:bg-[#f5e6eb]"
              >
                <X size={19} />
              </button>

              <Sparkles className="mx-auto mb-5 text-[#d58ba5]" size={27} />

              <h3 className="font-serif text-3xl italic text-[#79556e]">
                pssst, sruthii...
              </h3>

              <div className="mt-7 space-y-4 font-handwritten text-xl leading-relaxed text-[#92718b] sm:text-2xl">
                <p>
                  we might have met only recently, but I'm genuinely happy
                  that we did.
                </p>

                <p>
                  you deserve good people, good memories, lots of laughter,
                  and every little thing that makes you happy.
                </p>

                <p>
                  okay, enough emotions. go get some sleep now. ♡
                </p>
              </div>

              <div className="mt-8 flex justify-center gap-3 text-[#d58ba5]">
                <Heart fill="currentColor" size={19} />
                <Heart fill="currentColor" size={19} />
                <Heart fill="currentColor" size={19} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}