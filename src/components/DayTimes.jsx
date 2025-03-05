import React from "react";
import "../styles/daytimes.css";

const times = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

const DayTimes = () => {
  return (
    <div className="dayTimes">
      <table>
        <thead>
          <tr>
          {times.map((time, index) => (
            <th key={index}>
              <tr>{time}</tr>
            </th>
          ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default DayTimes;