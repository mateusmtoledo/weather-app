import header from './header';
import mainSection from './mainSection';
import pubSub from './pubSub';
import Api from './Api';

async function pageLoad() {
  document.body.append(header, mainSection);
  const weatherData = await Api.getWeatherByLocationName('london');
  pubSub.publish('newData', weatherData);
}

export default pageLoad;
