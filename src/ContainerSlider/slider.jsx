import { useState } from "react";
import Button from "../Header/button";
import { ContainerSliderData } from "./data";

export default function SliderGallery(){
    const [index ,  setIndex] = useState(0); 
    const replaySlider = index < ContainerSliderData.length - 1;
    console.log(replaySlider);

    let sliderGallery = ContainerSliderData[index];
    return ( 
        <>
            <img className="sliderImg" src={sliderGallery.url} />
        <div className="sliderBtns">
            <Button className={'SliderPrevBtn'} handleClick={() => {
                if(replaySlider){
                setIndex(index - 1)
                }else{
                setIndex(ContainerSliderData.length - 1)
                }
            }
            }>{'<'}</Button>

            <Button className={'SliderNextBtn'} handleClick={() => {
                if(replaySlider){
                    setIndex(index + 1)
                }else{
                    setIndex(0);
                }
            }
            }>{'>'}</Button>
        </div>
        </>
    )
}