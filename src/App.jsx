import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainFileOfHeader from './Header/mainHeaderFile'
import MainFileoFSubHeader from './SubHeader/mainFileOfSubHeader'
import MainFileOfContainerSlider from './ContainerSlider/mainFile'
import MailFileOfDiscount from './AxisDiscount/mainFile'
import MainFileOfSmartPhone from './SmartPhones/mainFile'
import MainFileBanner from './Banner/mainFile'
import MainFileOfSmartGadgets from './Smart Gadgets/mainFile'
import MainFileOfFooter from './Footer/mainFile'

function App() {

  return (
    <>
        <div><MainFileOfHeader /></div>
    <div><MainFileoFSubHeader /></div>
    <div><MainFileOfContainerSlider /></div>
    <div><MailFileOfDiscount /></div>
    <div><MainFileOfSmartPhone /></div>
    <div><MainFileBanner /></div>
    <div><MainFileOfSmartGadgets /></div>
    <div><MainFileOfFooter /></div>
    </>
  )
}

export default App
