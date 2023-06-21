import HomePage from '../pages/Home/HomePage';
import ContactPage from '../pages/Contact/ContactPage';
import PortfolioPage from '../pages/Portfolio/PortfolioPage';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/portfolio',
    component: PortfolioPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
];
