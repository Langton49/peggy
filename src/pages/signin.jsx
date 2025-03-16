"use client";
import React, { useState } from "react";
import { supabase } from "../backend/backendInterface";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        supabase.login(formData.email, formData.password)
            .then(result => {
                if (result.success) {
                    navigate("/");
                } else {
                    alert(result.message);
                }
            })
            .catch(error => {
                console.error("Error signing in:", error.message);
                alert("Error signing in. Please try again later.");
            });
    };

    return (
        <div className="signin-page">
            <h1>Sign In</h1>
            <form action="">
                <div>
                    <label htmlFor="email">{"Email: "}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">{"Password: "}</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;