import "./style.css"

export default function Form({title, value, attValue }) {
    console.log(value)
    return(
        <div className="form">
            {`${title[0].toUpperCase() + title.slice(1)} do comprador:`}
            <input
                placeholder={`Digite seu ${title}...`}
                value={value}
                onChange={attValue}
                autoComplete="false"
            ></input>
        </div>
    )
}