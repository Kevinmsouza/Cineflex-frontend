import "./style.css"

export default function Form({title }) {
    return(
        <div className="form">
            {`${title[0].toUpperCase() + title.slice(1)} do comprador:`}
            <input placeholder={`Digite seu ${title}...`}></input>
        </div>
    )
}