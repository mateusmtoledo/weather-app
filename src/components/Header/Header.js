import DOMUtils from '../../utils/DOMUtils';
import SearchBar from '../SearchBar/SearchBar';
import LOGO_IMG from '../../img/logo.svg';

// TODO split view
export default class Header {
  constructor(setCity) {
    this.searchBar = new SearchBar(setCity);
    this.element = this.generateHeaderElement();
  }

  generateHeaderElement() {
    const h1 = DOMUtils.createElement(
      'h1',
      {
        class: 'logo-desktop',
      },
      'weather app'
    );
    const logo = DOMUtils.createElement('img', {
      class: 'logo-mobile',
      width: '36px',
      height: 'auto',
      src: LOGO_IMG,
      alt: 'weather app',
    });
    const logoContainer = DOMUtils.createElement(
      'div',
      {
        class: 'logo-container',
      },
      logo,
      h1
    );
    return DOMUtils.createElement(
      'header',
      {},
      logoContainer,
      this.searchBar.element
    );
  }
}
