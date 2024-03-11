export default function Input({type , placeholder , className}){
    return (
        <div>
            <input className={className} type={type} placeholder={placeholder} />
        </div>
    )
}