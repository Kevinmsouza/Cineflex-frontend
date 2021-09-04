import "./style.css"

export default function Seat({number, isAvailable, toggleSelect, isSelected}) {
    return(
        <button
            className={isSelected ? "seat selected": "seat"}
            disabled={!isAvailable}
            onClick={() => toggleSelect(Number(number))}
        >
            {(Number(number) !== 0)? number.padStart(2, '0') : ""}
        </button>
    )
}