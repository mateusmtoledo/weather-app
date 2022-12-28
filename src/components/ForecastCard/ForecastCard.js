import StringUtils from '../../utils/StringUtils';
import DOMUtils from '../../utils/DOMUtils';

// TODO review
export default class ForecastCard {
  constructor(title, type) {
    this.type = type;
    this.element = this.generateForecastCardElement();
    this.title = this.element.querySelector('.title');
    this.weatherConditionImg = this.element.querySelector(
      '.weather-condition img'
    );
    this.weatherConditionDesc = this.element.querySelector(
      '.weather-condition p'
    );
  }

  generateForecastCardElement() {
    const h3 = DOMUtils.createElement(
      'h3',
      {
        class: 'title', // TODO naming
      },
      this.title
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
    const temperatureElement = this.generateTemperatureElement();

    const weatherCondition = DOMUtils.createElement(
      'div',
      {
        class: 'weather-condition',
      },
      weatherIcon,
      weatherDescription,
      temperatureElement
    );
    const card = DOMUtils.createElement(
      'div',
      {
        class: 'card',
      },
      h3,
      weatherCondition,
      dataContainer
    );
    return card;
  }

  static generateTemperatureDisplay(type) {
    const value = DOMUtils.createElement(
      'span',
      {
        class: 'value',
      },
      '--'
    );
    const unit = DOMUtils.createElement(
      'span',
      {
        class: 'unit',
      },
      '°C'
    );
    return DOMUtils.createElement(
      'p',
      {
        class: `${type}-temperature`,
      },
      value,
      unit
    );
  }

  generateTemperatureElement() {
    if (this.type === 'Daily') {
      return DOMUtils.createElement(
        'div',
        {
          class: 'temperature',
        },
        ForecastCard.generateTemperatureDisplay('min'),
        ForecastCard.generateTemperatureDisplay('max')
      );
    }
    if (this.type === 'Hourly') {
      return DOMUtils.createElement(
        'div',
        {
          class: 'temperature',
        },
        ForecastCard.generateTemperatureDisplay('single')
      );
    }
    return null;
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
    const legend = DOMUtils.createElement(
      'div',
      {
        class: 'description',
      },
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
    this.weatherConditionImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.weatherConditionDesc.textContent = StringUtils.capitalize(
      data.weather[0].description
    );
    if (this.type === 'Daily') {
      this.element.querySelector('.min-temperature .value').textContent =
        Math.round(data.temp.min);
      this.element.querySelector('.max-temperature .value').textContent =
        Math.round(data.temp.max);
    }
    if (this.type === 'Hourly') {
      this.element.querySelector('.single-temperature .value').textContent =
        Math.round(data.temp);
    }
    dataArr.forEach((datum) => {
      this.element.querySelector(`.data.${datum.varName} .value`).textContent =
        data[datum.varName] + datum.unit;
    });
  }
}
