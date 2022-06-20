import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Calendar = (props) => {
  return (
    <div
      style={{ backgroundColor: "darkgrey", padding: "10%", margin: "20px" }}
    >
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={props.events}
      />
    </div>
  );
};

export default Calendar;
