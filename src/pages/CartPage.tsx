import CartCard from "../components/CartCard";
import { useState, useEffect } from "react";
import {Cart, Product, CartProduct} from "../Interfaces"
import axios from "axios";
import { useCookies } from "react-cookie";
import { data } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const CartPage = () => {
    const [cookies] = useCookies(['user'])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [cart, setCart] = useState<Cart>()
    const [products, setProducts] = useState<CartProduct[]>([])

    const filterCart = (data:any) => {
        let cvalue = cookies['user'];
        let carr = cvalue.split("+");
        let userId = carr[1];
        for(let i = 0; i < data.length;i++) {
        if(data[i]["userId"] == userId) return data[i];
        else continue;
    }
    return ""
    }

    const getCartProducts = async (cart: Cart) => {
        let pId:number = 0;
        let prods1:any = cart.products;
        let prducts : CartProduct[] = [];
        for(let i = 0; i < prods1.length; i++){
            pId = prods1[i].productId;
            const endpoint = `${API_URL}/products/${pId}`;
            const response = await axios.get(endpoint);
            const data = response.data;
            let tmp:CartProduct = {
                "product" : data,
                "quantity": prods1[i].quantity,
                "userId": cart.userId
            };
            prducts.push(tmp);
        }
        //console.log(prducts)
        setProducts(prducts);
    }
    
    const fetchCart = async () =>{
        setIsLoading(true)
        try{
            const endpoint = `${API_URL}/carts`;
            const response = await axios.get(endpoint);
            const data = response.data;
            const fdata = filterCart(data)
            //console.log(fdata.products);
            setCart(fdata);
            getCartProducts(fdata);
            //console.log(products);

        } catch(error) {
            if(axios.isAxiosError(error)){
                console.error(`Error fetching cart: ${error.response?.data || error.message}`);
                if (error.response?.status === 404) {
                    console.error('Resource not found.');
                    setErrorMessage('Resource not found.');
                } else if (error.response?.status === 500) {
                    console.error('Server error.');
                    setErrorMessage('Server error.');
                }
            }
            
            //setErrorMessage('Error fetching cart, please try again later');
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        fetchCart()
    }, [])
    
    return (
        <>
            <div className="flex flex-col lg:px-64 sm:px-32 justify-center w-screen">
                <div className="mb-36"></div>
                <div className="flex flex-col gap-12 h-132 overflow-y-auto mb-16">
                    {
                        products.map(product => (
                            <CartCard product={product.product} quantity={product.quantity} userId={product.userId}/>
                        ))
                    }
                </div>
                <div className="flex flex-row justify-end">
                    <div className="flex flex-col gap-8 h-96 w-196 bg-white shadow-md py-4 px-6 rounded-2xl">
                        <h2 className="text-2xl font-semibold font-poppins">Cart total</h2>
                        <div className="border-b-4 border-gray-300">
                            <h2 className="text-2xl text-gray-800 font-poppins">subtotal</h2>
                        </div>
                        <div className="border-b-4 border-gray-300">
                            <h2 className="text-2xl text-gray-800 font-poppins">shipping</h2>
                        </div>
                        <div className="">
                            <h2 className="mt-2 text-2xl text-gray-800 font-poppins">Total</h2>
                        </div>
                        <div className="flex justify-center w-full">
                            <button className="rounded-3xl bg-violet-400 hover:bg-violet-500 w-64 h-16 text-xl text-white font-poppins font-semibold">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage;