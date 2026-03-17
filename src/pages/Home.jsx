import { useState } from "react"

import "./Home.css"
import vaknar from "../assets/vaknar.png"
import tailwag from "../assets/tailwag.gif"
import dogGif from "../assets/viggodog.gif"
import cake from "../assets/cake.gif"
import GifFrame from "../components/GifFrame/GifFrame"

export default function Home() {
  const [pic, setPic] = useState("sleeping")

  function changePicOnClick() {
    if (pic !== "sleeping") return

    setPic("waking")

    setTimeout(() => {
      setPic("awake")
    }, 2000)
  }

  function getDogImage() {
    if (pic === "sleeping") return dogGif
    if (pic === "waking") return vaknar
    if (pic === "awake") return tailwag
  }

  return (
    <div className="gifs">
      <GifFrame
        className="sleepydog"
        onClick={changePicOnClick}
        src={getDogImage()}
      />
      <GifFrame className="cake" src={cake} />
    </div>
  )
}