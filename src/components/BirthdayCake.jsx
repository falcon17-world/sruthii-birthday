import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function BirthdayCake({ onWish }) {
  const [extinguished, setExtinguished] = useState([]);

  const candles = [1, 2, 3, 4, 5];

  const allOut = extinguished.length === candles.length;

  const blowCandle = (candle) => {
    if (extinguished.includes(candle)) return;

    const updated = [...extinguished, candle];
    setExtinguished(updated);

    if (updated.length === candles.length) {
      onWish?.();
    }
  };

  const resetCake = () => {
    setExtinguished([]);
  };

  return (
    <section
      id="birthday-cake"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff0f4] to-[#f8eafa] px-5 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b77c98]">
          one last birthday tradition
        </p>

        <h2 className="font-serif text-4xl text-[#49364d] sm:text-6xl">
          make a birthday wish
          <span className="text-[#d58ba5]"> ♡</span>
        </h2>

        <p className="mt-5 text-[#92778a]">
          Five little candles, five little wishes. Click each flame to blow it
          out!
        </p>

        {/* Birthday cake */}
        <div className="relative mx-auto mt-20 flex max-w-sm flex-col items-center">
          <div className="mb-[-2px] flex items-end justify-center gap-5">
            {candles.map((candle) => {
              const isOut = extinguished.includes(candle);

              return (
                <button
                  key={candle}
                  type="button"
                  onClick={() => blowCandle(candle)}
                  disabled={isOut}
                  aria-label={`Blow out candle ${candle}`}
                  className="relative flex h-24 w-5 flex-col items-center justify-end"
                >
                  <AnimatePresence>
                    {!isOut && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          scale: [0.9, 1.1, 0.9],
                          y: [0, -4, 0],
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="mb-1 text-2xl"
                      >
                        🔥
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <span
                    className={`h-14 w-3 rounded-t-md rounded-b-sm shadow-sm ${
                      candle % 2 === 0
                        ? "bg-[#d8b5ec]"
                        : "bg-[#f0a9bd]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative z-10 h-16 w-64 rounded-t-[45%] border-b-4 border-[#d88da8] bg-[#f6b8cb] shadow-lg sm:w-80">
            <div className="absolute -bottom-2 left-0 right-0 flex justify-around">
              {["🍓", "♡", "🍓", "♡", "🍓"].map((item, index) => (
                <span key={index} className="text-lg text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-20 h-14 w-72 rounded-b-2xl border-b-4 border-[#d6a0b4] bg-[#fff0f3] shadow-lg sm:w-96">
            <div className="absolute inset-x-0 top-0 h-3 rounded-full bg-[#f9c8d6]" />
            <div className="absolute inset-x-0 top-5 flex justify-around text-lg">
              <span>♡</span>
              <span>✧</span>
              <span>♡</span>
              <span>✧</span>
              <span>♡</span>
            </div>
          </div>

          <div className="mt-3 h-5 w-[110%] rounded-full bg-[#e7c7d3] shadow-md" />
        </div>

        <p className="mt-12 font-handwritten text-2xl text-[#a17691]">
          {allOut
            ? "all candles blown out! ✨"
            : `${extinguished.length} of 5 candles blown out`}
        </p>

        <AnimatePresence>
          {allOut && (
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mx-auto mt-9 max-w-xl rounded-[2rem] border border-[#edcbdc] bg-white/80 px-7 py-9 shadow-xl"
            >
              <Sparkles className="mx-auto mb-5 text-[#d58ba5]" size={30} />

              <h3 className="font-serif text-3xl italic text-[#79556e]">
                make a wish, sleepyhead.
              </h3>

              <p className="mt-4 font-handwritten text-2xl leading-relaxed text-[#a17691]">
                the universe owes you something beautiful ♡
              </p>

              <div className="mt-6 flex justify-center gap-3 text-[#d58ba5]">
                <Heart fill="currentColor" />
                <Heart fill="currentColor" />
                <Heart fill="currentColor" />
              </div>

              <button
                type="button"
                onClick={resetCake}
                className="mt-7 rounded-full border border-[#d9afc3] px-6 py-3 text-sm font-semibold text-[#a36e8b] transition hover:bg-[#fff1f4]"
              >
                light the candles again ↻
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}