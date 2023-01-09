import DailyForecast from '../Forecast/DailyForecast';
import HourlyForecast from '../Forecast/HourlyForecast';
import TabSwitchButton from './TabSwitchButton';

export default class ForecastContainer extends HTMLDivElement {
  dailyForecast: DailyForecast;

  hourlyForecast: HourlyForecast;

  active: DailyForecast | HourlyForecast;

  buttonsContainer: HTMLDivElement;

  tabSwitchButtons: Array<TabSwitchButton>;

  // TODO fix data type
  constructor(data: any) {
    super();
    this.classList.add('forecast-container');
    this.switchTab = this.switchTab.bind(this);

    this.dailyForecast = new DailyForecast(data.daily);
    this.hourlyForecast = new HourlyForecast(data.hourly);
    this.tabSwitchButtons = [
      new TabSwitchButton(this.dailyForecast, this.switchTab),
      new TabSwitchButton(this.hourlyForecast, this.switchTab),
    ];
    this.buttonsContainer = document.createElement('div');
    this.buttonsContainer.classList.add('buttons-container');
    this.buttonsContainer.append(...this.tabSwitchButtons);
    this.active = this.dailyForecast;
    this.tabSwitchButtons[0].classList.add('active');
    this.append(this.buttonsContainer, this.active);
  }

  switchTab(
    newTab: DailyForecast | HourlyForecast,
    clickedButton: TabSwitchButton
  ) {
    if (this.active === newTab) return;
    this.tabSwitchButtons.forEach((button) =>
      button.classList.remove('active')
    );
    clickedButton.classList.add('active');
    this.removeChild(this.active);
    this.append(newTab);
    this.active = newTab;
  }

  // TODO fix data type
  update(newData: any) {
    this.dailyForecast.update(newData.daily);
    this.hourlyForecast.update(newData.hourly);
  }
}

customElements.define('forecast-container', ForecastContainer, {
  extends: 'div',
});
