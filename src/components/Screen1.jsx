"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export default function Screen1({ onNext }) {
  const [roses, setRoses] = useState([])

  useEffect(() => {
    const generatedRoses = Array.from({ length: 18 }).map(() => ({
      x: Math.random() < 0.5
        ? Math.random() * 25
        : 75 + Math.random() * 25,
      duration: 16 + Math.random() * 8,
      delay: Math.random() * 6,
      rotate: Math.random() * 360,
      emoji:
        Math.random() < 0.4
          ? "🌹"
          : Math.random() < 0.7
          ? "🌸"
          : "💕",
    }))
    setRoses(generatedRoses)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden gap-8"
    >

      {/* Floating Roses Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {roses.map((rose, i) => (
          <motion.div
            key={i}
            initial={{
              y: "110%",
              x: `${rose.x}%`,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 1, 1, 0],
              rotate: rose.rotate,
            }}
            transition={{
              duration: rose.duration,
              delay: rose.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-3xl md:text-4xl"
          >
            {rose.emoji}
          </motion.div>
        ))}
      </div>

      {/* GIF */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center justify-center z-10"
      >
        <img loading="lazy" src="/gifs/1.gif" className="w-40" alt="waving" />
      </motion.div>

      {/* Center text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center space-y-4 flex flex-col justify-center z-10"
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight text-center">
          {"For Anchal".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              className="text-pink-400 inline-block"
            >
              {char}
            </motion.span>
          ))}

          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="text-red-500 inline-block ml-2"
          >
            ❤️
          </motion.span>
        </motion.h1>

        <p className="text-2xl md:text-3xl text-white font-semibold">
          I have a little secret for you...
        </p>

        <p className="text-xl md:text-2xl text-purple-200 font-light">
          And trust me... only YOU deserve this ✨
        </p>
      </motion.div>

      {/* Bottom button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="pb-8 z-10"
      >
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 flex items-center gap-2"
        >
          Open it <Heart size={20} className="mb-1 fill-white" />
        </button>
      </motion.div>
    </motion.div>
  )
}

