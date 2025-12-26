"use client"

import GuessSong from "@/components/GuessSong"
import FinalLove from "@/components/FinalLove"
import LyricsScreen from "@/components/LyricsScreen"
import Music from "@/components/Music"
import { motion, AnimatePresence } from "framer-motion"
import Screen1 from "@/components/Screen1"
import Screen2 from "@/components/Screen2"
import MessageBeforeSong from "@/components/MessageBeforeSong"
import MessageAfterSong from "@/components/MessageAfterSong"

import { useState } from "react"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [musicStarted, setMusicStarted] = useState(false)

  return (
    <div className="min-h-screen bg-black bg-gradient-to-tr from-purple-950/80 via-black to-pink-950/70">

      <AnimatePresence mode="wait">
  {currentScreen === 1 && (
    <Screen1 onNext={() => setCurrentScreen(2)} />
  )}

  {currentScreen === 2 && (
    <Screen2 onNext={() => setCurrentScreen(3)} />
  )}

  {currentScreen === 3 && (
    <MessageBeforeSong onNext={() => setCurrentScreen(4)} />
  )}

  {currentScreen === 4 && (
    <GuessSong
      onNext={() => {
        setMusicStarted(true)
        setCurrentScreen(5)
      }}
    />
  )}

  {currentScreen === 5 && (
    <LyricsScreen onNext={() => setCurrentScreen(6)} />
  )}

  {currentScreen === 6 && (
    <MessageAfterSong onNext={() => setCurrentScreen(7)} />
  )}

  {currentScreen === 7 && <FinalLove />}
</AnimatePresence>



      {musicStarted && <Music shouldPlay={musicStarted} />}

      
  
    </div>
  )
}
