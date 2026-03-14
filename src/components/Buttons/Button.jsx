
import "./Button.css"

export default function Button({ text, onClick }) {
    return (
        <button class="nextpic" onClick={onClick}>
        {text}
        </button>
    )
}