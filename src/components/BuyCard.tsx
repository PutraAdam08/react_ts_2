const BuyCard = () => {
    return (
        <>
            <div className="bg-white rounded-3xl h-64 w-auto aspect-square shadow-md py-4 px-6">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-poppins font-semibold">Amount</h3>
                    <div className="w-24 h-8 px-2 gap-2 border-2 rounded-2xl border-gray-400 flex flex-row justify-between">
                        <h4 className="text-xl text-gray-400 font-poppins font-semibold items-center">+</h4>
                        <h4 className="text-xl text-gray-400 font-poppins font-semibold items-center">0</h4>
                        <h4 className="text-xl text-gray-400 font-poppins font-semibold items-center">-</h4>
                    </div>
                    <div className="mt-4 gap-2 flex flex-row justify-between">
                        <h5 className="text-base text-gray-400 font-poppins items-center">Subtotal:</h5>
                        <h4 className="text-2xl font-poppins font-semibold items-center">$30</h4>
                    </div>
                    <button className="rounded-2xl bg-violet-400 hover:bg-violet-500 items-center w-full h-8 text-white">Add to cart</button>
                    <button className="rounded-2xl border-2 border-violet-400 items-center w-full h-8 text-violet-400">Buy now</button>
                </div>
            </div>
        </>
    )
}

export default BuyCard;