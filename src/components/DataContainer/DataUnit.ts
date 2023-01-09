export default class DataUnit extends HTMLDivElement {
  value: HTMLSpanElement;

  // TODO fix data type
  constructor(labelName: string, dataUnit: string, data: any, icon?: string) {
    super();
    this.classList.add('data');

    const description = document.createElement('div');
    description.classList.add('description');

    if (icon) {
      const img = document.createElement('img');
      img.src = icon;
      description.append(img);
    }

    const label = document.createElement('p');
    label.classList.add('data-name'); // TODO naming
    label.textContent = labelName;
    description.append(label);

    this.value = document.createElement('span');
    this.value.classList.add('value');
    const unit = document.createElement('span');
    unit.classList.add('unit');
    unit.textContent = dataUnit;
    const valueContainer = document.createElement('div');
    valueContainer.append(this.value, unit);

    this.append(description, valueContainer);

    this.value.textContent = data;
  }
}

customElements.define('data-unit', DataUnit, { extends: 'div' });
