import { refs } from '../base/refs';

export default function onWidth(e) {
  // console.log(e.target.outerWidth);
  //   console.log(refs.nameMain);
  //   console.log(refs.nameSidebar);

  if (e.target.outerWidth >= 768) {
    refs.nameMain.classList.remove('hidden');
    refs.nameSidebar.classList.add('hidden');
    return;
  }

  refs.nameMain.classList.add('hidden');
  refs.nameSidebar.classList.remove('hidden');
}
