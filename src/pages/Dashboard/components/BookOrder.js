import { Link } from "react-router-dom"

export const BookOrder = ({book}) => {
    return (
        <div className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
            <div className="flex">
                <Link to={`/products/${book.id}`}>
                    <img className="w-32 rounded" src={book.image_local} alt={book.name} />
                </Link>
                <div className="">
                    <Link to={`/products/${book.id}`}>
                        <p className="text-lg ml-2 dark:text-slate-200">{book.name}</p>
                    </Link>
                    <div className="text-lg m-2 dark:text-slate-200">
                        <span>${book.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
