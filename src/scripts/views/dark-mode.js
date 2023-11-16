const storedTheme = localStorage.getItem('color-theme');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (storedTheme === 'dark' || (!storedTheme && prefersDarkMode)) {
  document.documentElement.classList.add('dark');
}
