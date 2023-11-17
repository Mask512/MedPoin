import menuList from '../views/menu-list';

class ContentTitle extends HTMLElement {
  static observedAttributes = ['data-link'];

  connectedCallback() {
    this.render();
  }

  render() {
    const linkValue = this.getAttribute('data-link');
    const menuItem = menuList.find((menu) => menu.item === linkValue);

    this.innerHTML = `
        <nav class="flex px-5 py-3 text-gray-700  bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
          <span class="material-symbols-outlined h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true">${menuItem.icon}</span>
          <span class="ml-4 text-gray-700 font-semibold text-lg dark:text-gray-200">${menuItem.item}</span>
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
