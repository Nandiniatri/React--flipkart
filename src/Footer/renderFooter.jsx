import Icon from "../Header/icon";

export default function RenderFooter(){
    return (
        <div className="footerDiv">
            <div className="footerIcon"><Icon className={'fa fa-industry'}/><p className="footerP">Become a Seller</p></div>
            <div className="footerIcon"><Icon className={'fa fa-star-o'}/><p className="footerP">Advertise</p></div>
            <div className="footerIcon"><Icon className={'fa fa-gift'}/><p className="footerP">Gift Cards</p></div>
            <div className="footerIcon"><Icon className={'fa fa-question'}/><p className="footerP">Help Center</p></div>
            <p>© 2007--2024 Flipkart.com</p>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" />
        </div>
    )
}