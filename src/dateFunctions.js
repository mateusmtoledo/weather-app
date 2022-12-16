function convertCurrentDate(c, timezone, locale = 'en-UK') {
  const options = {
    timeZone: timezone,
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const current = c;
  current.dt = new Date(current.dt * 1000).toLocaleString(locale, options);
}

function convertDailyDates(daily, timezone, locale = 'en-UK') {
  const dtOptions = {
    timeZone: timezone,
    weekday: 'long',
  };
  const sunOptions = {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  };
  daily.forEach((d, index) => {
    const day = d;
    day.sunrise = new Date(day.sunrise * 1000).toLocaleString(
      locale,
      sunOptions
    );
    day.sunset = new Date(day.sunset * 1000).toLocaleString(locale, sunOptions);
    if (index === 0) {
      day.dt = 'Today';
      return;
    }
    day.dt = new Date(day.dt * 1000).toLocaleString(locale, dtOptions);
  });
}

function convertHourlyAndMinutelyDates(obj, timezone, locale = 'en-UK') {
  const options = {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  };
  obj.hourly.forEach((h) => {
    const hour = h;
    hour.dt = new Date(hour.dt * 1000).toLocaleString(locale, options);
  });
  obj.minutely.forEach((m) => {
    const minute = m;
    minute.dt = new Date(minute.dt * 1000).toLocaleString(locale, options);
  });
}

function addDateStrings(obj) {
  convertCurrentDate(obj.current, obj.timezone);
  convertDailyDates(obj.daily, obj.timezone);
  convertHourlyAndMinutelyDates(obj, obj.timezone);
}

export default addDateStrings;
