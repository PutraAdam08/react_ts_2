import axios from "axios";
import logo from "../assets/logo.svg"
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const getUser = (data:any, target:string) => {
    for(let i = 0; i < data.length;i++) {
        if(data[i]["username"] == target) return data[i]["id"];
        else continue;
    }
    return ""
}

const LoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [token, setToken] = useState<string>();
    const [cookies, setCookie] = useCookies(['user']);

    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const loginHandler = async() => {
        //setCredential(JSON.stringify({"username": username,"password": password}));
        try {
            const endpoint = `${API_URL}/auth/login`
            const responseLogin = await axios.post(endpoint, {'username' : username, 'password' : password});
            if(!responseLogin.data == undefined) throw new Error('Login failed');
            const responseUsers = await axios.get(`${API_URL}/users`);

            const dataT = responseLogin.data;
            const dataU = responseUsers.data
            let id = getUser(dataU, username);
            console.log(dataT.token+'+'+id);
            setCookie('user', (dataT.token+'+'+id), {path:'/'})
            //if(data.responseLogin === 'False')
            setToken(dataT.token);
            navigate('/')


        } catch (error) {
            console.error(`Login failure: ${error}`)
        }
    }

    return(
        <>
            <div className="flex flex-col mx-auto justify-center h-screen w-screen items-center">
                <div className="flex flex-col p-8 h-160 w-128 bg-white rounded-3xl shadow-md">
                    <img src={logo} alt="" className="mt-4 h-16 w-auto"/>
                    <form action="" className="mt-24 flex flex-col gap-4">
                        <label htmlFor="" className="text-2xl font-semibold font-poppins">Username</label>
                        <input className="p-2 bg-gray-100 text-xl font-poppins border-3 border-gray-300 w-full h-8 rounded-xl mb-4" onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="" className="text-2xl font-semibold font-poppins">Password</label>
                        <input className="p-2 bg-gray-100 text-xl font-poppins border-3 border-gray-300 w-full h-8 rounded-xl mb-4" onChange={(e) => setPassword(e.target.value)} />
                    </form>
                    <div className="flex justify-center w-full">
                        <button className="rounded-3xl bg-violet-400 hover:bg-violet-500 w-42 h-12 text-2xl text-white font-poppins font-semibold justify-self-center" onClick={() => {
                            loginHandler();
                        }}>Submit</button>
                    </div>
                    <h1>{token ? token : 'No token received'}</h1>
                </div>
            </div>
        </>
    );
}

export default LoginPage;