import currentWeather from './currentWeather';

const mainSection = (() => {
  const main = document.createElement('main');
  main.append(currentWeather);

  return main;
})();

export default mainSection;
