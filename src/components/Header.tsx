import Search from "./Search";
import logo from "../assets/logo.svg";
import cart from "../assets/local_grocery_store.svg";
import message from "../assets/message.svg"
import notifications from "../assets/notifications.svg"
import logOut from "../assets/log-out.svg"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface Props {
    searchTerm : string;
    setSearchTerm: any;
}

const Header = (p: Props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const navigate = useNavigate()

    const logOutHandler = () => {
        removeCookie('user', { path: '/' })
        navigate('/')
    }

    return(
        <>
            <nav className="fixed flex w-screen px-2 py-4 sm:px-32 lg:px-64 border-b-4 gap-16 bg-white">
                <img src={logo}/>
                <Search searchTerm={p.searchTerm} setSearchTerm={p.setSearchTerm}/>
                <div className="flex gap-2">
                    <img className="size-8 self-center" src={cart}/>
                    <img className="ms-1 size-8 self-center" src={message}/>
                    <img className="size-8 self-center" src= {notifications} />
                    {cookies.user ? <img className="size-8 self-center" src= {logOut} onClick={logOutHandler}/> : <></>}
                </div>
            </nav>
        </>
    );
}

export default Header