import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';


export function Registro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://api.sheetbest.com/sheets/170705e5-8fed-4de5-b599-71d5758ae04c", {
                Email: email,
                Password: password,
            });
            
            alert("Login successful!");
            setEmail("");
            setPassword("");
            navigate("/news");
        } catch (error) {
            console.error("Error logging in:", error);
            alert("There was an error logging in.");
        }
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

    return (
        <>
        <Navbar></Navbar>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center text-2xl font-bold text-orange-600 mb-4">Sign-Up</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">User</label>
                        <input
                            type="text"
                            id="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition duration-200">Make Account</button>
                    <button type="submit" className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition duration-200 my-4"><Link to='/landing'>Go Back</Link></button>
                </form>
            </div>
        </div>
        </>
    );
}
