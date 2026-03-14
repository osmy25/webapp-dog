import { useState } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PictureFrame from "../PictureFrame/PictureFrame"
import Button from "../Buttons/Button"

import viggo from "./../../assets/viggo.jpg";
import viggo2 from "./../../assets/viggo2.jpg";
import viggo3 from "./../../assets/viggo3.jpg";

const pictures = [
    { src: viggo, alt: "Guarding the ducks" },
    { src: viggo2, alt: "Relaxing" },
    { src: viggo3, alt: "Being silly" }
]



export default function Layout() {


    const [pic, setPic] = useState(0)

    function nextPic() {
        setPic(function(preValue) {
            return (preValue + 1) % pictures.length
        })

    }


    return(
        <div className = "page">
            <Header text="Best Boy" />
            <main>
                <PictureFrame
                src={pictures[pic].src}
                alt={pictures[pic].alt}
                />
            <Button text=">" onClick={nextPic} />
            <Footer />
            </main>
        </div>
    )
}