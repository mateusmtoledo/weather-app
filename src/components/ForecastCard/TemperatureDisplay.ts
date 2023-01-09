export default class TemperatureDisplay extends HTMLDivElement {
  value: HTMLSpanElement;

  constructor(label: string, initialValue: number) {
    super();
    this.classList.add(`${label}-temperature`);
    this.value = document.createElement('span');
    this.value.classList.add('value');
    const unit = document.createElement('span');
    unit.classList.add('unit');
    unit.textContent = '°C';
    this.update(initialValue);
    this.append(this.value, unit);
  }

  update(newValue: number) {
    const roundedValue = Math.round(newValue);
    this.value.textContent = roundedValue.toString();
  }
}

customElements.define('temperature-display', TemperatureDisplay, {
  extends: 'div',
});
