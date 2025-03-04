import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/todoschedule.css";

const times = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

const TodoSchedule = () => {
  return (
    <div className="todoschedule">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Task Duration</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={index}>
              <td>{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoSchedule;