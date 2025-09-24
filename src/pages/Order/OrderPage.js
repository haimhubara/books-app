import { useLocation } from "react-router-dom"
import { OrderFail } from "./components/OrderFail"
import { OrderSuccess } from "./components/OrderSuccess"
import { UseTitle } from "../../hooks/UseTitle"

export const OrderPage = () => {
   UseTitle("CodeBook - order")
  const  {state} = useLocation();
  return (
    <main>
        {
          state.status ? <OrderSuccess data={state.data}/> : <OrderFail/>
        }
    </main>
  )
}
