import Api from './Api';
import App from './App';
import './style.css';

const app = new App();
document.body.append(app.element);
Api.getWeatherByLocationName('London');
