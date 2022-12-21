import StringUtils from '../../utils/StringUtils';
import DOMUtils from '../../utils/DOMUtils';

// TODO review
export default class ForecastCard {
  constructor(title, type) {
    this.element = ForecastCard.generateForecastCardElement(title, type);
    this.title = this.element.querySelector('.title');
    this.weatherConditionImg = this.element.querySelector(
      '.weather-condition img'
    );
    this.weatherConditionDesc = this.element.querySelector(
      '.weather-condition p'
    );
  }

  static generateForecastCardElement(title, type) {
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
      width: '64px',
      height: '64px',
    });
    const weatherDescription = DOMUtils.createElement('p', {}, '--');
    const weatherCondition = DOMUtils.createElement(
      'div',
      {
        class: 'weather-condition',
      },
      weatherIcon,
      weatherDescription
    );
    const cardChildren = [h3, weatherCondition, dataContainer];
    if (type === 'Daily')
      cardChildren.splice(
        1,
        0,
        ForecastCard.generateMinMaxTemperatureElement()
      );
    const card = DOMUtils.createElement(
      'div',
      {
        class: 'card',
      },
      ...cardChildren
    );
    return card;
  }

  static generateMinMaxTemperatureElement() {
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
    const max = DOMUtils.createElement(
      'p',
      {
        class: 'max-temperature',
      },
      maxValue,
      maxUnit
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
    const min = DOMUtils.createElement(
      'p',
      {
        class: 'min-temperature',
      },
      minValue,
      minUnit
    );

    return DOMUtils.createElement(
      'div',
      {
        class: 'temperature-minmax',
      },
      max,
      min
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
    const dataName = DOMUtils.createElement(
      'p',
      {
        class: 'data-name',
      },
      infoObj.name
    );
    // const image = DOMUtils.createElement('img', {
    //   alt: infoObj.name,
    //   src: infoObj.icon,
    // });
    const legend = DOMUtils.createElement(
      'div',
      {
        class: 'description',
      },
      // image,
      dataName
    );
    const container = DOMUtils.createElement(
      'div',
      {
        class: `data ${infoObj.varName}`,
      },
      legend,
      value
    );
    this.element.querySelector('.data-container').appendChild(container);
  }

  update(data, dataArr) {
    this.title.textContent = data.dt;
    this.weatherConditionImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.weatherConditionDesc.textContent = StringUtils.capitalize(
      data.weather[0].description
    );
    if (this.element.querySelector('.temperature-minmax')) {
      this.element.querySelector('.max-temperature .value').textContent =
        Math.round(data.temp.max);
      this.element.querySelector('.min-temperature .value').textContent =
        Math.round(data.temp.min);
    }
    dataArr.forEach((datum) => {
      this.element.querySelector(`.data.${datum.varName} .value`).textContent =
        data[datum.varName] + datum.unit;
    });
  }
}
