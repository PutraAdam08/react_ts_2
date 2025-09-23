import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useState, useEffect} from 'react';
import { Product } from '../Interfaces';


const API_URL = import.meta.env.VITE_API_URL;//import.meta.env.API_URL;

const getProduct = {
method: 'GET',
headers: {
    accept: 'application/json'
}
};

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prod, setProd] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const searchKey = useOutletContext<string>();
  
  const fetchProd = async () => {
    setIsLoading(true);
    try{
      const endpoint = `${API_URL}/products`;
      const response = await fetch(endpoint, getProduct);

      if(!response.ok) throw new Error('Failed to fetch cart');
      const data = await response.json();
      if(data.Response === 'False'){
        setErrorMessage(data.Error || 'Failed to fetch cart');
      }

      console.log(data);
      setProd(data);

    } catch(error) {
      console.error(`Error fetching product: ${error}`);
      setErrorMessage('Error fetching product, please try again later')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProd();
  }, []);

  return (
    <>
      <div className='mb-36 flex'></div>
      <div className='px-64 flex justify-center'>
        <div className='grid grid-cols-6 gap-16 mb-18'>
          {isLoading ? (<h3 className='text-grey-800'>Loading ...</h3>) 
          : errorMessage ? (<h3 className='text-red-500'>{errorMessage}</h3>) 
          : (searchKey ? prod.filter((p) => p.title.includes(searchKey)).map(product => (
              <ProductCard id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image}/>
            )) : 
            prod.map(product => (
              <ProductCard id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image}/>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default ProductPage;