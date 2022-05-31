import header from './header';
import mainSection from './mainSection';
import pubSub from './pubSub';
import getWeatherData from './apiHandler';

async function pageLoad() {
  document.body.append(header, mainSection);
  const weatherData = await getWeatherData('london');
  pubSub.publish('newData', weatherData);
}

export default pageLoad;
