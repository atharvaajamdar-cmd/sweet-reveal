"use client"

import { motion } from "framer-motion"

export default function GuessSong({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center text-center gap-6 p-8"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-pink-400">
        Heheheh 😌
      </h1>

      <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
        I know you already guessed this song —
        <br /><br />
        the same one I used on your birthday.
        <br /><br />
        Are you ready to hear it again?
        <br />
        Just as a symbol of remembering it
        and hopefully putting a smile on your face 💖
      </p>

      <button
        onClick={onNext}
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-12 py-4 rounded-full text-lg transition-all hover:scale-105"
      >
        Here we go 🎶
      </button>
    </motion.div>
  )
}
