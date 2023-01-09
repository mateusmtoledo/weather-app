import SearchBar from '../SearchBar/SearchBar';
import LOGO_IMG from '../../img/logo.svg';

export default class Header extends HTMLElement {
  searchBar: SearchBar;

  constructor(setCity: (city: string) => void) {
    super();

    this.searchBar = new SearchBar(setCity);

    const h1 = document.createElement('h1');
    h1.classList.add('logo-desktop');
    h1.textContent = 'weather app';

    const logo = document.createElement('img');
    logo.src = LOGO_IMG;
    logo.classList.add('logo-mobile');
    logo.setAttribute('width', '36px');
    logo.alt = 'weather app';

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    logoContainer.append(logo, h1);

    this.append(logoContainer, this.searchBar);
  }
}

customElements.define('header-component', Header, { extends: 'header' });
