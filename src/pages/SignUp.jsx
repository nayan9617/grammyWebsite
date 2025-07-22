import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email || !name || !password || !confirmPassword){
        console.log("all fields are required!")
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ name, email, password });
  };

  return (
    <main className="flex-grow flex items-start justify-center bg-white">
      <div className="w-full max-w-sm p-9 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="w-full flex flex-col items-start justify-center">
            <label htmlFor="name" className="text-black font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="text-black w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="w-full flex flex-col items-start justify-center">
            <label htmlFor="email" className="text-black font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-black w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="w-full flex flex-col items-start justify-center">
            <label htmlFor="password" className="block text-black font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="text-black w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="w-full flex flex-col items-start justify-center">
            <label htmlFor="confirmPassword" className="block text-black font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="text-black w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              required
            />
          </div>

          {/* Signup Button */}
          <div>
            <button
              type="submit"
              className="w-full !bg-yellow-500 text-black py-2 rounded-md hover:!bg-yellow-600 transition duration-200"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-yellow-600">
              Already have an account?
              <Link to="/login" className="!text-yellow-600 hover:underline ml-1">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;