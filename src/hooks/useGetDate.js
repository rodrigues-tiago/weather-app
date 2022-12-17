import { useState, useEffect } from "react";

const useGetDay = () => {
  const [weekday, setWeekday] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    switch (new Date().getDay()) {
      case 0:
        setWeekday("Sunday");
        break;
      case 1:
        setWeekday("Monday");
        break;
      case 2:
        setWeekday("Tuesday");
        break;
      case 3:
        setWeekday("Wednesday");
        break;
      case 4:
        setWeekday("Thursday");
        break;
      case 5:
        setWeekday("Friday");
        break;
      case 6:
        setWeekday("Saturday");
    }
  }, [weekday]);

  useEffect(() => {
    switch (new Date().getMonth()) {
      case 0:
        setMonth("Jan");
        break;
      case 1:
        setMonth("Feb");
        break;
      case 2:
        setMonth("Mar");
        break;
      case 3:
        setMonth("Apr");
        break;
      case 4:
        setMonth("May");
        break;
      case 5:
        setMonth("Jun");
        break;
      case 6:
        setMonth("Jul");
      case 7:
        setMonth("Aug");
        break;
      case 8:
        setMonth("Sep");
        break;
      case 9:
        setMonth("Oct");
        break;
      case 10:
        setMonth("Nov");
        break;
      case 11:
        setMonth("Dec");
        break;
    }
  }, [month]);

  return {
    weekday,
    month,
  };
};

export default useGetDay;
