import { FC } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const ProductCard: FC<Product> = ({title, price, category, image}) => {

    return(
        <>
            <div className="bg-white rounded-3xl xl:h-80 xl:w-56 h-96 w-3xs shadow-md px-4 pt-4">
                <img className="w-full aspect-square mb-2" src={image}/>
                <h2 className="truncate text-2xl xl:text-xl font-medium text-gray-800">{title}</h2>
                <h3 className="text-2xl xl:text-xl font-bold">${price}</h3>
                <h4 className="text-base xl:text-sm text-gray-400">{category}</h4>
            </div>
        </>
    );
}

export default ProductCard;