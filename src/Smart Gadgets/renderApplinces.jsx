import { SmartGadgetsData } from "./appilesData";

export default function RenderSmartGadgets(){
const smartGadgetsList = SmartGadgetsData.map((gadgets) =>{
    console.log(gadgets);
   return  (
    <div key={gadgets.id} className="smartDIv">
   <img className='smartPhoneImg' src={gadgets.url} />
   <p>{gadgets.title}</p>
   <h4>{gadgets.subTitle}</h4>
   </div>
   )
})
    return (
        <>
        <h3 className="smartPhnH3">Smart Gadgets</h3>
        <div  className="renderSmartPhoneDiv">
        {smartGadgetsList}
        </div>
        </> 
    )
}