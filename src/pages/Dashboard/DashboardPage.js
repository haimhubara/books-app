import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpth"
import { getUserOrders } from "../../services"
import { UseTitle } from "../../hooks/UseTitle"
import { toast } from "react-toastify"
import { Loading } from "../../components"

export const DashboardPage = () => {
    UseTitle("CodeBook - dashboard")
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        async function fethOrderData() {
            try {
                setIsLoading(true)
                const data = await getUserOrders();
                setIsLoading(false)
                setOrders(data);
            } catch (error) {
                toast.error(error.message, { position: "bottom-center" })
                setIsLoading(false)
            }
        }
        fethOrderData()
    }, [])
    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>
            {
                isLoading && <Loading />
            }
            {
                !isLoading &&
                <>
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
                </>
            }

        </main>
    )
}