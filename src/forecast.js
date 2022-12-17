import dataSet from './data';
import Card from './cards';
import pubSub from './pubSub';
import DOMUtils from './utils/DOMUtils';

function forecastElementFactory(name) {
  const h2 = DOMUtils.createElement('h2', {}, name);
  const dataContainer = DOMUtils.createElement('div', {
    class: 'card-container',
  });
  return DOMUtils.createElement(
    'div',
    {
      class: 'forecast',
    },
    h2,
    dataContainer
  );
}

class Forecast {
  constructor(name, ...datum) {
    this.name = name;
    this.domNode = forecastElementFactory(name);
    this.dataArr = [...datum];
    this.cards = [];
    this.numberOfCards = (() => {
      switch (this.name) {
        case 'Daily':
          return 8;
        case 'Hourly':
          return 48;
        case 'Minutely':
          return 61;
        default:
          return 4;
      }
    })();
    pubSub.subscribe('newData', this.updateCards.bind(this));
    this.init();
  }

  init() {
    for (let i = 0; i < this.numberOfCards; i += 1) {
      this.cards[i] = new Card('Title', this.name);
      for (let j = 0; j < this.dataArr.length; j += 1) {
        this.cards[i].addInfo(this.dataArr[j]);
      }
      this.domNode
        .querySelector('.card-container')
        .append(this.cards[i].domNode);
    }
  }

  updateCards(data) {
    const thisData = data[this.name.toLowerCase()];
    this.cards.forEach((card, index) => {
      card.updateData(thisData[index], this.dataArr);
    });
  }
}

const daily = new Forecast('Daily', dataSet.sunrise, dataSet.sunset);
const hourly = new Forecast(
  'Hourly',
  dataSet.temperature,
  dataSet.rainProbability,
  dataSet.cloudiness,
  dataSet.humidity
);

export default { daily, hourly };
