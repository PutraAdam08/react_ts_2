import { useState, useEffect } from "react";
import { Product } from "../Interfaces";
import { useParams } from "react-router-dom";
import BuyCard from "../components/BuyCard";

const API_URL = import.meta.env.VITE_API_URL;//import.meta.env.API_URL;

const getProduct = {
    method: 'GET',
    headers: {
            accept: 'application/json'
        }
};

const ProductDetail = () => {
    const [prod, setProd] = useState<Product>();
    const [errorMessage, setErrorMessage] =  useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {id} = useParams();

    const fetchProd = async() => {
        try{
            setIsLoading(true);
            const endpoint = `${API_URL}/products/${id}`
            const response = await fetch(endpoint, getProduct);
            
            if(!response.ok) throw new Error('Failed to fetch product');
            const data = await response.json();

            if(data.response === 'False') setErrorMessage(data.Error || 'Failed to fetch product');
            setProd(data);

        } catch (error) {
            console.error(`Error fetching product: ${error}`)
            setErrorMessage('Failed to fetch product, try again later')
        } finally {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        fetchProd();
    }, []);

    return (
        <>
            <div className="flex flex-col lg:px-64 sm:px-32 justify-center w-screen">
                <div className="mb-36"></div>
                {
                    isLoading ? (<h3 className='text-grey-800'>Loading ...</h3>) 
                    : errorMessage ? (<h3 className='text-red-500'>{errorMessage}</h3>)
                    : (
                        <div className="flex flex-row justify-between gap-16">
                            <img src={prod?.image} alt="" className="h-64 w-auto aspect-square" />
                            <div className="flex flex-col w-full gap-4">
                                <h1 className="text-4xl font-poppins font-bold">{prod?.title}</h1>
                                <h2 className="text-3xl font-poppins font-semibold">${prod?.price}</h2>
                                <h3 className="text-xl text-gray-800 font-poppins font-semibold border-t-2 border-b-2">Description</h3>
                                <p className="text-gray-800 font-poppins">{prod?.description}</p>
                            </div>
                            <BuyCard />
                        </div>
                    )
                }
                
            </div>
        </>
    );
}

export default ProductDetail;