import { UseTitle } from "../hooks/UseTitle"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { loginUser } from "../services"
import { toast } from "react-toastify"
import { ErrorMessage } from "../components"

export const Login = () => {
    UseTitle("CodeBook - login")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const loginData = {
                username: email.current.value,
                password: password.current.value
            }

            const data = await loginUser(loginData);

            if (data.access_token) {
                navigate("/products");
            } else {
                toast.error(data.detail || "Login failed", { position: "bottom-center" });
                setErrorMessage(data.detail || "Login failed");
            }

        } catch (error) {
            toast.error(error.message || "Unknown error", { position: "bottom-center" });
            setErrorMessage(error.message || "Unknown error");
        }
    };
    const loginGuest = async () => {
        try {
            const loginData = {
                username: "guest@gmail.com",
                password: "12345678"
            }
            const data = await loginUser(loginData)
            data.access_token ? navigate("/products") : toast.error(data, { position: "bottom-center" })
        } catch (error) {
            setErrorMessage(error.message + " - " + error.status);
        }
    }

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
            </section>
            <form onSubmit={handleLogin}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="guest@example.com" required autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
            </form>
            <button onClick={loginGuest} className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>
             {errorMessage && errorMessage !== "" && <ErrorMessage message={errorMessage} />}
        </main>
    )
}