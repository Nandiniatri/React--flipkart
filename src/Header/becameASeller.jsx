import Button from "./button";
import Icon from "./icon";

export default function BecomeASeller(){
    return (
        <div className="becomeASellerDiv">
            <span className="spanss"><Icon className={'fa fa-industry'}/></span><Button className={'seller'}>{'Become a Seller'}</Button>
        </div>
    )
}