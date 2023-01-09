import DailyForecast from '../Forecast/DailyForecast';
import HourlyForecast from '../Forecast/HourlyForecast';

export default class TabSwitchButton extends HTMLButtonElement {
  tab: DailyForecast | HourlyForecast;

  constructor(
    tab: DailyForecast | HourlyForecast,
    switchTab: (
      newTab: DailyForecast | HourlyForecast,
      clickedButton: TabSwitchButton
    ) => void
  ) {
    super();
    this.classList.add('switch-tab-btn');
    this.tab = tab;
    this.textContent = this.tab.getAttribute('data-name');
    this.addEventListener('click', () => switchTab(this.tab, this));
  }
}

customElements.define('tab-switch-button', TabSwitchButton, {
  extends: 'button',
});
