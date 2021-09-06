import "./style.css"

export default function Seat({number, isAvailable, toggleSelect, isSelected}) {
    return(
        <button
            className={isAvailable ? isSelected ? "seat selected": "seat" : "seat unavalable"}
            onClick={isAvailable? () => toggleSelect(Number(number)) : () => alert("Esse assento não está disponível")}
        >
            {(Number(number) !== 0)? number.padStart(2, '0') : ""}
        </button>
    )
}