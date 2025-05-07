import Search from "./Search";
import logo from "../assets/logo.svg";
import cart from "../assets/local_grocery_store.svg";
import message from "../assets/message.svg"
import notifications from "../assets/notifications.svg"

interface Props {
    searchTerm : string;
    setSearchTerm: any;
}

const Header = (p: Props) => {
    return(
        <>
            <nav className="fixed flex w-screen px-2 py-4 sm:px-32 lg:px-64 border-b-4 gap-16 bg-white">
                <img src={logo}/>
                <Search searchTerm={p.searchTerm} setSearchTerm={p.setSearchTerm}/>
                <div className="flex gap-2">
                    <img className="size-8 self-center" src={cart}/>
                    <img className="ms-1 size-8 self-center" src={message}/>
                    <img className="size-8 self-center" src= {notifications} />
                </div>
            </nav>
        </>
    );
}

export default Header