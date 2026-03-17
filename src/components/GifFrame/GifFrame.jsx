import "./GifFrame.css"


export default function GifFrame({ src, className, onClick }) {
  return <img className={className} src={src} onClick={onClick} />
}