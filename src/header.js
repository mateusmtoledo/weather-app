import SEARCH_ICON from './icons/search.svg';

const searchBar = (() => {
  const container = document.createElement('div');
  container.classList.add('search-container');
  const searchLabel = document.createElement('label');
  searchLabel.setAttribute('for', 'search-input');
  const searchIcon = document.createElement('img');
  searchIcon.src = SEARCH_ICON;
  searchIcon.classList.add('icon');
  searchLabel.append(searchIcon);
  const searchInput = document.createElement('input');
  searchInput.id = 'search-input';
  searchInput.setAttribute('placeholder', 'Search');
  container.append(searchLabel, searchInput);
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
