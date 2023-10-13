import { MouseEvent, useState } from "react";
import { getDaysOfMonth } from "../../utils/date";

const TodoCalendar = () => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());

  const [markedDay, setMarkedDay] = useState(day);
  const [days, setDays] = useState(getDaysOfMonth(year, month));

  const handleClickDay = (e: MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;
    setMarkedDay(Number(target.dataset?.["index"]));
  };

  return (
    <div>
      <span data-testid="month">{month}</span>

      <div>
        {Array(days)
          .fill("")
          .map((_, i) => (
            <span
              data-testid={`day_${i + 1}`}
              data-index={i}
              className={i + 1 === markedDay ? "on" : ""}
              onClick={handleClickDay}
              key={`day_${i}`}
            >
              {i + 1}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TodoCalendar;
