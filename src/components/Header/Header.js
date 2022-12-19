import DOMUtils from '../../utils/DOMUtils';
import SearchBar from './SearchBar';

// TODO split view
export default class Header {
  constructor() {
    this.searchBar = new SearchBar();
    this.element = this.generateHeaderElement();
  }

  generateHeaderElement() {
    const h1 = DOMUtils.createElement('h1', {}, 'weather app');
    return DOMUtils.createElement('header', {}, h1, this.searchBar.element);
  }
}
