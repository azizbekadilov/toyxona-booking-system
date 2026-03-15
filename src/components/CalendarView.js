function CalendarView({ setSelectedDate }) {

  const dates = [
    "2026-03-20",
    "2026-03-21",
    "2026-03-22",
    "2026-03-23",
    "2026-03-24"
  ];

  return (

    <div className="flex gap-3 flex-wrap">

      {dates.map((date) => (

        <button
          key={date}
          onClick={() => setSelectedDate(date)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {date}
        </button>

      ))}

    </div>

  );

}

export default CalendarView;