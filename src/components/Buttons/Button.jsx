
import "./Button.css"

export default function Button({ text, onClick }) {
    return (
        <button className="nextpic" onClick={onClick}>
        {text}
        </button>
    )
}