import StringUtils from './utils/StringUtils';
import DOMUtils from './utils/DOMUtils';

function minMaxGenerator() {
  const maxValue = DOMUtils.createElement(
    'span',
    {
      class: 'value',
    },
    '--'
  );
  const maxUnit = DOMUtils.createElement(
    'span',
    {
      class: 'unit',
    },
    '°C'
  );
  const max = DOMUtils.createElement('p', {}, maxValue, maxUnit);
  const maxText = DOMUtils.createElement('p', {}, 'MAX');
  const maxDiv = DOMUtils.createElement(
    'div',
    {
      class: 'max', // TODO naming
    },
    max,
    maxText
  );

  const minValue = DOMUtils.createElement(
    'span',
    {
      class: 'value',
    },
    '--'
  );
  const minUnit = DOMUtils.createElement(
    'span',
    {
      class: 'unit',
    },
    '°C'
  );
  const min = DOMUtils.createElement('p', {}, minValue, minUnit);
  const minText = DOMUtils.createElement('p', {}, 'MIN');
  const minDiv = DOMUtils.createElement(
    'div',
    {
      class: 'min',
    },
    min,
    minText
  );

  return DOMUtils.createElement(
    'div',
    {
      class: 'temperature-maxmin', // TODO naming
    },
    maxDiv,
    minDiv
  );
}

function cardDomNodeFactory(title, type) {
  const h3 = DOMUtils.createElement(
    'h3',
    {
      class: 'title', // TODO naming
    },
    title
  );
  const dataContainer = DOMUtils.createElement('div', {
    class: 'data-container', // TODO naming
  });
  const weatherIcon = DOMUtils.createElement('img', {
    src: 'https://openweathermap.org/img/wn/01n@2x.png',
  });
  const conditionContainer = DOMUtils.createElement(
    'div',
    {
      class: 'condition-container', // FIXME probably unecessary element
    },
    weatherIcon
  );
  const weatherDescription = DOMUtils.createElement('p', {}, '--');
  const weatherCondition = DOMUtils.createElement(
    'div',
    {
      class: 'weather-condition',
    },
    conditionContainer,
    weatherDescription
  );

  const cardChildren = [h3, weatherCondition, dataContainer];
  if (type === 'Daily') cardChildren.splice(2, 0, minMaxGenerator());
  const card = DOMUtils.createElement(
    'div',
    {
      class: 'card',
    },
    ...cardChildren
  );
  return card;
}

class Card {
  constructor(title, type) {
    this.domNode = cardDomNodeFactory(title, type);
    this.title = this.domNode.querySelector('.title');
    this.weatherConditionImg = this.domNode.querySelector(
      '.weather-condition img'
    );
    this.weatherConditionDesc = this.domNode.querySelector(
      '.weather-condition p'
    );
  }

  addInfo(infoObj) {
    const value = DOMUtils.createElement(
      'p',
      {
        class: 'value',
      },
      '--'
    );
    const desc = DOMUtils.createElement('p', {}, infoObj.name); // TODO naming
    const image = DOMUtils.createElement('img', {
      alt: infoObj.name,
      src: infoObj.icon,
    });
    const legend = DOMUtils.createElement(
      'div',
      {
        class: 'description',
      },
      image,
      desc
    );
    const container = DOMUtils.createElement(
      'div',
      {
        class: `data ${infoObj.varName}`,
      },
      legend,
      value
    );
    this.domNode.querySelector('.data-container').appendChild(container);
  }

  updateData(data, dataArr) {
    this.title.textContent = data.dt;
    this.weatherConditionImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.weatherConditionDesc.textContent = StringUtils.capitalize(
      data.weather[0].description
    );
    if (this.domNode.querySelector('.temperature-maxmin')) {
      this.domNode.querySelector('.max .value').textContent = Math.round(
        data.temp.max
      );
      this.domNode.querySelector('.min .value').textContent = Math.round(
        data.temp.min
      );
    }
    dataArr.forEach((datum) => {
      this.domNode.querySelector(`.data.${datum.varName} .value`).textContent =
        data[datum.varName] + datum.unit;
    });
  }
}

export default Card;
