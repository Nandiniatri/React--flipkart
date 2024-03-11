import BecomeASeller from "./becameASeller";
import Button from "./button";
import Cart from "./cart";
import Input from "./input";
import Login from "./login";
import HeaderLogo from "./logo";
import Search from "./search";

export default function MainFileOfHeader(){
    return (
        <header>
            <div className="headerLogo"><HeaderLogo /></div>
            <div className="headerSearch"><Search /></div>
            <Login />
            <Cart />
            <BecomeASeller />
            </header>
    )
}