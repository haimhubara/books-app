import { useEffect, useState } from "react"
import { ErrorMessage, ProductCard } from "../../../components"
import { getFeaturedList } from "../../../services";

export const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
  

  useEffect(()=>{
      async function fetchProducts() {
        try {
          const data = await getFeaturedList();
          setProducts(data); 
        } catch (error) {
          setErrorMessage(error.message + " - " + error.status );
        }
      }
      fetchProducts()
  },[])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
         {errorMessage && errorMessage !== "" &&<ErrorMessage message={errorMessage} />}
        <div className="flex flex-wrap justify-center lg:flex-row">
          {
            products.map((product) =>{
              return(
                 <ProductCard key={product.id} product={product}/>
              )
            })
          }
        </div>
    </section>
  )
}