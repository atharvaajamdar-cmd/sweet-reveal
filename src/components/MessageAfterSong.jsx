import { motion } from "framer-motion"

export default function MessageAfterSong({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 text-center gap-6"
    >
      <h1 className="text-3xl font-bold text-pink-400">
        One last thing 💖
      </h1>

      <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
  Do you remember your birthday,
  when I used this song without knowing
  how special it would become in my life?
  <br /><br />
  Since that 28th of July,
  this song — “Haseen” —
  has been racing in my heart.
  <br /><br />
  It reminds me of you every single time.
  I love listening to it again and again,
  just to feel closer to you.
  <br /><br />
  I still remember you innocently asking me,
  “Uss song ka meaning toh pata hai kya tujhe?”
  <br /><br />
  I wanted to say,
  “Nahi… tu bata.”
  But instead, I explained the lyrics to you.
  <br /><br />
  This was all for you, Anchal.
  <br />
  <span className="text-pink-400 font-semibold">
    I LOVE YOU ❤️
  </span>
</p>


      <button
        onClick={onNext}
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg"
      >
        Continue 💗
      </button>
    </motion.div>
  )
}
