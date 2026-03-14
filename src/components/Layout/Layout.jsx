import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PictureFrame from "../PictureFrame/PictureFrame"

import viggo from "./../../assets/viggo.jpg";

const pictures = [
    {src: viggo, alt: "Guarding the ducks"}
]


export default function Layout() {
    return(
        <div className = "page">
            <Header text="Best Boy" />
            <main>
                {pictures.map((pic, index) => (
                    <PictureFrame
                    key = {index}
                    src = {pic.src}
                    alt = {pic.alt}
                    />
                    ))}
            </main>
            <Footer />
        </div>
    )
}