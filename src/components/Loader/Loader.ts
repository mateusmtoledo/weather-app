export default class Loader extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add('overlay');
    const cloudPieces = new Array(3).fill(null).map(() => {
      const piece = document.createElement('div');
      piece.classList.add('cloud');
      return piece;
    });
    const cloudContainer = document.createElement('div');
    cloudContainer.classList.add('cloud-container');
    cloudContainer.append(...cloudPieces);
    this.append(cloudContainer);
  }

  show() {
    document.body.append(this);
  }
}

customElements.define('loader-component', Loader, { extends: 'div' });
