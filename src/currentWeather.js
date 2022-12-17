import dataSet from './data';
import pubSub from './pubSub';
import stringFunctions from './stringFunctions';
import DOMUtils from './utils/DOMUtils';

const currentWeather = (() => {
  const cityName = DOMUtils.createElement(
    'p',
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
  const cityInfo = DOMUtils.createElement(
    'div',
    {
      class: 'city-info',
    },
    cityName,
    localDate
  );

  const temperatureValue = DOMUtils.createElement('span', {}, '--'); // FIXME element might not be needed
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
      class: 'temperature value',
    },
    temperatureValue,
    spanSmall
  );

  const weatherIcon = DOMUtils.createElement('img', {
    src: 'https://openweathermap.org/img/wn/01n@2x.png',
  });
  const iconContainer = DOMUtils.createElement(
    'div',
    {
      class: 'icon-container', // FIXME element might not be needed
    },
    weatherIcon
  );
  const weatherDescription = DOMUtils.createElement('p', {}, '--');
  const weatherCondition = DOMUtils.createElement(
    'div',
    {
      class: 'weather-condition',
    },
    iconContainer,
    weatherDescription
  );

  const weatherExtra = DOMUtils.createElement('div', {
    class: 'extra',
  }); // TODO naming

  const weatherInfo = DOMUtils.createElement(
    'div',
    {
      class: 'weather-info',
    },
    temperature,
    weatherCondition,
    weatherExtra
  );

  const container = DOMUtils.createElement(
    'div',
    {
      class: 'current-weather',
    },
    cityInfo,
    weatherInfo
  );

  const addInfo = (obj) => {
    const value = DOMUtils.createElement(
      'p',
      {
        class: 'value',
      },
      '--'
    );
    const desc = DOMUtils.createElement('p', {}, obj.name);
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

    weatherExtra.append(
      DOMUtils.createElement(
        'div',
        {
          class: `data ${obj.varName}`,
        },
        legend,
        value
      )
    );
  };

  const dataArr = [
    dataSet.feelsLike,
    dataSet.windSpeed,
    dataSet.cloudiness,
    dataSet.humidity,
    dataSet.visibility,
    dataSet.uvIndex,
  ];

  dataArr.forEach((datum) => {
    addInfo(datum);
  });

  pubSub.subscribe('newData', (data) => {
    cityName.textContent = data.city;
    localDate.textContent = data.current.dt;
    temperatureValue.textContent = Math.round(data.current.temp);
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    weatherDescription.textContent = stringFunctions.capitalize(
      data.current.weather[0].description
    );
    dataArr.forEach((datum) => {
      container.querySelector(`.data.${datum.varName} .value`).textContent =
        data.current[datum.varName] + datum.unit;
    });
  });

  return container;
})(); // TODO use class

export default currentWeather;
