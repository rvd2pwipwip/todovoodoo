// Function to get today's date as a YYYY-MM-DD string
export function getTodayDateFormatted() {
  return formatDate(new Date());
}

// Function to format a date as YYYY-MM-DD
export function formatDate(date) {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

// Function to parse a YYYY-MM-DD string to a Date object
export function parseDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return new Date(year, month - 1, day);
}

// Function to format a date as Mth DDth
export function formatTaskDate(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];

  // Determine the correct suffix for the day
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${month} ${day}${suffix}`;
}

// Get date range for the week
export function getWeekDateRange() {
  const today = new Date();
  const sevenDaysLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  return {
    start: formatDate(today),
    end: formatDate(sevenDaysLater),
  };
}
