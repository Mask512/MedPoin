class AnamnesisForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  set form(data) {
    this.querySelector('#nama').value = data.nama;
    this.querySelector('#no-rm').value = data.noRM;
    this.querySelector('#no-rawat').value = data.noRawat;
    this.querySelector('#dokter').value = data.dokter;
  }

  render() {
    this.innerHTML = `
      <div class="relative h-full w-full max-w-5xl md:h-auto">
        <div class="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div class="mb-4 flex items-center justify-between rounded-t border-b pb-2 dark:border-gray-600 sm:mb-5">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Form Anamnesis</h3>
            ${this.renderCloseButton()}          
          </div>
          <form class="mb-4 rounded-md">
            <div class="mb-4 grid gap-4 sm:grid-cols-2">
              ${this.renderFormInput()}
            </div>
          </form>              
        </div>
      </div>
      `;
  }

  renderCloseButton() {
    return `
      <button id="closeModal" type="button" class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close modal</span>
      </button>`;
  }

  renderFormInput() {
    return `
    <div>
      <label
        for="nama"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Nama Pasien</label
      >
      <input
        type="text"
        name="nama"
        id="nama"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
        disabled=""
      />
    </div>
    <div>
      <label
        for="no-rm"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Nomor Rekam Medis</label
      >
      <input
        type="text"
        name="no-rm"
        id="no-rm"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
        disabled=""
      />
    </div>
    <div>
      <label
        for="no-rawat"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Nomor Rawat</label
      >
      <input
        type="text"
        name="no-rawat"
        id="no-rawat"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
        disabled=""
      />
    </div>
    <div>
      <label
        for="dokter"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Dokter</label
      >
      <input
        type="text"
        name="dokter"
        id="dokter"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
        disabled=""
      />
    </div>
    <div>
      <label
        for="perawat"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Perawat</label
      >
      <select
        id="perawat"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option selected="">Pilih</option>
        <option value="1">Perawat A</option>
        <option value="2">Perawat B</option>
        <option value="3">Perawat C</option>
        <option value="4">Perawat D</option>
      </select>
    </div>
    <div>
      <label
        for="berat"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Berat Badan</label
      >
      <input
        type="text"
        name="berat"
        id="berat"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
      />
    </div>
    <div>
      <label
        for="tinggi"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Tinggi Badan</label
      >
      <input
        type="text"
        name="tinggi"
        id="tinggi"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
      />
    </div>
    <div>
      <label
        for="tensi"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Tensi Darah</label
      >
      <input
        type="text"
        name="tensi"
        id="tensi"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
      />
    </div>
    <div>
      <label
        for="saturasi"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Saturasi Oksigen</label
      >
      <input
        type="text"
        name="saturasi"
        id="saturasi"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
      />
    </div>
    <div>
      <label
        for="suhu"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Suhu Badan</label
      >
      <input
        type="text"
        name="suhu"
        id="suhu"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        value=""
        required=""
      />
    </div>
    <div class="flex flex-wrap gap-4 sm:col-span-2">
        <button
          type="submit"
          class="uppercase flex-1 rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:hover:bg-gray-700 dark:focus:ring-blue-500 sm:w-fit"
        >
          Submit
        </button>
        <button
          type="reset"
          class="uppercase flex-1 rounded-lg bg-green-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:hover:bg-gray-700 dark:focus:ring-blue-500 sm:w-fit"
        >
          Reset
        </button>
    </div>
    `;
  }

  addEventListeners() {
    const form = this.querySelector('form');
    form.addEventListener('submit', this._handleSubmit.bind(this));
  }

  _handleSubmit(event) {
    event.preventDefault();
    const formElements = this.querySelectorAll('input, select, textarea');
    const formData = {};

    formElements.forEach((element) => {
      formData[element.id] = element.value;
    });

    console.log('Form Data:', formData);
  }
}

customElements.define('anamnesis-form', AnamnesisForm);
