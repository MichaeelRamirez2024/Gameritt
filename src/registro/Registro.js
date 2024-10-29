import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";

export function Registro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://api.sheetbest.com/sheets/your-sheet-id", {
                Email: email,
                Password: password,
            });

            alert("Login successful!");
            setEmail("");
            setPassword("");
            navigate("/home");
        } catch (error) {
            console.error("Error logging in:", error);
            alert("There was an error logging in.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5 shadow-lg" style={{ maxWidth: "400px" }}>
                <h2 className="text-center text-uppercase mb-4" style={{ color: "#FF5722" }}>Sign-In</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">User</label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn btn-orange w-100 mt-3">Let's Sign</button>
                </form>
            </div>
        </div>
    );
}
