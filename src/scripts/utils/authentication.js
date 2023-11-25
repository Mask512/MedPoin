function checkAuthAndRedirect() {
  const user = localStorage.getItem('username');
  if (!user) {
    window.location.href = '/login.html?auth=false';
  }
  return !!user;
}

function checkAuth() {
  const user = localStorage.getItem('username');
  return !!user;
}

export { checkAuth, checkAuthAndRedirect };
