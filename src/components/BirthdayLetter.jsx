import { motion } from "framer-motion";
import { Heart, Flower2 } from "lucide-react";

export default function BirthdayLetter() {
  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-[#fff9f2] px-5 py-24"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-sm border border-[#ead9d8] bg-[#fffdf8] px-7 py-12 shadow-[0_15px_50px_rgba(110,75,90,0.08)] sm:px-16 sm:py-16"
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-[#f5dce3]" />

          <div className="mb-8 flex items-center justify-between">
            <Flower2 className="text-[#dba2b7]" size={28} />
            <span className="font-handwritten text-xl text-[#c18ba3]">
              a little note for you
            </span>
            <Heart className="text-[#dba2b7]" size={25} />
          </div>

          <h2 className="mb-8 font-serif text-3xl italic text-[#79556e] sm:text-4xl">
            dear sruthiiii ♡
          </h2>

          <div className="space-y-5 font-handwritten text-xl leading-relaxed text-[#765e70] sm:text-2xl">
            <p>happy birthday to youuu!</p>

            <p>
              It's actually funny that we met only two months ago in college,
              and somehow I'm here making you an entire birthday website.
            </p>

            <p>
              I guess some people just make ordinary college days a little
              more interesting without even trying.
            </p>

            <p>
              I'm genuinely glad college brought us into each other's lives.
            </p>

            <p>
              I hope this year brings you endless happiness, beautiful memories,
              your favourite songs to dance to, and enough sleep to last
              approximately 100 lifetimes.
            </p>

            <p>
              Keep dancing like nobody's watching, sleeping like there's no
              tomorrow, and being your lovely self.
            </p>

            <p>
              Here's to more random conversations, laughter, college memories,
              and all the little moments waiting ahead.
            </p>

            <p>
              happy birthday, sleepyhead. you deserve all the little and big
              things that make you happy.
            </p>
          </div>

          <div className="mt-10 text-right">
            <p className="font-handwritten text-xl text-[#a987a0]">
              with love,
            </p>

            <p className="mt-1 font-handwritten text-3xl text-[#b77c98]">
              your college friend ♡
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-3 text-[#dba2b7]">
            <span>♡</span>
            <span>✧</span>
            <span>♡</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}