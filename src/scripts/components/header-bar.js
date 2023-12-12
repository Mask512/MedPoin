import './digital-clock';
import './toggle-darkmode';
import APP_CONFIG from '../configs/config';

const userName = localStorage.getItem('nama') || 'user';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden">
                <span class="sr-only">Open sidebar</span>
                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <a href="#" class="ml-2 flex md:mr-24">
                <img src="${APP_CONFIG.LOGO}" class="mr-3 h-8" alt="FlowBite Logo" />
                <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-gray-400 sm:text-2xl">${APP_CONFIG.NAME}</span>
              </a>
            </div>
            
            <div class="flex items-center">
              <div class="ml-3 flex items-center gap-4">
              <digital-clock class="hidden md:block font-semibold dark:text-gray-200"></digital-clock>
              <h3 class="dark:text-gray-200 font-bold">Hi , ${userName} !</h3>
              <toggle-darkmode></toggle-darkmode>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('header-navbar', Navbar);
