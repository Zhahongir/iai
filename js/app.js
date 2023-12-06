// Accardion
document.addEventListener('DOMContentLoaded', () => {
    const accordionsMenu = document.querySelectorAll('.faq__wrap__item');
  
    accordionsMenu.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.faq__wrap__item__control');
            const content = self.querySelector('.faq__wrap__item__content');
  
            self.classList.toggle('open');
  
            // если открыт аккордеон
            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
});


// Anchor
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__wrap__nav__list__item__link'),
    hamburger = document.querySelector('.header__wrap__content__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            document.body.style.overflowY = 'scroll';
        });
    });

});