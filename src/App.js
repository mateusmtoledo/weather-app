import Main from './layout/Main';
import DOMUtils from './utils/DOMUtils';
import Header from './components/Header/Header';

// TODO split view
export default class App {
  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.element = DOMUtils.createElement(
      'div',
      {},
      this.header.element,
      this.main.element
    );
  }
}
