import { jwtDecode } from 'jwt-decode';

function verifyAccessToken(accessToken) {
  const id = localStorage.getItem('id');
  if (id) {
    const decoded = jwtDecode(accessToken);
    return decoded.id === id;
  }
  return false;
}

function isAuthenticated() {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    return verifyAccessToken(accessToken);
  }
  return false;
}

function checkAuth() {
  return isAuthenticated();
}

function redirectToLogin() {
  window.location.href = '/login.html?auth=false';
}

function checkAuthAndRedirect() {
  if (!checkAuth()) {
    redirectToLogin();
  }
  return isAuthenticated();
}

export { checkAuth, checkAuthAndRedirect };
