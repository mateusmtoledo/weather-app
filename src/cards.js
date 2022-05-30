function cardDomNodeFactory(title, type) {
  const card = document.createElement('div');
  card.classList.add('card');
  const h3 = document.createElement('h3');
  h3.textContent = title;
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('data-container');
  const weatherCondition = document.createElement('div');
  weatherCondition.classList.add('weather-condition');
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('condition-container');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = 'http://openweathermap.org/img/wn/02d@2x.png';
  iconContainer.append(weatherIcon);
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = 'Few clouds';
  weatherCondition.append(iconContainer, weatherDescription);
  if (type === 'Daily') {
    const maxMin = document.createElement('div');
    maxMin.classList.add('temperature-maxmin');

    const maxDiv = document.createElement('div');
    maxDiv.classList.add('max');

    const max = document.createElement('p');

    const maxValue = document.createElement('span');
    maxValue.textContent = '21';
    maxValue.classList.add('value');

    const maxUnit = document.createElement('span');
    maxUnit.classList.add('unit');
    maxUnit.textContent = '°C';
    max.append(maxValue, maxUnit);

    const maxText = document.createElement('p');
    maxText.textContent = 'MAX';

    maxDiv.append(max, maxText);
    const minDiv = document.createElement('div');
    minDiv.classList.add('min');

    const min = document.createElement('p');

    const minValue = document.createElement('span');
    minValue.textContent = '15';
    minValue.classList.add('value');

    const minUnit = document.createElement('span');
    minUnit.classList.add('unit');
    minUnit.textContent = '°C';
    min.append(minValue, minUnit);

    const minText = document.createElement('p');
    minText.textContent = 'MIN';

    minDiv.append(min, minText);

    maxMin.append(maxDiv, minDiv);

    card.append(h3, weatherCondition, maxMin, dataContainer);
  } else card.append(h3, weatherCondition, dataContainer);
  return card;
}

class Card {
  constructor(title, type) {
    this.domNode = cardDomNodeFactory(title, type);
  }

  addInfo(infoObj) {
    const div = document.createElement('div');
    div.classList.add('data');
    const value = document.createElement('p');
    value.textContent = '--';
    const legend = document.createElement('div');
    legend.classList.add('description');
    const desc = document.createElement('p');
    desc.textContent = infoObj.name;
    const image = document.createElement('img');
    image.setAttribute('alt', infoObj.name);
    image.src = infoObj.icon;
    legend.append(image, desc);
    div.append(legend, value);
    this.domNode.querySelector('.data-container').append(div);
  }
}

export default Card;
