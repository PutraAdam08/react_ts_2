
import Search from "./Search";

interface Props {
    searchTerm : string;
    setSearchTerm: any;
}

const Header = (p: Props) => {
    return(
        <>
            <nav className="fixed flex w-screen px-2 py-4 sm:px-32 lg:px-64 border-b-4 gap-16 bg-white">
                <img src="src\assets\logo.svg"/>
                <Search searchTerm={p.searchTerm} setSearchTerm={p.setSearchTerm}/>
                <div className="flex gap-2">
                    <img className="size-8 self-center" src="src\assets\local_grocery_store.svg"/>
                    <img className="ms-1 size-8 self-center" src="src\assets\message.svg"/>
                    <img className="size-8 self-center" src="src\assets\notifications.svg"/>
                </div>
            </nav>
        </>
    );
}

export default Header