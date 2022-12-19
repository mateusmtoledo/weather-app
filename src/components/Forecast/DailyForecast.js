import Forecast from './Forecast';

export default class DailyForecast extends Forecast {
  constructor(dataToDisplay) {
    super('Daily', 8, dataToDisplay);
  }
}
