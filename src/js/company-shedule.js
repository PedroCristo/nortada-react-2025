import { useEffect, useState } from "react";

export default function companySchedule(scheduleMessages) {
  const [schedule, setSchedule] = useState({
    isOpen: false,
    message: "",
    color: "",
  });

  useEffect(() => {
    const dt = new Date();
    const th = dt.getHours() + dt.getMinutes() / 60; // Get precise time
    const td = dt.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    let message = "";
    let color = "";

    if (td === 2) { // Tuesday (Terça-feira)
      message = scheduleMessages.tuesdayClosed;
      color = "#CE3333";
    } else if (td === 3 || td === 4 || td === 5 || td === 6 || td === 0 || td === 1) { 
      // Open Wednesday to Monday from 12:00 to 22:30
      if (th >= 12 && th < 22.5) {
        message = scheduleMessages.open;
        color = "#15EB07";
      } else {
        message = scheduleMessages.closed;
        color = " #f70000";
      }
    }

    setSchedule({
      isOpen: th >= 12 && th < 22.5 && td !== 2, // Open if within hours and not Tuesday
      message,
      color,
    });
  }, [scheduleMessages]);

  return schedule;
}

