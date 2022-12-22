import DOMUtils from '../../utils/DOMUtils';
import SearchBar from '../SearchBar/SearchBar';
import LOGO_ICON from '../../icons/logo.svg';

// TODO split view
export default class Header {
  constructor() {
    this.searchBar = new SearchBar();
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
      src: LOGO_ICON,
      alt: 'weather app',
    });
    return DOMUtils.createElement(
      'header',
      {},
      h1,
      logo,
      this.searchBar.element
    );
  }
}
