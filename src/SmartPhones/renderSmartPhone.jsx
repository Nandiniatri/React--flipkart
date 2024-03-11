import { SmartPhones } from "./data"

export default function RenderSmartPhone(){
const smartPhonesList = SmartPhones.map((phones) =>{
    console.log(phones);
   return  (
    <div key={phones.id} className="smartDIv">
   <img className='smartPhoneImg' src={phones.url} />
   <p>{phones.title}</p>
   <h4>{phones.subTitle}</h4>
   </div>
   )
})
    return (
        <>
        <h3 className="smartPhnH3">Best Deals on Smartphones</h3>
        <div  className="renderSmartPhoneDiv">
        {smartPhonesList}
        </div>
        </> 
    )
}