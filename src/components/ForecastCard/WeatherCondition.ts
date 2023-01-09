import StringUtils from '../../utils/StringUtils';

export default class WeatherCondition extends HTMLDivElement {
  icon: HTMLImageElement;

  description: HTMLParagraphElement;

  // TODO fix data type
  constructor(data: any, iconSize = '64px') {
    super();
    this.classList.add('weather-condition');

    this.icon = document.createElement('img');
    this.icon.setAttribute('width', iconSize);
    this.icon.setAttribute('height', iconSize);

    this.description = document.createElement('p');
    this.description.classList.add('description');

    this.append(this.icon, this.description);
    this.update(data);
  }

  // TODO fix data type
  update(newData: any) {
    this.icon.src = `https://openweathermap.org/img/wn/${newData.icon}@2x.png`;
    this.description.textContent = StringUtils.capitalize(newData.description);
  }
}

customElements.define('weather-condition', WeatherCondition, {
  extends: 'div',
});
