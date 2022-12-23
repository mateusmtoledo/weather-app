import DOMUtils from '../../utils/DOMUtils';

export default class Loader {
  constructor() {
    this.element = Loader.generateLoaderElement();
  }

  show() {
    document.body.append(this.element);
  }

  remove() {
    this.element.remove();
  }

  static generateLoaderElement() {
    const loader = DOMUtils.createElement('div', {
      class: 'loader',
    });
    return DOMUtils.createElement(
      'div',
      {
        class: 'overlay',
      },
      loader
    );
  }
}
