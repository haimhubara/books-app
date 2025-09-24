import { useState, useEffect } from "react"
import { ErrorMessage, ProductCard } from "../../components"
import { FilterBar } from "./components/FilterBar"
import { useLocation } from "react-router-dom";
import { UseTitle } from "../../hooks/UseTitle";
import { useFilter } from "../../context";
import { getProductList } from "../../services";


export const ProductsList = () => {
  const { products, initProductsList } = useFilter()
  UseTitle("Products - CodeBook")
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm)
        initProductsList(data);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage(error.message + " - " + error.status );
      }
    }
    fetchProducts()
  }, [searchTerm, initProductsList])

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
          <span>
            <button onClick={() => { setIsVisible(prevState => !prevState) }} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
          </span>
        </div>
        {
          errorMessage && errorMessage !== "" &&<ErrorMessage message={errorMessage} />
        }

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })}
        </div>
      </section>
      {isVisible &&
        <FilterBar setIsVisible={setIsVisible} />
      }
    </main>
  )
}