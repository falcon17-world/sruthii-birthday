import { useState } from "react";
import { motion } from "framer-motion";
import { Music2, Moon, Sparkles, Heart } from "lucide-react";
import Panda from "./Panda";

export default function DanceSleepSection() {
  const [dancing, setDancing] = useState(false);
  const [sleeping, setSleeping] = useState(false);

  return (
    <section className="bg-[#fff9f2] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b77c98]">
            two moods, one sruthii
          </p>

          <h2 className="font-serif text-4xl text-[#49364d] sm:text-6xl">
            the ultimate duality ♡
          </h2>

          <p className="mt-5 text-[#92778a]">
            A little bit of music, a whole lot of sleep.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {/* Dancing Queen */}
          <motion.div
            whileHover={{ y: -6 }}
            className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f0dafa] via-[#e9d9f7] to-[#f9e3f0] p-8 text-center shadow-lg shadow-purple-100 sm:p-10 ${
              dancing ? "ring-2 ring-[#b78bd4]" : ""
            }`}
          >
            <div className="absolute right-6 top-6 text-[#a77ac7]">
              <Sparkles size={27} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#89669f]">
              side one
            </p>

            <h3 className="mt-4 font-serif text-3xl text-[#62486e] sm:text-4xl">
              dancing queen
            </h3>

            <div className="my-9 flex min-h-36 items-center justify-center">
              <motion.div
                animate={
                  dancing
                    ? {
                        rotate: [-15, 15, -15],
                        y: [0, -18, 0],
                        scale: [1, 1.1, 1],
                      }
                    : { y: [0, -7, 0] }
                }
                transition={{
                  duration: dancing ? 0.5 : 2,
                  repeat: Infinity,
                }}
                className="text-8xl"
              >
                🐼
              </motion.div>

              <motion.span
                animate={dancing ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 2, repeat: dancing ? Infinity : 0 }}
                className="ml-5 text-5xl"
              >
                🎧
              </motion.span>
            </div>

            <p className="mx-auto max-w-xs leading-7 text-[#80668c]">
              Give her a beat and watch her forget the rest of the world.
            </p>

            <button
              onClick={() => setDancing(!dancing)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#986db0] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#805a98]"
            >
              <Music2 size={17} />
              {dancing ? "stop dance mode" : "activate dance mode"}
            </button>

            {dancing && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-5 font-handwritten text-2xl text-[#805a98]"
              >
                okayyy, let the party begin! ♫
              </motion.p>
            )}
          </motion.div>

          {/* Sleeping Legend */}
          <motion.div
            whileHover={{ y: -6 }}
            className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e4e0fa] via-[#dedcf5] to-[#eee9fa] p-8 text-center shadow-lg shadow-indigo-100 sm:p-10 ${
              sleeping ? "ring-2 ring-[#9187c5]" : ""
            }`}
          >
            <div className="absolute right-6 top-6 text-[#8e86be]">
              <Moon size={27} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77709e]">
              side two
            </p>

            <h3 className="mt-4 font-serif text-3xl text-[#49456f] sm:text-4xl">
              sleeping legend
            </h3>

            <div className="my-9 flex min-h-36 items-center justify-center">
              <motion.div
                animate={
                  sleeping
                    ? { rotate: [-4, 4, -4], y: [0, 5, 0] }
                    : { y: [0, -5, 0] }
                }
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-8xl"
              >
                🐼
              </motion.div>

              <motion.span
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-5 text-5xl"
              >
                🌙
              </motion.span>
            </div>

            <p className="mx-auto max-w-xs leading-7 text-[#77709e]">
              If sleeping were an Olympic sport, Sruthii would bring home the
              gold.
            </p>

            <button
              onClick={() => setSleeping(!sleeping)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#77709e] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#625b89]"
            >
              <Moon size={17} />
              {sleeping ? "wake up (just kidding)" : "do not disturb"}
            </button>

            {sleeping && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-5 font-handwritten text-xl text-[#625b89]"
              >
                shhh... sruthii is recharging. try again after 3 business days.
              </motion.p>
            )}
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-[#b77c98]">
          <Heart size={17} />
          <span className="font-handwritten text-2xl">
            both moods are equally iconic
          </span>
          <Heart size={17} />
        </div>
      </div>
    </section>
  );
}