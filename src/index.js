import { IconAngleDown } from './icons/IconAngleDown';
import { IconAngleLeft } from './icons/IconAngleLeft';
import { IconAngleRight } from './icons/IconAngleRight';
import { IconAngleUp } from './icons/IconAngleUp';
import { IconBars } from './icons/IconBars';
import { IconClose } from './icons/IconClose';
import { IconGithub } from './icons/IconGithub';
import { IconLinkedin } from './icons/IconLinkedin';

export const defineIconAngleDown = () =>
  customElements.define('icon-angle-down', IconAngleDown);
export const defineIconAngleLeft = () =>
  customElements.define('icon-angle-left', IconAngleLeft);
export const defineIconAngleRight = () =>
  customElements.define('icon-angle-right', IconAngleRight);
export const defineIconAngleUp = () =>
  customElements.define('icon-angle-up', IconAngleUp);
export const defineIconBars = () =>
  customElements.define('icon-bars', IconBars);
export const defineIconClose = () =>
  customElements.define('icon-close', IconClose);
export const defineIconGithub = () =>
  customElements.define('icon-github', IconGithub);
export const defineIconLinkedin = () =>
  customElements.define('icon-linkedin', IconLinkedin);

export const defineAllIcons = () => {
  customElements.define('icon-angle-down', IconAngleDown);
  customElements.define('icon-angle-left', IconAngleLeft);
  customElements.define('icon-angle-right', IconAngleRight);
  customElements.define('icon-angle-up', IconAngleUp);
  customElements.define('icon-bars', IconBars);
  customElements.define('icon-close', IconClose);
  customElements.define('icon-github', IconGithub);
  customElements.define('icon-linkedin', IconLinkedin);
};

export const defineCustomIcon = (name, className) => {
  customElements.define(name, className);
};
