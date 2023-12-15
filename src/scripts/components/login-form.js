import './toggle-darkmode';
import './loading-spinner';
import APP from '../configs/config';
import DATA from '../data/data';
import showAlert from '../utils/show-alert';

class LoginForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.getTemplate();

    const form = this.querySelector('#login-form');
    form.addEventListener('submit', this.handleFormSubmit.bind(this));
  }

  getTemplate() {
    return `
      <section class="bg-gray-50 dark:bg-gray-900 w-full">
        <toggle-darkmode class="sticky top-0 p-4"></toggle-darkmode>
        <div class="flex flex-col items-center h-[calc(100vh-3rem)] justify-center px-6 py-8 mx-auto lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div class="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="${APP.LOGO}" alt="logo"/>
                ${APP.NAME}
              </div>
              <form class="space-y-4 md:space-y-6" id="login-form">
                <div>
                  <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID Pengguna</label>
                  <input type="text" name="text" id="id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required/>
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <button type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign in
                <loading-spinner></loading-spinner>
                </button>
              
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const id = this.querySelector('#id').value;
    const password = this.querySelector('#password').value;
    this._submitForm(id, password);
    this._showLoading();
  }

  async _submitForm(formId, password) {
    try {
      const response = await DATA.signIn(formId, password);

      if (!response.error) {
        const { data } = response;
        Object.keys(data)
          .forEach((key) => localStorage.setItem(key, data[key]));
        window.location.href = '/';
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      showAlert.toast(`Login Failed | ${error.message}`, { icon: 'error' });
    } finally {
      this._removeLoading();
    }
  }

  _showLoading() {
    const loading = this.querySelector('loading-spinner');
    loading.setAttribute('show', '');
    loading.removeAttribute('hidden');
  }

  _removeLoading() {
    const loading = this.querySelector('loading-spinner');
    loading.setAttribute('hidden', '');
    loading.removeAttribute('show');
  }
}

customElements.define('login-form', LoginForm);
