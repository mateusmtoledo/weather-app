import DateUtils from './utils/DateUtils';

export default class Weather {
  constructor(weatherData) {
    this.data = weatherData;
    this.dateOptions = DateUtils.getDateOptions(this.data.timezone);
  }

  normalizeObject(obj, type) {
    const { getDateString } = DateUtils;
    const { replaceIfNotUndefined } = Weather;
    return {
      ...obj,
      dt: getDateString(obj.dt, this.dateOptions[type]),
      pop: replaceIfNotUndefined(obj.pop, Math.round(obj.pop * 10000) / 100),
      sunrise: replaceIfNotUndefined(
        obj.sunrise,
        getDateString(obj.sunrise, this.dateOptions.sunset)
      ),
      sunset: replaceIfNotUndefined(
        obj.sunset,
        getDateString(obj.sunset, this.dateOptions.sunset)
      ),
      moonrise: replaceIfNotUndefined(
        obj.moonrise,
        getDateString(obj.moonrise, this.dateOptions.sunset)
      ),
      moonset: replaceIfNotUndefined(
        obj.moonset,
        getDateString(obj.moonset, this.dateOptions.sunset)
      ),
    };
  }

  static replaceIfNotUndefined(value, newValue) {
    if (value === undefined) return undefined;
    return newValue;
  }

  getNormalizedData() {
    const { data } = this;
    return {
      ...data,
      current: this.normalizeObject(data.current, 'current'),
      daily: data.daily.map((obj) => this.normalizeObject(obj, 'daily')),
      hourly: data.hourly.map((obj) => this.normalizeObject(obj, 'hourly')),
      minutely: data.minutely.map((obj) =>
        this.normalizeObject(obj, 'minutely')
      ),
    };
  }
}
