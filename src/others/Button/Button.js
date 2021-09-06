import "./style.css"

export default function Button ({onclick, text}) {
    return(
        <button className="classic" onClick={onclick} >{text}</button>
    )
}