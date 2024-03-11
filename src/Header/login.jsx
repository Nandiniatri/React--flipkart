import Button from "./button";
import Icon from "./icon";

export default function Login(){
    return (
        <div className="loginDiv">
            <span className="spanss"><Icon className={'fa fa-user'}/></span> <Button className={'login'}>{'Login'}</Button>
        </div>
    )
}