export default class DateUtils {
  static getDateOptions(timeZone) {
    return {
      daily: {
        timeZone,
        weekday: 'long',
      },
      minutely: {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
      },
      hourly: {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
      },
      current: {
        timeZone,
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      },
      sunset: {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
      },
    };
  }

  static getDateString(date, options, locale = 'en-UK') {
    return new Date(date * 1000).toLocaleString(locale, options);
  }
}
