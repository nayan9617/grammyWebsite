import { useState } from "react"
import { Link } from "react-router-dom"

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            console.log("email and password is required!")
        }

        console.log("email: ", email);
    }

    return(
              <main className="flex-grow flex items-center justify-center bg-white">
            <div className="w-full max-w-sm p-8 m-7 bg-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="w-full flex flex-col items-start">
                        <label 
                          htmlFor="email" 
                          className="block text-black font-medium mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="text-black w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="w-full">
                        <div className="flex justify-between items-center mb-1">
                            <label 
                              htmlFor="password" 
                              className="block text-black font-medium"
                            >
                                Password
                            </label>
                            <Link
                                to="/resetPassword"
                                className="text-sm !text-yellow-600 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="text-black w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="!font-bold w-full !bg-yellow-500 !text-black py-2 rounded-md hover:!bg-yellow-600 transition duration-200"
                        >
                            Login
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-sm text-yellow-600">
                            Don’t have an account?
                            <Link
                                to="/signup"
                                className="!text-yellow-600 hover:underline ml-1"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login