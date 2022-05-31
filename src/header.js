import SEARCH_ICON from './icons/search.svg';
import getWeatherData from './apiHandler';
import pubSub from './pubSub';

const searchBar = (() => {
  const container = document.createElement('div');
  container.classList.add('search-bar');
  const searchLabel = document.createElement('label');
  searchLabel.setAttribute('for', 'search-input');
  const searchIcon = document.createElement('img');
  searchIcon.src = SEARCH_ICON;
  searchIcon.classList.add('icon');
  searchLabel.append(searchIcon);
  const searchInput = document.createElement('input');
  searchInput.id = 'search-input';
  searchInput.setAttribute('placeholder', 'City name');
  const searchButton = document.createElement('button');
  searchButton.classList.add('search-button');
  searchButton.textContent = 'Go!';
  searchButton.addEventListener('click', async () => {
    if (!searchInput.value) return;
    const weatherData = await getWeatherData(searchInput.value);
    pubSub.publish('newData', weatherData);
  });
  container.append(searchLabel, searchInput, searchButton);
  return container;
})();

const header = (() => {
  const container = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'weather app';
  container.append(h1, searchBar);
  return container;
})();

export default header;
