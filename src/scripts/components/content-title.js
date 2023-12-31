import menuList from '../views/menu-list';

class ContentTitle extends HTMLElement {
  static observedAttributes = ['data-link'];

  connectedCallback() {
    this.render();
  }

  render() {
    const linkValue = this.getAttribute('data-link');
    const menuItem = menuList.find((menu) => menu.title === linkValue) || '';

    this.innerHTML = `
        <nav class="inline-flex px-3 py-3 rounded-md text-gray-700 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
          <span class="material-symbols-outlined h-5 w-5 flex-shrink-0 text-gray-700 transition duration-75 group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white" aria-hidden="true">${menuItem.icon}</span>
          <a href="/#${menuItem.link}" class="text-gray-700 mx-4 font-semibold underline underline-offset-2 text-lg dark:text-gray-200">${menuItem.title}</a>
        </nav>
      `;
  }

  attributeChangedCallback(name) {
    if (name === 'data-link') {
      this.render();
    }
  }
}

customElements.define('content-title', ContentTitle);
