/* eslint-disable import/no-unresolved */
import Datepicker from 'flowbite-datepicker/Datepicker';
import DATA from '../data/data';
import showAlert from '../utils/show-alert';
import generateNextRM from '../utils/generate-rm';

class RegistrationForm extends HTMLElement {
  static observedAttributes = ['rm-number'];

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    document.querySelectorAll('.datepicker').forEach((el) => {
      el.remove();
    });
  }

  render() {
    this.getPatientRMNumber();
    this.innerHTML = `
    <form class="mb-4 rounded-md p-4 ring-1 ring-gray-200 dark:ring-gray-700">
      <h3 class="mb-4 text-2xl underline underline-offset-8 font-semibold text-gray-800 dark:text-white">
        Registrasi Pasien Baru
      </h3>
      <div class="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            for="no_rm"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nomor Rekam Medis</label
          >
          <input
            type="text"
            name="no_rm"
            id="no_rm"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
            value=""
            required=""
            readonly
          />
        </div>
        <div>
          <label
            for="no_bpjs"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nomor BPJS</label
          >
          <input
            type="text"
            name="no_bpjs"
            id="no_bpjs"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            for="name"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nama Lengkap</label
          >
          <input
            type="text"
            name="name"
            id="name"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            for="no_ktp"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nomor KTP</label
          >
          <input
            type="text"
            name="no_ktp"
            id="no_ktp"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required=""
          />
        </div>
        
        <div>
          <label
            for="gol_darah"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Golongan Darah</label
          >
          <select
            id="gol_darah"
            name="gol_darah"
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

        <div class="flex gap-4">
          <div class="flex-grow">
            <label
              for="tempat_lahir"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >Tempat Lahir</label
            >
            <input
              type="text"
              name="tempat_lahir"
              id="tempat_lahir"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              for="tanggal_lahir"
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
                id="tanggal_lahir"
                name="tanggal_lahir"
                required
              />
            </div>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="alamat_lengkap"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Alamat Lengkap</label
          >
          <textarea
            name="alamat_lengkap"
            id="alamat_lengkap"
            rows="4"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
          ></textarea>
        </div>

        <div>
          <label
            for="jenis_kelamin"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Jenis Kelamin</label
          >
          <select
            id="jenis_kelamin"
            name="jenis_kelamin"
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
            for="status_perkawinan"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Status Perkawinan</label
          >
          <select
            id="status_perkawinan"
            name="status_perkawinan"
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
          <label for="no_hp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Handphone</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
              </div>
              <input type="text" id="no_hp" name="no_hp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0812345678" required>
          </div>
        </div>

        <div>
          <label
            for="nama_keluarga"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nama Keluarga / Penanggung Jawab</label
          >
          <input
            type="text"
            name="nama_keluarga"
            id="nama_keluarga"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required=""
          />
        </div>

        <div>
          <label for="no_hp_keluarga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Handphone Keluarga</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
              </div>
              <input type="text" id="no_hp_keluarga" name="no_hp_keluarga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0812345678" required>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-4">
        <button
          type="reset"
          class="uppercase flex-1 rounded-lg bg-red-500 px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:hover:bg-gray-700 dark:focus:ring-blue-500 sm:w-fit"
        >
          Reset
        </button>
        <button
          type="submit"
          class="uppercase flex-1 rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:hover:bg-gray-700 dark:focus:ring-blue-500 sm:w-fit"
        >
          Submit
        </button>
      </div>
    </form>
      `;
    const inputBirthDay = this.querySelector('#tanggal_lahir');
    if (!inputBirthDay.datepicker) {
      // eslint-disable-next-line no-new
      new Datepicker(inputBirthDay, {
        format: 'dd/mm/yyyy',
        language: 'id',
        title: 'Tanggal Lahir',
      });
    }
    this.addEventListeners();
  }

  addEventListeners() {
    const form = this.querySelector('form');
    form.addEventListener('submit', this._handleSubmit.bind(this));
  }

  async _handleSubmit(event) {
    event.preventDefault();
    const formData = {};
    const formElements = event.currentTarget.querySelectorAll(
      'input, select, textarea',
    );
    formElements.forEach((element) => {
      formData[element.name] = element.value;
    });

    try {
      const response = await DATA.registerPatient(formData);
      if (response.error) {
        throw new Error(response.message);
      }

      showAlert.success('Data berhasil ditambahkan');
      this.render();
    } catch (error) {
      showAlert.toast(error.message, { icon: 'warning' });
    }
  }

  clearInput() {
    const formElements = this.querySelectorAll('input, select, textarea');
    formElements.forEach((element) => {
      if (
        element.type === 'text'
        || element.type === 'textarea'
        || element.tagName === 'SELECT'
      ) {
        element.value = '';
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'rm-number') {
      this.querySelector('#no_rm').value = newValue;
    }
  }

  async getPatientRMNumber() {
    try {
      const response = await DATA.patientNumber();
      if (response.error) {
        throw new Error(response.message);
      }
      const lastRM = response.data.no_rm || 'RM-00000';
      const nextRM = generateNextRM(lastRM);
      this.setAttribute('rm-number', nextRM);
    } catch (error) {
      showAlert.error(error.message);
    }
  }
}

customElements.define('registration-form', RegistrationForm);
