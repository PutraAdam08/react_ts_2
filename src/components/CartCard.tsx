import { FC, useState } from "react";
import { CartProduct } from "../Interfaces";
import axios from "axios";

const CartCard: FC<CartProduct> = ({product, quantity, userId}) => {

    const API_URL = import.meta.env.VITE_API_URL;
    const [errorMessage, setErrorMessage] = useState<string>('')

    const updateCartAmount = async() => {
        try {
            const endpoint:string = `${API_URL}/carts/${userId}`;
            const cart = {userId: userId, products: [{id: product.id}]};
            axios.put(endpoint, cart).then(response => console.log(response.data));;
        } catch(error) {
            if(axios.isAxiosError(error)){
                console.error(`Error updating cart: ${error.response?.data || error.message}`);
                if (error.response?.status === 404) {
                    console.error('Resource not found.');
                    setErrorMessage('Resource not found.');
                } else if (error.response?.status === 500) {
                    console.error('Server error.');
                    setErrorMessage('Server error.');
                }
            }
        }
    }

    return (
        <>
            <div className="flex flex-row w-full justify-between pb-8 border-b-2 border-gray-300">
                <div className="flex flex-row gap-12 justify-between">
                    <img className="flex w-auto h-48 aspect-square aspect-square" src={product.image}/>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl text-semibold font-poppins">{product.title}</h1>
                        <h2 className="text-base text-gray-400 font-poppins">{product.category}</h2>
                        <div className="flex flex-row gap-4 items-center">
                            <h2 className="text-base text-gray-400 font-poppins"> Quantity:</h2>
                            <div className="w-16 h-8 px-2 gap-2 border-2 rounded-lg border-gray-400 flex flex-row justify-between items-center">
                                <h4 className="text-lg text-gray-400 font-poppins font-semibold" onClick={(e) => {updateCartAmount()}}>+</h4> 
                                <h4 className="text-lg text-gray-400 font-poppins font-semibold">{quantity}</h4>
                                <h4 className="text-lg text-gray-400 font-poppins font-semibold">-</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl text-bold font-poppins">$30</h1>
            </div>
        </>
    );
}

export default CartCard;