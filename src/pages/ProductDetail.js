import { useEffect, useState } from "react"
import { Rating } from "../components";
import { useParams } from "react-router-dom";
import { UseTitle } from "../hooks/UseTitle";
import { useCart } from "../context";
import { getProduct } from "../services";

export const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const [notInCart, setNotInCart] = useState(true);
    const { id } = useParams()
    const { cartList,dispatch } = useCart();
    UseTitle(product.name)
   
    useEffect(()=>{
        async function fetchProduct() {
            const data = await getProduct(id)
            setProduct(data);
        }
        fetchProduct()

    },[id])
    
    const addToCart = () => {
        dispatch({type:"ADD_VALUE",payload:{product:product}})
    }
    const removeFromCart = () => {
        dispatch({type:"REMOVE_VALUE",payload:{product:product}})

    }
    useEffect(()=>{
        const inCart = cartList.find((prod) => prod.id === product.id);
        setNotInCart(!inCart)
    },[cartList,product.id])


    return (
        <main>
            <section>
            <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
            <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
            <div className="flex flex-wrap justify-around">
                <div className="max-w-xl my-3">
                <img className="rounded" src={product.image_local} alt={product.name} />
                </div>
                <div className="max-w-xl my-3">
                <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                    <span className="mr-1">$</span>
                    <span className="">{product.price}</span>
                </p>
                <p className="my-3"> 
                    <span>
                    <Rating rating={product.rating}/>
                    </span>
                </p>
                <p className="my-4 select-none">
                    {product.best_seller &&
                        <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>   
                    }
                    {
                        product.in_stock ?(
                             <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>
                        ):(
                         <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>
                        )
                    }
                    <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
                </p>
                <p className="my-3">
                    {notInCart && <button onClick={addToCart} className={`inline-flex items-center py-2 px-5 text-lg font-medium bg-blue-700 text-center text-white ${product.in_stock ? "hover:bg-blue-800"  : "cursor-not-allowed"} rounded-lg`} disabled={ product.in_stock ? "" : "disabled" } >Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
                    {!notInCart && <button onClick={removeFromCart} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> }
                </p>
                <p className="text-lg text-gray-900 dark:text-slate-200">
                  {product.long_description}
                </p>
                </div>
            </div>
            </section>
        </main> 
    )
}