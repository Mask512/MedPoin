import showAlert from '../utils/show-alert';

class AppoinmentForm extends HTMLElement {
  static observedAttributes = ['data-rm', 'data-name'];

  set data(data) {
    this._doctor = data;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
        <form class="flex flex-col gap-4 rounded-md md:max-w-4xl md:flex-row">
          <div class="">
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
              disabled
            />
          </div>
          <div class="">
            <label
              for="nama-pasien"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >Nama Pasien</label
            >
            <input
              type="text"
              name="nama-pasien"
              id="nama-pasien"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              value=""
              required=""
              disabled=""
            />
          </div>
          <div class="">
            <label
              for="dokter"
              name="dokter"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >Dokter Tujuan</label
            >
            <select
              id="dokter"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected="">Pilih Dokter</option>
              ${this._getDoctorList(this._doctor)}
            </select>
          </div>
          <div class="self-end flex gap-2">
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
            Daftar
          </button>
          </div>
        </form>
      `;
  }

  _getDoctorList(doctors) {
    return doctors
      .map((doctor) => `<option value="${doctor.id}">${doctor.name}</option>`)
      .join('');
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

    if (
      !formData['no-rm']
      || !formData['nama-pasien']
      || formData.dokter === 'Pilih Dokter'
    ) {
      showAlert.toast(
        'Formulir tidak lengkap atau dokter tidak dipilih. Harap isi semua kolom dan pilih dokter.',
        { icon: 'warning' },
      );
      return;
    }

    console.log('Form Data:', formData);
  }

  attributeChangedCallback(name) {
    if (name === 'data-rm' || name === 'data-name') {
      const targetId = name === 'data-rm' ? 'no-rm' : 'nama-pasien';
      this.querySelector(`#${targetId}`).value = this.getAttribute(name);
    }
  }
}

customElements.define('appointment-form', AppoinmentForm);
