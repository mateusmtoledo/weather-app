import Main from './layout/Main';
import Header from './components/Header/Header';
import Api from './Api';

export default class App extends HTMLDivElement {
  main: Main | null;

  header: Header;

  constructor() {
    super();
    this.classList.add('app');

    this.setCity = this.setCity.bind(this);
    this.header = new Header(this.setCity);
    this.main = null;
    this.append(this.header);
  }

  async init() {
    await this.setCity('London');
    document.body.append(this);
  }

  async setCity(city: string) {
    const data = await Api.getWeatherByLocationName(city);
    if (!this.main) {
      this.main = new Main(data);
      this.append(this.main);
    } else this.main.update(data);
  }
}

customElements.define('app-component', App, { extends: 'div' });
