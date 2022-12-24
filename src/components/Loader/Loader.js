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
    const cloudPieces = new Array(3).fill().map(() =>
      DOMUtils.createElement('div', {
        class: 'cloud',
      })
    );
    const cloudContainer = DOMUtils.createElement(
      'div',
      {
        class: 'cloud-container',
      },
      ...cloudPieces
    );
    return DOMUtils.createElement(
      'div',
      {
        class: 'overlay',
      },
      cloudContainer
    );
  }
}
