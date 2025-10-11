import { useEffect, useState } from "react"
import { ErrorMessage, Loading, ProductCard } from "../../../components"
import { getFeaturedList } from "../../../services";

export const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  

  useEffect(()=>{
      async function fetchProducts() {
        try {
          setIsLoading(true)
          const data = await getFeaturedList();
          setIsLoading(false)
          setProducts(data); 
        } catch (error) {
          setErrorMessage(error.message + " - " + error.status );
          setIsLoading(false)
        }
      }
      fetchProducts()
  },[])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
         {errorMessage && errorMessage !== "" &&<ErrorMessage message={errorMessage} />}
         {isLoading && <Loading/>}
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