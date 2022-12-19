import Forecast from './Forecast';

export default class MinutelyForecast extends Forecast {
  constructor(dataToDisplay) {
    super('Minutely', 61, dataToDisplay);
  }
}
