import Icon from "./icon";

export default function Button({children , className , handleClick}){
    return (
        <div>
            <div><button onClick={handleClick} className={className}>{children}</button></div>
        </div>
    )
}