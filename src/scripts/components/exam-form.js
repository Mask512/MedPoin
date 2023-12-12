import { initFlowbite } from 'flowbite';
import './icd9-table';
import './icd10-table';
import showAlert from '../utils/show-alert';
import { calculateAge } from '../utils/date';
import DATA from '../data/data';

class ExamForm extends HTMLElement {
  static observedAttributes = ['loading'];

  constructor() {
    super();
    this.setAttribute('loading', 'true');
    this.patientData = null;
  }

  connectedCallback() {
    this.render();
  }

  set data(data) {
    this.patientData = data;
    this.hideLoading();
  }

  render() {
    this.innerHTML = `
      <div class="relative h-full w-full md:h-auto">
        <div class="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div class="mb-4 flex items-center justify-between rounded-t border-b pb-2 dark:border-gray-600 sm:mb-5">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Form Pemeriksaan</h3>
          </div>
          <div class="grid-cols-2">
            ${this.getAttribute('loading') === 'true' ? this.renderLoading() : this.renderPatientData()}
          </div>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
          <form class="mb-4 rounded-md">
            <div class="mb-4 grid gap-4 sm:grid-cols-2">
              ${this.renderFormInput()}
            </div>
          </form>              
        </div>
        ${this.renderModal('icd9', 'icd9-table')}
        ${this.renderModal('icd10', 'icd10-table')}
      </div>
    `;
    initFlowbite();
    this._addEventListeners();
  }

  renderLoading() {
    return `
      <div role="status" class="max-w-sm animate-pulse">
        <div class="mb-4 h-3 max-w-[200px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="my-4 h-3 max-w-[180px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="my-4 h-3 max-w-[180px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="my-4 h-3 max-w-[120px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="my-4 h-3 max-w-[130px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="my-4 h-3 max-w-[170px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="h-3 max-w-[120px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <span class="sr-only">Loading...</span>
      </div>
    `;
  }

  renderPatientData() {
    const {
      name: nama,
      no_rm: noRM,
      no_rawat: noRawat,
      tanggal_lahir: tanggalLahir,
      berat,
      tinggi,
      tensi,
      suhu,
    } = this.patientData;
    return `
      <div class="grid grid-cols-[max-content_auto] gap-1">
        <span
          class="text-gray-900 dark:text-white"
          >Nama Pasien</span
        >
        <span class="before:content-[':']"> ${nama} / ${noRM}</span>
        <span
          class="text-gray-900 dark:text-white"
          >No Rawat</span
        >
        <span class="before:content-[':']"> ${noRawat}</span>
        <span
          class="text-gray-900 dark:text-white"
          >Usia</span
        >
        <span class="before:content-[':']"> ${calculateAge(tanggalLahir)}</span>
        <span
          class="text-gray-900 dark:text-white"
          >Berat Badan</span
        >
        <span class="before:content-[':']"> ${berat} kg</span>
        <span
          class="text-gray-900 dark:text-white"
          >Tinggi Badan</span
        >
        <span class="before:content-[':']"> ${tinggi} cm</span>
        <span
          class="text-gray-900 dark:text-white"
          >Tensi Darah</span
        >
        <span class="before:content-[':']"> ${tensi} mmHg</span>
        <span
          class="text-gray-900 dark:text-white"
          >Suhu Badan</span
        >
        <span class="before:content-[':']"> ${suhu}&#176;c</span>
      </div>
    `;
  }

  renderFormInput() {
    return `
      <div>
        <label
          for="keluhan"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >Keluhan</label
        >
        <textarea
          id="keluhan"
          rows="4"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Keluhan Pasien..."
          required
        ></textarea>
      </div>
      <div>
        <label
          for="resep_obat"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >Resep Obat</label
        >
        <textarea
          id="resep_obat"
          rows="4"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Resep Obat Pasien..."
          required
        ></textarea>
      </div>
      <div>
        <label
        for="tindakan" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Tindakan</label>
        <div class="grid grid-cols-[1fr_max-content] place-items-center gap-2">
          <input type="text" name="tindakan" id="tindakan" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Isi data dari tabel pencarian" readonly/>
          <button data-modal-target="icd9-modal" data-modal-toggle="icd9-modal" type="button" class="material-symbols-outlined hover:scale-150">search</button>
        </div>
      </div>
      <div>
        <label
        for="diagnosis" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Diagnosis</label>
        <div class="grid grid-cols-[1fr_max-content] place-items-center gap-2">
          <input type="text" name="diagnosis" id="diagnosis" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Isi data dari tabel pencarian" readonly/>
          <button data-modal-target="icd10-modal" data-modal-toggle="icd10-modal" type="button" class="material-symbols-outlined hover:scale-150">search</button>
        </div>
      </div>
      <div class="flex flex-wrap gap-4 sm:col-span-2">
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
      `;
  }

  renderModal(id, tableComponent) {
    return `
      <div id="${id}-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full overflow-y-auto bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300">
            <div class="p-4 md:p-5 space-y-4">
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto hidden justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white " data-modal-hide="${id}-modal">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span class="sr-only">Close modal</span>
              </button>
              <${tableComponent}></${tableComponent}>
            </div>
        </div>
      </div>
    `;
  }

  _addEventListeners() {
    const form = this.querySelector('form');
    form.addEventListener('submit', this._handleSubmit.bind(this));
  }

  async _handleSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.querySelectorAll('input, textarea');
    const formData = {
      no_rm: this.patientData.no_rm,
      no_rawat: this.patientData.no_rawat,
      dokter_id: this.patientData.dokter_id,
      keluhan: this.querySelector('#keluhan').value,
      tindakan: this.querySelector('#tindakan').dataset.id,
      diagnosis: this.querySelector('#diagnosis').dataset.id,
      resep_obat: this.querySelector('#resep_obat').value,
    };

    let isFormValid = true;

    formElements.forEach((element) => {
      if (!element.value && !element.dataset.id) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      try {
        const response = await DATA.exam(formData);
        if (response.error) {
          throw new Error(response.message);
        }
        showAlert.success(`${this.patientData.name} selesai di periksa`);
        this.clearInput();
      } catch (error) {
        showAlert.error(error.message);
      }
    } else {
      showAlert.toast('Mohon isi seluruh form sebelum submit', {
        icon: 'warning',
      });
    }
  }

  clearInput() {
    this.querySelectorAll('input, textarea').forEach((input) => {
      input.value = '';
    });
  }

  attributeChangedCallback(name) {
    if (name === 'loading') {
      this.render();
    }
  }

  hideLoading() {
    this.setAttribute('loading', 'false');
  }
}

customElements.define('exam-form', ExamForm);
