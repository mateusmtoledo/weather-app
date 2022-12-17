import SEARCH_ICON from './icons/search.svg';
import getWeatherData from './apiHandler';
import pubSub from './pubSub';
import DOMUtils from './utils/DOMUtils';

const searchBar = (() => {
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
    const weatherData = await getWeatherData(searchInput.value);
    pubSub.publish('newData', weatherData);
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
})();

const header = (() => {
  const h1 = DOMUtils.createElement('h1', {}, 'weather app');
  return DOMUtils.createElement('header', {}, h1, searchBar);
})();

export default header;
