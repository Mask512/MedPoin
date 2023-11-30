/* eslint-disable import/no-unresolved */
import Datepicker from 'flowbite-datepicker/Datepicker';

const lastRMNumber = 2;

class RegistrationForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  disconnectedCallback() {
    document.querySelectorAll('.datepicker').forEach((el) => {
      el.remove();
    });
  }

  render() {
    this.innerHTML = `
    <form class="mb-4 rounded-md p-4 ring-1 ring-gray-400">
      <h3 class="mb-4 text-2xl underline underline-offset-8 font-semibold text-gray-800 dark:text-white">
        Registrasi Pasien Baru
      </h3>
      <div class="mb-4 grid gap-4 sm:grid-cols-2">
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
            placeholder=00000${lastRMNumber}
            value=00000${lastRMNumber}
            required=""
            disabled=""
          />
        </div>
        <div>
          <label
            for="no-ktp"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nomor KTP</label
          >
          <input
            type="text"
            name="no-ktp"
            id="no-ktp"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            for="nama-lengkap"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nama Lengkap</label
          >
          <input
            type="text"
            name="nama-lengkap"
            id="nama-lengkap"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            for="golongan-darah"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Golongan Darah</label
          >
          <select
            id="golongan-darah"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          >
            <option selected value="">Pilih</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>
        </div>

        <div>
          <label
            for="tempat-lahir"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Tempat Lahir</label
          >
          <input
            type="text"
            name="tempat-lahir"
            id="tempat-lahir"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            for="tanggal-lahir"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Tanggal Lahir</label
          >
          <div class="relative max-w-sm">
            <div
              class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5"
            >
              <svg
                class="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            <input
              datepicker
              type="text"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="DD/MM/YYYY"
              id="tanggal-lahir"
              name="tanggal-lahir"
              required
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="alamat-lengkap"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Alamat Lengkap</label
          >
          <textarea
            name="alamat-lengkap"
            id="alamat-lengkap"
            rows="4"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
          ></textarea>
        </div>

        <div>
          <label
            for="jenis-kelamin"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Jenis Kelamin</label
          >
          <select
            id="jenis-kelamin"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          >
            <option selected value="">Pilih</option>
            <option value="L">Laki-Laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>

        <div>
          <label
            for="status-perkawinan"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Status Perkawinan</label
          >
          <select
            id="status-perkawinan"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          >
            <option selected value="">Pilih</option>
            <option value="Single">Single</option>
            <option value="Menikah">Menikah</option>
            <option value="Cerai">Cerai</option>
          </select>
        </div>

        <div>
          <label for="nomor-hp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Handphone</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
              </div>
              <input type="text" id="nomor-hp" name="nomor_hp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0812345678" required>
          </div>
        </div>

        <div>
          <label
            for="nama-keluarga"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nama Keluarga / Penanggung Jawab</label
          >
          <input
            type="text"
            name="nama-keluarga"
            id="nama-keluarga"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required=""
          />
        </div>

        <div>
          <label for="nomor-hp-keluarga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Handphone Keluarga</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
              </div>
              <input type="text" id="nomor-hp-keluarga" name="nomor_hp_keluarga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0812345678" required>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-4">
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
    </form>
      `;
    const tanggalLahirInput = this.querySelector('#tanggal-lahir');
    if (!tanggalLahirInput.datepicker) {
      // eslint-disable-next-line no-new
      new Datepicker(tanggalLahirInput, {
        format: 'dd/mm/yyyy',
        language: 'id',
        title: 'Tanggal Lahir',
      });
    }
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
      formData[element.name] = element.value;
    });

    console.log('Form Data:', formData);
  }
}

customElements.define('registration-form', RegistrationForm);
