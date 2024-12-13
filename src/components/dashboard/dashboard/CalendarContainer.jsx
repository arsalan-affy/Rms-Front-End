import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function CalendarContainer() {
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
    console.log("Selected Date:", date?.format("YYYY-MM-DD"));
  };
  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange}
          sx={{
            width: "100%", // Full width for the calendar
            "& .MuiPickersDay-dayWithMargin": {
              //   backgroundColor: "#BCE6FFCC", // Active (selected) date color

              borderRadius: "50%", // Makes day buttons round
            },
            "& .Mui-selected": {
              backgroundColor: "#3EB5E1", // Active (selected) date color
              color: "#000", // Text color for the selected date
              "&:hover": {
                backgroundColor: "#98D8FF", // Slightly darker on hover
              },
            },
            "& .MuiPickersDay-root": {
              "&.Mui-selected:hover": {
                backgroundColor: "#98D8FF", // Hover state for active date
              },
            },
          }}
        />
        {/* {selectedDate && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h3>Selected Date:</h3>
            <p>{selectedDate.format("YYYY-MM-DD")}</p>
          </div>
        )} */}
      </LocalizationProvider>
    </div>
  );
}
