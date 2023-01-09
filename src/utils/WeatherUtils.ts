import DateUtils from './DateUtils';

export default class WeatherUtils {
  dateOptions: ReturnType<typeof DateUtils['getDateOptions']>;

  data: any; // TODO fix data type

  // TODO fix data type
  constructor(weatherData: any) {
    this.data = weatherData;
    this.dateOptions = DateUtils.getDateOptions(this.data.timezone);
  }

  // TODO fix data type
  normalizeObject(obj: any, type: 'current' | 'daily' | 'hourly' | 'minutely') {
    const { getDateString } = DateUtils;
    const { replaceIfNotUndefined } = WeatherUtils;
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

  static replaceIfNotUndefined<T>(value: any, newValue: T): T | undefined {
    if (value === undefined) return undefined;
    return newValue;
  }

  // TODO fix data type
  getNormalizedData() {
    const { data } = this;
    return {
      ...data,
      current: this.normalizeObject(data.current, 'current'),
      daily: data.daily.map((obj: any) => this.normalizeObject(obj, 'daily')),
      hourly: data.hourly.map((obj: any) =>
        this.normalizeObject(obj, 'hourly')
      ),
      minutely: data.minutely.map((obj: any) =>
        this.normalizeObject(obj, 'minutely')
      ),
    };
  }
}
