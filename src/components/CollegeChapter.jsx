import { motion } from "framer-motion";
import { BookOpen, Coffee, Heart, Star, Sparkles } from "lucide-react";

const memories = [
  {
    icon: "📚",
    title: "college gave me a plot twist.",
    text: "Sometimes the best part of college is the people you meet.",
    rotate: "-2deg",
    color: "bg-[#fff0e5]",
  },
  {
    icon: "☕",
    title: "little moments, future memories.",
    text: "Ordinary days can become the sweetest stories.",
    rotate: "2deg",
    color: "bg-[#f0eafa]",
  },
  {
    icon: "🎀",
    title: "the beginning of something sweet.",
    text: "A new chapter, new conversations, and new adventures.",
    rotate: "-1deg",
    color: "bg-[#fce8ef]",
  },
  {
    icon: "🌷",
    title: "more memories loading...",
    text: "The best pages of this college story are still unwritten.",
    rotate: "2deg",
    color: "bg-[#eaf1ed]",
  },
];

export default function CollegeChapter() {
  return (
    <section
      id="college"
      className="relative overflow-hidden bg-[#f8f0e9] px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b77c98]">
            chapter one
          </p>

          <h2 className="font-serif text-4xl text-[#49364d] sm:text-6xl">
            our little college chapter ♡
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[#92778a]">
            We haven't known each other forever. But there's still a whole
            scrapbook of memories waiting to happen.
          </p>
        </motion.div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.title}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -8 }}
              className={`${memory.color} relative min-h-[280px] rounded-md p-7 shadow-[0_12px_25px_rgba(100,70,70,0.09)]`}
            >
              <div className="absolute -top-3 left-1/2 h-7 w-16 -translate-x-1/2 rotate-[-5deg] bg-[#d9b5c7]/60" />

              <div className="mb-8 text-center text-5xl">
                {memory.icon}
              </div>

              <h3 className="text-center font-serif text-xl leading-relaxed text-[#62485e]">
                {memory.title}
              </h3>

              <p className="mt-5 text-center text-sm leading-7 text-[#92778a]">
                {memory.text}
              </p>

              <div className="absolute bottom-4 right-5 text-[#c18ba3]">
                ♡
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl border border-[#e8d5d8] bg-[#fffaf5] px-7 py-10 text-center shadow-sm sm:px-12"
        >
          <div className="mb-5 flex justify-center gap-4 text-[#c18ba3]">
            <BookOpen size={22} />
            <Coffee size={22} />
            <Star size={22} />
          </div>

          <h3 className="font-serif text-3xl italic text-[#79556e]">
            to be continued...
          </h3>

          <p className="mt-4 font-handwritten text-2xl text-[#a987a0]">
          </p>

          <div className="mt-6 flex justify-center gap-3 text-[#d58ba5]">
            <Heart size={16} />
            <Sparkles size={16} />
            <Heart size={16} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}