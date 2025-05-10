

const CartPage = () => {

    
    return (
        <>
            <div className="flex flex-col lg:px-64 sm:px-32 justify-center w-screen">
                <div className="mb-36"></div>
                <div className="flex flex-row w-full justify-between pb-8 border-b-2 border-gray-300">
                    <div className="flex flex-row gap-12 justify-between">
                        <div className="flex h-48 w-auto aspect-square rounded-2xl bg-gray-700 justify-center items-center"><h1 className="text-white">Placeholder</h1></div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl text-semibold font-poppins">title</h1>
                            <h2 className="text-base text-gray-400 font-poppins">category</h2>
                            <div className="flex flex-row gap-4 items-center">
                                <h2 className="text-base text-gray-400 font-poppins"> Quantity:</h2>
                                <div className="w-16 h-8 px-2 gap-2 border-2 rounded-lg border-gray-400 flex flex-row justify-between items-center">
                                    <h4 className="text-lg text-gray-400 font-poppins font-semibold">+</h4>
                                    <h4 className="text-lg text-gray-400 font-poppins font-semibold">0</h4>
                                    <h4 className="text-lg text-gray-400 font-poppins font-semibold">-</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl text-bold font-poppins">$30</h1>
                </div>
            </div>
        </>
    )
}

export default CartPage;