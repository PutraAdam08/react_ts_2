import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";



const MainLayout = () => {
    const [p, setP] = useState<string>('');

    return (
        <>
            <Header searchTerm={p} setSearchTerm={setP}/>
            <Outlet context={p} />
        </>
    )
}

export default MainLayout;