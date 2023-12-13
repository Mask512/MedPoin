import '../styles/main.css';
import 'flowbite';
import './components/toggle-darkmode';
import './components/header-bar';
import './components/side-bar';
import './components/content-title';
import './views/dark-mode';
import { checkAuthAndRedirect } from './utils/authentication';
import swRegister from './utils/sw-register';
import App from './views/app';

const contentTitle = document.querySelector('content-title');
const mainContent = document.querySelector('#main-content');
const app = new App(contentTitle, mainContent);

function handlePageChange() {
  const isAuthenticated = checkAuthAndRedirect();
  if (isAuthenticated) {
    app.renderPage();
  }
}

window.addEventListener('hashchange', handlePageChange);
window.addEventListener('load', () => {
  handlePageChange();
  swRegister();
});
