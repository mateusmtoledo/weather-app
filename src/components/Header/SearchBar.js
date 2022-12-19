import Api from '../../Api';
import DOMUtils from '../../utils/DOMUtils';
import SEARCH_ICON from '../../icons/search.svg';

// TODO split view
export default class SearchBar {
  constructor() {
    this.element = SearchBar.generateSearchBarElement();
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

    searchButton.addEventListener('click', async () => {
      if (!searchInput.value) return;
      Api.getWeatherByLocationName(searchInput.value);
    });

    return DOMUtils.createElement(
      'div',
      {
        class: 'search-bar',
      },
      searchLabel,
      searchInput,
      searchButton
    );
  }
}
