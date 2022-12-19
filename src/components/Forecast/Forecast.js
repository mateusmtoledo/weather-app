import Card from '../../cards';
import pubSub from '../../pubSub';
import DOMUtils from '../../utils/DOMUtils';

function forecastElementFactory(title) {
  const h2 = DOMUtils.createElement('h2', {}, title);
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

export default class Forecast {
  constructor(title, numberOfCards, dataToDisplay) {
    this.title = title;
    this.numberOfCards = numberOfCards;
    this.domNode = forecastElementFactory(title);
    this.dataToDisplay = dataToDisplay;
    this.cards = [];
    pubSub.subscribe('newData', this.updateCards.bind(this));
    this.init();
  }

  init() {
    for (let i = 0; i < this.numberOfCards; i += 1) {
      this.cards[i] = new Card('Title', this.title);
      for (let j = 0; j < this.dataToDisplay.length; j += 1) {
        this.cards[i].addInfo(this.dataToDisplay[j]);
      }
      this.domNode
        .querySelector('.card-container')
        .append(this.cards[i].domNode);
    }
  }

  updateCards(data) {
    const thisData = data[this.title.toLowerCase()];
    this.cards.forEach((card, index) => {
      card.updateData(thisData[index], this.dataToDisplay);
    });
  }
}
