import DATA from '../data/data';
import menuList from '../views/menu-list';

class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
    <aside id="logo-sidebar" class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full pt-20 overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
      ${this._getMenuList()}
        <li class="absolute bottom-4">
          <a id="logout" href="/login.html" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <svg class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
            </svg>
            <span class="ml-3 flex-1 whitespace-nowrap">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
    `;
  }

  _getMenuList() {
    return menuList
      .map(
        (menu) => `
        <li class="menu-item group">
          <a href=#${menu.link} class="group flex items-start gap-4 rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <span class="material-symbols-outlined h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white group-[.active]:text-gray-900 dark:group-[.active]:text-white" aria-hidden="true">${menu.icon}</span>
            <span>${menu.title}</span>
          </a>
        </li>
      `,
      )
      .join('');
  }

  addEventListeners() {
    const menuItems = this.querySelectorAll('.menu-item');

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', () => {
        this._handleMenuItemClick(menuItem);
      });
    });

    const logoutButton = this.querySelector('#logout');

    if (logoutButton) {
      logoutButton.addEventListener('click', this._handleLogout.bind(this));
    }
  }

  _handleMenuItemClick(clickedItem) {
    const activeItem = this.querySelector('.menu-item.active');

    if (activeItem) {
      activeItem.classList.remove('active');
    }

    clickedItem.classList.add('active');
  }

  async _handleLogout(e) {
    e.preventDefault();
    const { error } = await DATA.signOut();
    if (!error || error === 'Unauthorized') {
      localStorage.clear();
      window.location.href = '/login.html?fromLogout=true';
    }
  }
}

customElements.define('side-bar', SideBar);
