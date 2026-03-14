import viggo from "./../../assets/viggo.jpg";
import "./PictureFrame.css"


export default function PictureFrame() {
    return(
        <div className="picture">
            <img src={viggo} alt="picture of best boy Viggo"></img>
        </div>
    )
}