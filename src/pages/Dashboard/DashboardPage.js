import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpth"
import { getUserOrders } from "../../services"
import { UseTitle } from "../../hooks/UseTitle"
import { toast } from "react-toastify"

export const DashboardPage = () => {
     UseTitle("CodeBook - dashboard")
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        async function fethOrderData(){
            try {
                const data = await getUserOrders();
                setOrders(data);
            } catch (error) {
                 toast.error(error.message,{position: "bottom-center"})
            }
        }
        fethOrderData()
    },[])
    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>
            <section>
                {orders.length && orders.map((order) => {
                    return (
                        <DashboardCard key={order.id} order={order} />
                    )
                })}
            </section>

            <section>
                {!orders.length && <DashboardEmpty />}
            </section>
        </main>
    )
}