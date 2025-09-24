export function toJalali(dateString, options = { onlyTime: false }) {
  const date = new Date(dateString);

  const weekdayFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    weekday: "long",
    timeZone: "UTC",
  });
  const dateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    day: "2-digit",
    month: "long",
    timeZone: "UTC",
  });
  const timeFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });

  if (options.onlyTime) {
    return timeFormatter.format(date);
  }

  return `${weekdayFormatter.format(date)} ${dateFormatter.format(date)} - ${timeFormatter.format(date)}`;
}

export function getToday(options = {}) {
  const today = new Date();
  if (options?.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }
  return today;
}
