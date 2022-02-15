import onWidth from '../listeners/onWidth';

export default function eventListeners() {
  window.addEventListener(`resize`, onWidth);
}
