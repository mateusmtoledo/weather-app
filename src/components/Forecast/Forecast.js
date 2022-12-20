import Card from '../ForecastCard/ForecastCard';
import pubSub from '../../pubSub';
import DOMUtils from '../../utils/DOMUtils';

// TODO split view
export default class Forecast {
  constructor(title, numberOfCards, dataToDisplay) {
    this.title = title;
    this.numberOfCards = numberOfCards;
    this.cards = [];
    this.dataToDisplay = dataToDisplay;
    this.element = this.generateForecastElement(title);
    pubSub.subscribe('newData', this.updateCards.bind(this));
  }

  // TODO review
  generateForecastElement(title) {
    for (let i = 0; i < this.numberOfCards; i += 1) {
      this.cards[i] = new Card('Title', this.title);
      for (let j = 0; j < this.dataToDisplay.length; j += 1) {
        this.cards[i].addInfo(this.dataToDisplay[j]); // FIXME this probably does not belong here
      }
    }
    const h2 = DOMUtils.createElement('h2', {}, title);
    const cardContainer = DOMUtils.createElement(
      'div',
      {
        class: 'card-container',
      },
      ...this.cards.map((card) => card.element)
    );
    return DOMUtils.createElement(
      'div',
      {
        class: 'forecast',
      },
      h2,
      cardContainer
    );
  }

  updateCards(data) {
    const thisData = data[this.title.toLowerCase()];
    this.cards.forEach((card, index) => {
      card.update(thisData[index], this.dataToDisplay);
    });
  }
}
