import './sass/main.scss';
import { refs } from './js/base/refs';
import eventListeners from './js/base/eventListeners';

function start() {
  eventListeners();
  pageSizeWidth();
}

start();

function pageSizeWidth() {
  if (window.screen.width >= 768) {
    refs.nameMain.classList.remove('hidden');
    refs.nameSidebar.classList.add('hidden');
    return;
  }
  refs.nameMain.classList.add('hidden');
  refs.nameSidebar.classList.remove('hidden');
}
