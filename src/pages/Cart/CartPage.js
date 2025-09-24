import {CartEmpty} from "./components/CartEmpty"
import {CartList} from "./components/CartList"
import { useCart } from "../../context"
import { UseTitle } from "../../hooks/UseTitle"

export const CartPage = () => {
   UseTitle("CodeBook - cart")
  const {cartList} = useCart()
  return (
    <main>
        {
          cartList.length === 0 ? <CartEmpty/> : <CartList/>
        }
    </main>
  )
}
