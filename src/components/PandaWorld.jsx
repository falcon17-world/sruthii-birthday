import { motion } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";
import Panda from "./Panda";

const pandas = [
  {
    mood: "sleepy",
    title: "professional sleeper detected.",
    description: "Wake her up? Absolutely not. Let the queen rest.",
    color: "bg-[#f8e8f0]",
    emoji: "💤",
  },
  {
    mood: "dancing",
    title: "born to dance, forced to attend college.",
    description: "One song is all it takes to start the dance party.",
    color: "bg-[#eee5fa]",
    emoji: "🎧",
  },
  {
    mood: "happy",
    title: "100% cutie, 0% willingness to wake up.",
    description: "The cutest reason for being late to class.",
    color: "bg-[#fff0df]",
    emoji: "☁️",
  },
  {
    mood: "love",
    title: "sleep is the love language.",
    description: "Sending unlimited hugs and cozy panda energy.",
    color: "bg-[#fce7e7]",
    emoji: "💗",
  },
  {
    mood: "party",
    title: "panda energy, sruthii edition.",
    description: "A little chaos, a lot of cuteness, and endless smiles.",
    color: "bg-[#e9edf9]",
    emoji: "✨",
  },
];

export default function PandaWorld() {
  return (
    <section
      id="panda-world"
      className="relative overflow-hidden bg-[#fff5f6] px-5 py-24"
    >
      <div className="pointer-events-none absolute right-10 top-16 text-[#e6b3c7]">
        <Sparkles size={35} />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b77c98]">
            a tiny world of cuteness
          </p>

          <h2 className="font-serif text-4xl text-[#49364d] sm:text-6xl">
            welcome to panda world
            <span className="text-[#d58ba5]"> ♡</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#92778a]">
            A special little panda collection inspired by the birthday girl's
            favourite things.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pandas.map((panda, index) => (
            <motion.div
              key={panda.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${panda.color} relative flex min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/80 p-7 text-center shadow-[0_10px_30px_rgba(120,80,100,0.06)]`}
            >
              <span className="absolute right-5 top-5 text-xl">
                {panda.emoji}
              </span>

              <Panda
                mood={panda.mood}
                size="text-8xl"
                className="mb-5"
              />

              <h3 className="font-serif text-xl text-[#62485e]">
                {panda.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#92778a]">
                {panda.description}
              </p>

              <div className="mt-5 flex gap-2 text-[#c28ba5]">
                <Heart size={14} />
                <Star size={14} />
                <Heart size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center font-handwritten text-3xl text-[#b77c98]"
        >
          five pandas, one very special birthday girl ♡
        </motion.p>
      </div>
    </section>
  );
}