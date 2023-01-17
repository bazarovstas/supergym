const buttons = document.querySelectorAll('[data-tabnav]');
const tabs = document.querySelectorAll('[data-tab]');

export const initTabs = () => {

  tabs.forEach((tab, i) => {
    if (i !== 0) {
      tab.style.display = 'none';
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {

      buttons.forEach((item) => item.classList.remove('is-active'));

      tabs.forEach((tab) => {
        tab.style.display = 'none';

        if (button.dataset.tabnav === tab.dataset.tab) {
          button.classList.add('is-active');
          tab.style.display = 'block';
        }
      });
    });
  });
};
