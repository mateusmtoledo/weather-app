import SEARCH_ICON from '../../icons/search.svg';

export default class SearchBar extends HTMLFormElement {
  constructor(setCity: (city: string) => void) {
    super();
    this.classList.add('search-bar');

    const searchIcon = document.createElement('img');
    searchIcon.classList.add('icon');
    searchIcon.src = SEARCH_ICON;

    const searchLabel = document.createElement('label');
    searchLabel.setAttribute('for', 'search-input');
    searchLabel.append(searchIcon);

    const searchInput = document.createElement('input');
    searchInput.id = 'search-input';
    searchInput.placeholder = 'City name';

    const searchButton = document.createElement('button');
    searchButton.classList.add('search-button');
    searchButton.textContent = 'Submit';

    this.append(searchLabel, searchInput, searchButton);

    this.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!searchInput.value) return;
      setCity(searchInput.value);
      searchInput.value = '';
    });
  }
}

customElements.define('search-bar', SearchBar, { extends: 'form' });
