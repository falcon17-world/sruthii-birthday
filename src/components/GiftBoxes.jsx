import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles, X } from "lucide-react";

const gifts = [
  {
    title: "a box of happiness",
    emoji: "🎁",
    color: "from-[#f9dce6] to-[#fce9e8]",
    message:
      "May your days be full of happiness, your heart full of peace, and your life full of beautiful surprises.",
  },
  {
    title: "the sleepy panda box",
    emoji: "🐼",
    color: "from-[#e8e1f7] to-[#f1eafa]",
    message:
      "Your birthday gift includes unlimited naps, unlimited snacks, and absolutely zero responsibilities for the next 24 hours.",
  },
  {
    title: "dancing queen edition",
    emoji: "💃",
    color: "from-[#fce5d8] to-[#f8dce9]",
    message:
      "May life always give you a reason to dance, even on the most ordinary days.",
  },
];

export default function GiftBoxes() {
  const [openedGift, setOpenedGift] = useState(null);

  return (
    <section className="bg-[#fff9f2] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b77c98]">
            specially wrapped for you
          </p>

          <h2 className="font-serif text-4xl text-[#49364d] sm:text-6xl">
            little boxes of love ♡
          </h2>

          <p className="mt-5 text-[#92778a]">
            Three little gifts. Three little surprises. Open them all!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {gifts.map((gift, index) => (
            <motion.button
              key={gift.title}
              type="button"
              onClick={() => setOpenedGift(index)}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-[2rem] border border-white bg-gradient-to-br ${gift.color} p-9 text-center shadow-lg shadow-[#98748a]/10`}
            >
              <motion.div
                animate={{ y: [0, -9, 0], rotate: [-3, 3, -3] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="mb-6 text-8xl"
              >
                {gift.emoji}
              </motion.div>

              <h3 className="font-serif text-2xl text-[#62485e]">
                {gift.title}
              </h3>

              <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#a17691]">
                <Gift size={16} />
                tap to open
              </p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {openedGift !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#30243c]/60 p-5 backdrop-blur-sm"
              onClick={() => setOpenedGift(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.75, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 180 }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-md rounded-[2rem] bg-[#fff9f2] px-7 py-12 text-center shadow-2xl sm:px-12"
              >
                <button
                  type="button"
                  onClick={() => setOpenedGift(null)}
                  aria-label="Close gift"
                  className="absolute right-5 top-5 rounded-full p-2 text-[#92778a] transition hover:bg-[#f5e6eb]"
                >
                  <X size={20} />
                </button>

                <motion.div
                  initial={{ scale: 0.5, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-7 text-7xl"
                >
                  {gifts[openedGift].emoji}
                </motion.div>

                <Sparkles className="mx-auto mb-4 text-[#d58ba5]" />

                <h3 className="font-serif text-3xl text-[#62485e]">
                  {gifts[openedGift].title}
                </h3>

                <p className="mt-6 font-handwritten text-2xl leading-relaxed text-[#92718b]">
                  {gifts[openedGift].message}
                </p>

                <div className="mt-8 flex justify-center gap-3 text-[#d58ba5]">
                  <Heart size={18} fill="currentColor" />
                  <Heart size={18} fill="currentColor" />
                  <Heart size={18} fill="currentColor" />
                </div>

                <button
                  type="button"
                  onClick={() => setOpenedGift(null)}
                  className="mt-8 rounded-full bg-[#b77c98] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#98627e]"
                >
                  close with love ♡
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}