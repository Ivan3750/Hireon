'use client';

import "@/app/styles/login.css"
import { useState } from "react"
import { useRouter } from 'next/router';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = isLogin ? "/api/auth/login" : "/api/auth/register"
        
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, username: isLogin ? undefined : username }),
            })

            if (response.ok) {
                console.log("ok")
                window.location.search = ""
                window.location.pathname = "/main"
                const data = await response.json()
                localStorage.setItem("token", data.token)
            } else {
                const errorData = await response.json()
                setErrorMessage(errorData.message || "Something went wrong. Please try again.")
            }
        } catch (error) {
            setErrorMessage("Error: " + error.message)
            console.error("Error:", error)
        }
    }

    const toggleForm = () => {
        setIsLogin(!isLogin)
        setErrorMessage("")
        setName("")
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-sm p-6 w-495 h-639 bg-[#8ECAE6] border-rad rounded-2xl">
                {isLogin ? (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="mb-4">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Petersen"
                                    required
                                    className="w-full p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl "
                                />
                            </div>
                            <div className="mb-4">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="peter@gmail.com"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label>Phone</label>
                                <input
                                    type="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+380 67 219 00 00"
                                    required
                                    className="w-full p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl "
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
                                LOG IN
                            </button>
                            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                            <p className="mt-4 text-center">
                                Don't have an account?{" "}
                                <button type="button" onClick={toggleForm} className="text-blue-500 underline">
                                    Sign up
                                </button>
                            </p>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
                                SIGN UP
                            </button>
                            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                            <p className="mt-4 text-center">
                                Already have an account?{" "}
                                <button type="button" onClick={toggleForm} className="text-blue-500 underline">
                                    Log in
                                </button>
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}
