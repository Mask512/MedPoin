import '../styles/main.css';
import 'flowbite';
import './components/toggle-darkmode';
import './components/header-bar';
import './components/side-bar';
import './components/content-title';
import './views/dark-mode';
import App from './views/app';

const contentTitle = document.querySelector('content-title');
const mainContent = document.querySelector('#main-content');

const app = new App(contentTitle, mainContent);

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
