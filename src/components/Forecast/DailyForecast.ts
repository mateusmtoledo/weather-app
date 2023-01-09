import DailyForecastCard from '../ForecastCard/DailyForecastCard';

export default class DailyForecast extends HTMLOListElement {
  cards: Array<DailyForecastCard>;

  // TODO fix data type
  constructor(data: any) {
    super();
    this.classList.add('forecast');
    this.setAttribute('data-type', 'daily');
    this.cards = data.map((datum: any) => new DailyForecastCard(datum)); // TODO fix data type
    this.append(...this.cards);
  }
}

customElements.define('daily-forecast', DailyForecast, { extends: 'ol' });
