import header from '../header';
import main from '../main';
import DOMUtils from '../utils/DOMUtils';

export default class App {
  constructor() {
    this.header = header;
    this.main = main;
    this.element = DOMUtils.createElement('div', {}, this.header, this.main);
  }
}
