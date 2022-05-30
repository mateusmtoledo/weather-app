import dataSet from './data';
import Card from './cards';

function forecastElementFactory(name) {
  const container = document.createElement('div');
  container.classList.add('forecast');
  const h2 = document.createElement('h2');
  h2.textContent = name;
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('card-container');
  container.append(h2, dataContainer);
  return container;
}

class Forecast {
  constructor(name, obj, ...datum) {
    this.name = name;
    this.data = obj;
    this.domNode = forecastElementFactory(name);
    this.dataArr = [...datum];
    this.cards = [];
    this.init();
  }

  init() {
    for (let i = 0; i < 4; i += 1) {
      this.cards[i] = new Card(i.toString(), this.name);
      for (let j = 0; j < this.dataArr.length; j += 1) {
        this.cards[i].addInfo(this.dataArr[j]);
      }
      this.domNode.querySelector('.card-container').append(this.cards[i].domNode);
    }
  }
}

// const daily = new Forecast('Daily', .daily, dataSet.sunrise, dataSet.sunset);
// const hourly = new Forecast('Hourly', .hourly, dataSet.cloudiness, dataSet.humidity);

// export default { daily, hourly };
