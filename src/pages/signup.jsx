"use client";
import React, { useState } from "react";
import { supabase } from "../backend/backendInterface";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const submitData = (e) => {
        e.preventDefault();
        supabase.signup(formData.email, formData.password, formData.fname, formData.lname, false)
            .then(result => {
                if (result.success) {
                    navigate("/sign-in");
                } else {
                    alert(result.message);
                }
            })
            .catch(error => {
                console.error("Unexpected error:", error);
                alert("An unexpected error occurred");
            });
    }

    return (
        <div className="signup-page">
            <form action="">
                <h1>Create An Account</h1>
                <div>
                    <label htmlFor="fname">{"First Name: "}</label>
                    <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="fname">{"Last Name: "}</label>
                    <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="fname">{"Email: "}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">{"Password: "}</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="confirmPassword">{"Confirm Password: "}</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <button type="submit" onClick={submitData}>Submit</button>
            </form>
        </div>
    );
};

export default SignUp;