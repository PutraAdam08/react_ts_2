import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import React, { useState, useEffect} from 'react';
import { Product } from '../Interfaces';


const API_URL = import.meta.env.VITE_API_URL;//import.meta.env.API_URL;

const getProduct = {
method: 'GET',
headers: {
    accept: 'application/json'
}
};

interface CatCheck {
  value: string;
  isChecked: boolean;
  products: Product[];
}

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prod, setProd] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [catCheck, setCatCheck] = useState<CatCheck[]>([])
  const searchKey = useOutletContext<string>();

  const getCategory = (products:Product[]) => {
    let cats = new Set<string>();
    let catsCheck:CatCheck[] = [];
    for(let i:number = 0; i < products.length; i++){
      cats.add(products[i].category);
    }
    let tmp = Array.from(cats);
    for(let i = 0; i < tmp.length; i++){
      let tmpc:CatCheck = {
        'isChecked': false,
        'value': tmp[i],
        'products': products.filter((p) => p.category === tmp[i])
      }
      catsCheck.push(tmpc)
    }
    //console.log(catsCheck)
    setCatCheck(Array.from(catsCheck))
  }
  
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

      //console.log(data);
      getCategory(data);
      setProd(data);

    } catch(error) {
      console.error(`Error fetching product: ${error}`);
      setErrorMessage('Error fetching product, please try again later')
    } finally {
      setIsLoading(false);
    }
  }

  const handleCatChange = (event : React.ChangeEvent<HTMLInputElement>, catsBox:CatCheck[], value:string) => {
    const newCats = catsBox.map(c => 
    c.value === value ? { ...c, isChecked: event.target.checked } : c
  );
  setCatCheck(newCats);
    /*setCatCheck()
    if(checkBox.checked){
      return (
        <>
          {prod.filter((p) => {p.category.includes(catBox.value)}).map(product => (
            <ProductCard id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image}/>
          ))}
      </>
      )
    }
    else return <></>;*/
  }

  const checkedCategories = catCheck.filter(c => c.isChecked).map(c => c.value);

  const visibleProducts =
    checkedCategories.length === 0
      ? prod // no checkbox checked → show all
      : prod.filter(p => checkedCategories.includes(p.category));

  useEffect(() => {
    fetchProd();
  }, []);

  return (
    <>
      <div className='mb-36 flex'></div>
      <div className='px-64 flex justify-center'>
        <div className='w-96 h-96 me-8 bg-white rounded-3xl p-8'>
          <h3 className='text-3xl text-start font-medium mb-4'>
            Category: 
          </h3>
            {catCheck.map(category => (
              <div className='flex gap-2 text-xl'>
                <input type='checkbox' name={category.value} id={`${category.value}Box`} value={category.value} onChange={(e)=>handleCatChange(e, catCheck, category.value)}></input><label>{category.value}</label>
              </div>
                
            ))}
        </div>
        <div className='grid xl:grid-cols-4 grid-cols-2 gap-16 mb-18'>
          {isLoading ? (<h3 className='text-grey-800'>Loading ...</h3>) 
          : errorMessage ? (<h3 className='text-red-500'>{errorMessage}</h3>) 
          : (
            (searchKey
              ? prod.filter(p => p.title.includes(searchKey))
              : visibleProducts
            ).map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default ProductPage;