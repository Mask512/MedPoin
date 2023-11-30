class UserForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set employee(list) {
    const optionSelect = this.querySelector('#user-id');
    const employeeList = list;

    employeeList.forEach((employee) => {
      const option = document.createElement('option');
      option.value = employee.id;
      option.text = employee.id;
      optionSelect.appendChild(option);
    });

    const inputName = this.querySelector('#user-name');

    optionSelect.addEventListener('change', () => {
      const selectedId = optionSelect.value;
      const selectedEmployee = employeeList.find(
        (employee) => employee.id === selectedId,
      );

      inputName.value = selectedEmployee ? selectedEmployee.name : '';
    });
  }

  render() {
    this.innerHTML = `
    <h3 class="text-3xl font-extrabold mb-4">Tambah User Baru</h3>
    <form class="flex flex-col gap-4 mb-12 rounded-md md:max-w-4xl md:flex-row">
        <div>
            <label for="user-id" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" >ID User</label>
            <select id="user-id" name="user_id" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" required>
                <option selected value="">Pilih</option>
            </select>
        </div>
        <div>
            <label for="user-name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Nama User</label>
            <input
            type="text"
            name="user_name"
            id="user-name"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
            value=""
            required=""
            readonly
            />
        </div>
        <div>
            <label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
        </div>
        <div>
            <label for="roles" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Roles</label>
            <select
                id="roles"
                name="roles"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
            >
                <option selected value="">Pilih</option>
                <option value="admin">Admin</option>
                <option value="dokter">Dokter</option>
                <option value="perawat">Perawat</option>
            </select>
        </div>            
        <div class="flex gap-2 self-end">
            <button
            type="reset"
            class="max-h-11 rounded-lg bg-red-500 px-5 py-3 text-center text-sm font-medium uppercase text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:hover:bg-gray-700 dark:focus:ring-blue-500 sm:w-fit"
            >
            Reset
            </button>
            <button
            type="submit"
            class="max-h-11 rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-medium uppercase text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:hover:bg-gray-700 dark:focus:ring-blue-500 sm:w-fit"
            >
            Tambahkan
            </button>
        </div>
    </form>
          `;
    this.querySelector('form').addEventListener(
      'submit',
      this._handleSubmit.bind(this),
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    const formElements = this.querySelectorAll('input , select');
    const formData = {};

    formElements.forEach((element) => {
      formData[element.name] = element.value;
    });

    console.log('Form Data:', formData);
  }
}

customElements.define('user-form', UserForm);
