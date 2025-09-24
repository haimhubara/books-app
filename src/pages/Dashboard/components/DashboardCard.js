import { BookOrder } from "./BookOrder"


export const DashboardCard = ({ order }) => {
    return (
        <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
            <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
                <span>Order Id: {order.id}</span>
                <span>Total: ${order.amount_paid}</span>
            </div>
            {
               order.cartList.map((book) => {
                return(
                    <BookOrder key={book.id} book={book}/>
                )
               }) 
            }
        </div>
    )
}