import { useState } from "react"
import PictureFrame from "../components/PictureFrame/PictureFrame"
import "./Gallery.css"
import Button from "../components/Buttons/Button"

import viggo from "../assets/viggo.jpg"
import viggo2 from "../assets/viggo2.jpg"
import viggo3 from "../assets/viggo3.jpg"

const pictures = [
  { src: viggo, alt: "Guarding the ducks" },
  { src: viggo2, alt: "Relaxing" },
  { src: viggo3, alt: "Being silly" }
]

export default function Gallery() {
  const [pic, setPic] = useState(0)

  function nextPic() {
    setPic((prevValue) => (prevValue + 1) % pictures.length)
  }

  return (
    <div>
      <PictureFrame
        src={pictures[pic].src}
        alt={pictures[pic].alt}
      />
      <Button text=">" onClick={nextPic} />
    </div>
  )
}