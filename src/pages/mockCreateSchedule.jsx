import React, { useState } from "react";
import { supabase } from "../backend/backendInterface";
import { useNavigate } from "react-router-dom";

const DraftCreateSchedule = () => {
    const [formData, setFormData] = useState({
        name: '',
        day: '',
        f_time: '',
        t_time: '',
        description: '',
        priority: '',
        recurring: false,
        recurrance_start: '',
        recurrance_end: ''
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
        supabase.createTask(formData.name,
            formData.description,
            formData.day,
            formData.f_time,
            formData.t_time,
            formData.priority,
            formData.recurring,
            formData.recurrance_start,
            formData.recurrance_end
        )

            .then(result => {
                if (result.success) {
                    console.log("Success")
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
        <div>
            <form action="">
                <h1>DraftCreateSchedule</h1>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="day">Day: </label>
                    <input type="date" name="day" id="day" value={formData.day} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="f_time">From: </label>
                    <input type="time" name="f_time" id="f_time" value={formData.f_time} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="t_time">To: </label>
                    <input type="time" name="t_time" id="t_time" value={formData.t_time} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="priority">Priority: </label>
                    <div>
                        <input type="radio" id="low" name="priority" value="low" onChange={handleChange} />
                        <label htmlFor="low">Low</label>
                        <input type="radio" id="medium" name="priority" value="medium" onChange={handleChange} />
                        <label htmlFor="medium">Medium</label>
                        <input type="radio" id="high" name="priority" value="high" onChange={handleChange} />
                        <label htmlFor="high">High</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="recurring">Recurring: </label>
                    <input type="checkbox" id="recurring" name="recurring" checked={formData.recurring} onChange={(e) => setFormData(prev => ({
                        ...prev,
                        recurring: e.target.checked
                    }))} />
                </div>
                {formData.recurring && <div>
                    <div><label htmlFor="recurrance_start">Start Date: </label>
                        <input type="date" name="recurrance_start" id="recurrance_start" value={formData.recurrance_start} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="recurrance_end">End Date: </label>
                        <input type="date" name="recurrance_end" id="recurrance_end" value={formData.recurrance_end} onChange={handleChange} />
                    </div>

                </div>}
                <button type="submit" onClick={submitData}>Create Task</button>
            </form >
        </div >
    )
}

export default DraftCreateSchedule;