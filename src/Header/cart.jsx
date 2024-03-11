import Button from "./button";
import Icon from "./icon";

export default function Cart(){
    return (
        <div className="cartDiv">
            <span className="spanss"><Icon className={'fa fa-shopping-cart'}/></span> <Button className={'cartBtn'}>{'Cart'}</Button>
        </div>
    )
}