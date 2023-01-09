import DOMUtils from '../../utils/DOMUtils';
import SEARCH_ICON from '../../icons/search.svg';

// TODO split view
export default class SearchBar {
  constructor(setCity) {
    this.element = SearchBar.generateSearchBarElement();
    this.element.addEventListener('submit', async (e) => {
      const searchInput = this.element.querySelector('input');
      e.preventDefault();
      if (!searchInput.value) return;
      await setCity(searchInput.value);
      searchInput.value = '';
    });
  }

  static generateSearchBarElement() {
    const searchIcon = DOMUtils.createElement('img', {
      src: SEARCH_ICON,
      class: 'icon',
    });
    const searchLabel = DOMUtils.createElement(
      'label',
      {
        for: 'search-input',
      },
      searchIcon
    );
    const searchInput = DOMUtils.createElement('input', {
      id: 'search-input',
      placeholder: 'City name',
    });
    const searchButton = DOMUtils.createElement(
      'button',
      {
        class: 'search-button',
      },
      'Go!'
    );
    const searchContainer = DOMUtils.createElement(
      'form',
      {
        class: 'search-bar',
      },
      searchLabel,
      searchInput,
      searchButton
    );

    return searchContainer;
  }
}
