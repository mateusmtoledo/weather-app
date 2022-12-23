import Main from './layout/Main';
import DOMUtils from './utils/DOMUtils';
import Header from './components/Header/Header';
import Api from './Api';

// TODO split view
export default class App {
  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.element = DOMUtils.createElement(
      'div',
      {
        class: 'app',
      },
      this.header.element,
      this.main.element
    );
  }

  async init() {
    await Api.getWeatherByLocationName('London');
    document.body.append(this.element);
  }
}
