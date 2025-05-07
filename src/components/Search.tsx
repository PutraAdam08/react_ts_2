import { useState } from "react";

interface Props {
    searchTerm : string;
    setSearchTerm: any;
}

const Search = (props: Props) => {
    const [key, setKey] = useState<string>();

    const handleClick = () => {
        props.setSearchTerm(key);
    }

    return(
        <>
            <form className="self-center w-full h-8 px-2 gap-2 border-2 rounded-2xl border-gray-400 flex">
                <img className="size-6 self-center" src="src\assets\search.svg" onClick={handleClick}/>
                <input style={{outline: "none"}} className="w-full" type="text" id="search" name="search" placeholder="Find your item" onChange={(e) => setKey(e.target.value)}/>
            </form>
        </>
    );
}

export default Search