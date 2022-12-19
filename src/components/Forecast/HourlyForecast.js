import Forecast from './Forecast';

export default class HourlyForecast extends Forecast {
  constructor(dataToDisplay) {
    super('Hourly', 48, dataToDisplay);
  }
}
