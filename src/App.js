import Main from './layout/Main';
import DOMUtils from './utils/DOMUtils';
import Header from './components/Header/Header';
import Api from './Api';

// TODO split view
export default class App {
  constructor() {
    this.setCity = this.setCity.bind(this);
    this.header = new Header(this.setCity);
    this.main = null;
    this.element = DOMUtils.createElement(
      'div',
      {
        class: 'app',
      },
      this.header.element
    );
  }

  async init() {
    await this.setCity('London');
    document.body.append(this.element);
  }

  async setCity(city) {
    const data = await Api.getWeatherByLocationName(city);
    if (!this.main) {
      this.main = new Main(data);
      this.element.append(this.main.element);
    } else this.main.update(data);
  }
}
