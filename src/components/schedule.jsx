import React from "react";
import DayTimes from "./DayTimes";
import DualSlider from "./dualKnobSlider";
import "../styles/schedule.css";

const Schedule = () => {
    return (
        <div className="schedule">
            <div className="schedule-container">
                <DayTimes className="times"></DayTimes>
                <DualSlider className="slider"></DualSlider>
            </div>
        </div>
    );
}

export default Schedule;