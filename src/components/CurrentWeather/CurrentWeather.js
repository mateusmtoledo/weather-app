import dataSet from '../../data';
import pubSub from '../../pubSub';
import StringUtils from '../../utils/StringUtils';
import DOMUtils from '../../utils/DOMUtils';

export default class CurrentWeather {
  constructor() {
    this.element = CurrentWeather.generateCurrentWeatherElement();
    this.dataArr = [
      dataSet.feelsLike,
      dataSet.windSpeed,
      dataSet.cloudiness,
      dataSet.humidity,
      dataSet.visibility,
      dataSet.uvIndex,
    ];
    this.dataArr.forEach((datum) => {
      this.addInfo(datum);
    });
    pubSub.subscribe('newData', this.update.bind(this));
  }

  update(data) {
    this.element.querySelector('.city-name').textContent = data.city;
    this.element.querySelector('.date').textContent = data.current.dt;
    this.element.querySelector('.temperature .value').textContent = Math.round(
      data.current.temp
    );
    this.element.querySelector(
      '.weather-condition img'
    ).src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    this.element.querySelector('.weather-condition .description').textContent =
      StringUtils.capitalize(data.current.weather[0].description);
    this.dataArr.forEach((datum) => {
      this.element.querySelector(`.data.${datum.varName} .value`).textContent =
        data.current[datum.varName] + datum.unit;
    });
  }

  static generateCurrentWeatherElement() {
    const cityName = DOMUtils.createElement(
      'h2',
      {
        class: 'city-name',
      },
      'City'
    );
    const localDate = DOMUtils.createElement(
      'p',
      {
        class: 'date',
      },
      '--'
    );

    const weatherIcon = DOMUtils.createElement('img', {
      src: 'https://openweathermap.org/img/wn/01n@2x.png',
      width: '96px',
      height: '96px',
    });
    const weatherDescription = DOMUtils.createElement(
      'p',
      {
        class: 'description',
      },
      '--'
    );
    const weatherCondition = DOMUtils.createElement(
      'div',
      {
        class: 'weather-condition',
      },
      weatherIcon,
      weatherDescription
    );

    const temperatureValue = DOMUtils.createElement(
      'span',
      {
        class: 'value',
      },
      '--'
    ); // FIXME element might not be needed
    const spanSmall = DOMUtils.createElement(
      'span',
      {
        class: 'small',
      },
      '°C'
    );
    const temperature = DOMUtils.createElement(
      'p',
      {
        class: 'temperature',
      },
      temperatureValue,
      spanSmall
    );

    const cityInfo = DOMUtils.createElement(
      'div',
      {
        class: 'city-info',
      },
      cityName,
      localDate,
      temperature
    );

    const weatherDataContainer = DOMUtils.createElement('div', {
      class: 'data-container',
    });

    return DOMUtils.createElement(
      'div',
      {
        class: 'current-weather',
      },
      cityInfo,
      weatherCondition,
      weatherDataContainer
    );
  }

  addInfo(obj) {
    const value = DOMUtils.createElement(
      'p',
      {
        class: 'value',
      },
      '--'
    );
    const desc = DOMUtils.createElement(
      'p',
      {
        class: 'data-name',
      },
      obj.name
    );
    const image = DOMUtils.createElement('img', {
      alt: obj.name,
      src: obj.icon,
    });
    const legend = DOMUtils.createElement(
      'div',
      {
        class: 'description',
      },
      image,
      desc
    );

    this.element.querySelector('.data-container').append(
      DOMUtils.createElement(
        'div',
        {
          class: `data ${obj.varName}`,
        },
        legend,
        value
      )
    );
  }
}
