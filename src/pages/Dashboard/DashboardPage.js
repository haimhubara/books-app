import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpth"

export const DashboardPage = () => {
    const [orders,setOrders] = useState([])
    const uid = sessionStorage.getItem("uid")
    const token = JSON.parse(sessionStorage.getItem("token"))
    useEffect(()=>{
        async function fethOrderData(){
            const response = await fetch(`http://localhost:5000/660/orders?user.id=${uid}`,{
                method:'GET',
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            const data = await response.json();
            setOrders(data);
        }
        fethOrderData()
    },[uid,token])
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