'use strict';

const burgerButton = document.querySelector('.site-header__burger');
const mobileMenu = document.querySelector('.site-header__mobile');

const closeMenu = () => {
  if (!burgerButton || !mobileMenu) return;
  burgerButton.classList.remove('is-active');
  burgerButton.setAttribute('aria-expanded', 'false');
  burgerButton.setAttribute('aria-label', 'Открыть меню');
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-menu-open');
};

const openMenu = () => {
  if (!burgerButton || !mobileMenu) return;
  burgerButton.classList.add('is-active');
  burgerButton.setAttribute('aria-expanded', 'true');
  burgerButton.setAttribute('aria-label', 'Закрыть меню');
  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-menu-open');
};

if (burgerButton && mobileMenu) {
  burgerButton.addEventListener('click', () => {
    const isOpen = burgerButton.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const isOpen = burgerButton.getAttribute('aria-expanded') === 'true';
    if (!isOpen) return;
    const target = event.target;
    if (!mobileMenu.contains(target) && !burgerButton.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}
