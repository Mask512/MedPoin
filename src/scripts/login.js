import 'flowbite';
import '../styles/main.css';
import './components/login-form';
import './views/dark-mode';
import showAlert from './utils/show-alert';
import { checkAuth } from './utils/authentication';

const urlParams = new URLSearchParams(window.location.search);
const fromLogout = urlParams.get('fromLogout');
const fromAuthentication = urlParams.get('auth');

const isAuthenticated = checkAuth();

if (isAuthenticated) {
  window.location.href = '/';
}

if (fromLogout) {
  showAlert.toast('Anda berhasil logout');
} else if (fromAuthentication) {
  showAlert.error('Anda harus login terlebih dahulu');
}
