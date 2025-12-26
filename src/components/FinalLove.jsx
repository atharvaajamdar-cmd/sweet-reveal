"use client"

import { motion } from "framer-motion"

export default function FinalLove() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-center gap-6 p-8 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900"
    >
      {/* Cute Cat GIF */}
      <motion.img
        src="/gifs/cat-love.gif"
        alt="cute cat"
        className="w-56 rounded-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-pink-200">
        And this… 💖
      </h1>

      <p className="text-lg md:text-xl text-white/90 max-w-md leading-relaxed">
        Is just the beginning of
        <br />
        countless smiles, moments,
        <br />
        waffles 🧇, cats 🐱
        <br />
        and love 🌹
      </p>

      <p className="text-pink-300 font-semibold text-xl">
        Forever yours ❤️
      </p>
    </motion.div>
  )
}
