import "./PictureFrame.css"


export default function PictureFrame({src, alt}) {
    return(
        <div className="picture">
            <img src={src} alt={alt}></img>
            <p className="caption">{alt}</p>
        </div>
    )
}