import React from "react";
import StudentCard from "./StudentCard";

function App() {
  const students = [
    {
      name: "Arendla Sathwik",
      rollNo: "2303A52158",
      marks: 86
    },
    {
      name: "Maidamshetti Harish",
      rollNo: "2303A52387",
      marks: 90
    },
    {
      name: "Modem Pranav",
      rollNo: "2303A52128",
      marks: 85
    }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: "#fc8a8a"}}>
      <h1>Student Marks Card</h1>

      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          rollNo={student.rollNo}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default App;