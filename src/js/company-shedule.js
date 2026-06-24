import { useEffect, useState } from "react";

export default function companySchedule(scheduleMessages) {
  const [schedule, setSchedule] = useState({
    isOpen: false,
    message: "",
    color: "",
  });

  useEffect(() => {
    const dt = new Date();
    const th = dt.getHours() + dt.getMinutes() / 60;
    const td = dt.getDay(); // 0 Sun ... 6 Sat

    let message = "";
    let color = "";
    let isOpen = false;

    // Tuesday closed
    if (td === 2) {
      message = scheduleMessages.tuesdayClosed;
      color = "#CE3333";
      isOpen = false;

    // Monday: 12:00 - 15:00
    } else if (td === 1) {
      if (th >= 12 && th < 15) {
        isOpen = true;
        message = scheduleMessages.open;
        color = "#15EB07";
      } else {
        isOpen = false;
        message = scheduleMessages.closed;
        color = "#f70000";
      }

    // Wednesday - Sunday: 12:00 - 22:30
    } else {
      if (th >= 12 && th < 22.5) {
        isOpen = true;
        message = scheduleMessages.open;
        color = "#15EB07";
      } else {
        isOpen = false;
        message = scheduleMessages.closed;
        color = "#f70000";
      }
    }

    setSchedule({ isOpen, message, color });
  }, [scheduleMessages]);

  return schedule;
}
