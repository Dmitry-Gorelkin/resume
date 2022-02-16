import { refs } from '../base/refs';

export default function onWidth(e) {
  if (e.target.outerWidth >= 768) {
    refs.nameMain.classList.remove('hidden');
    refs.nameSidebar.classList.add('hidden');
    refs.languageSidebar.classList.remove('hidden');
    refs.hobbySidebar.classList.remove('hidden');
    return;
  }

  refs.nameMain.classList.add('hidden');
  refs.nameSidebar.classList.remove('hidden');
  refs.languageSidebar.classList.add('hidden');
  refs.hobbySidebar.classList.add('hidden');
}
