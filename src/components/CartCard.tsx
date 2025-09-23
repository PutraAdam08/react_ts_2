import { FC } from "react";
import { CartProduct } from "../Interfaces";

const CartCard: FC<CartProduct> = ({product, quantity}) => {
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
                                <h4 className="text-lg text-gray-400 font-poppins font-semibold">+</h4>
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