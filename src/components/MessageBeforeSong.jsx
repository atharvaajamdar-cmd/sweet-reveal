import { motion } from "framer-motion"

export default function MessageBeforeSong({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 text-center gap-6"
    >
      <h1 className="text-3xl font-bold text-pink-400">
        Anchal ❤️
      </h1>

      <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
  Well, I know that you work very hard in the office.
  <br /><br />
  It’s been so many weeks, so many days —
  you feel tired, anxious, stressed, and pressured.
  <br /><br />
  And while handling all this office stress,
  you are also handling yourself.
  <br /><br />
  I’ve always noticed how you take care of yourself on your own,
  even during major sicknesses.
  <br /><br />
  I just want you to know —
  you are very strong.
  <br /><br />
  Now pause for a moment
  and take a look at what’s next.
  <br /><br />
  I bet you already know this song,
  because these exact lyrics
  are the ones I put on your birthday picture.
</p>


      <button
        onClick={onNext}
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg"
      >
        Play the song 🎶
      </button>
    </motion.div>
  )
}
