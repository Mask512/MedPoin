class NurseForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h3 class="text-3xl font-extrabold mb-4">Tambah Perawat Baru</h3>
    <form class="flex flex-col gap-4 rounded-md md:max-w-4xl md:flex-row">
      <div>
        <label for="nurse-id" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">ID Perawat</label>
        <input
          type="text"
          name="nurse_id"
          id="nurse-id"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder=""
          value=""
          required=""
        />
      </div>
      <div>
        <label
          for="nurse-name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Nama Perawat
        </label>
        <input
          type="text"
          name="nurse_name"
          id="nurse-name"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder=""
          value=""
          required=""
        />
      </div>
      <div class="flex gap-2 self-end">
        <button type="reset" class="max-h-11 rounded-lg bg-red-500 px-5 py-3 text-center text-sm font-medium uppercase text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:hover:bg-gray-700 dark:focus:ring-blue-500 sm:w-fit">
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
    const formElements = this.querySelectorAll('input');
    const formData = {};

    formElements.forEach((element) => {
      formData[element.name] = element.value;
    });

    console.log('Form Data:', formData);
  }
}

customElements.define('nurse-form', NurseForm);
