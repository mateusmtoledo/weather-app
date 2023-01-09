import { DataType } from '../../data';
import DataUnit from './DataUnit';

export default class DataContainer extends HTMLDivElement {
  dataUnits: Array<DataUnit>;

  displayedData: Array<DataType>;

  includeIcon: boolean;

  // TODO fix data type
  constructor(displayedData: Array<DataType>, data: any, includeIcon = false) {
    super();
    this.displayedData = displayedData;
    this.includeIcon = includeIcon;
    this.dataUnits = [];
    this.classList.add('data-container');
    this.update(data);
  }

  // TODO fix data type
  update(newData: any) {
    if (this.dataUnits) {
      this.dataUnits.forEach((dataUnit) => dataUnit.remove());
    }
    this.dataUnits = this.displayedData.map(
      (datum) =>
        new DataUnit(
          datum.title,
          datum.unit,
          newData[datum.varName],
          this.includeIcon ? datum.icon : undefined
        )
    );
    this.append(...this.dataUnits);
  }
}

customElements.define('data-container', DataContainer, { extends: 'div' });
