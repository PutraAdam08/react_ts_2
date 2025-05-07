const NotFoundPage = () => {
    
    return(
        <>
            <div className="flex flex-col mx-auto justify-center h-screen w-screen items-center">
                <img src="src\assets\warning.svg" className="size-32 mb-4" />
                <h1 className="text-8xl font-poppins font-semibold mb-6">404 Not Found</h1>
                <h2 className="text-4xl text-gray-700 font-poppins">This page doesn't exist</h2>
            </div>
        </>
    ) 
}

export default NotFoundPage;