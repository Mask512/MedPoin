class PatientData extends HTMLElement {
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
      ${this.getAttribute('loading') === 'true' ? this.renderLoading() : this.renderPatientData()}
      `;
  }

  renderLoading() {
    return `    
    <div
      role="status"
      class="animate-pulse space-y-8 rtl:space-x-reverse md:grid md:grid-cols-[auto_1fr] md:items-center md:space-x-8 md:space-y-0"
      >
      <div
        class="flex min-h-[12rem] h-full w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-96 md:w-72"
      >
        <svg
          class="h-10 w-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
          />
        </svg>
      </div>
      <div class="flex w-full flex-col gap-4">
        <div class="top">
          <div
            class="h-8 mb-2 w-48 max-w-[180px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="h-4 max-w-[180px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
        </div>
        <div class="bottom">
          <div
            class="mb-2.5 h-4 max-w-[200px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="mb-2.5 h-4 max-w-[250px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="mb-2.5 h-4 max-w-[200px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="mb-2.5 h-4 max-w-[250px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="mb-2.5 h-4 max-w-[230px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="mb-2.5 h-4 max-w-[210px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="mb-2.5 h-4 max-w-[250px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="mb-2.5 h-4 max-w-[230px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="mb-2.5 h-4 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
        </div>
      </div>
      <span class="sr-only">Loading...</span>
      </div>
    `;
  }

  renderPatientData() {
    const {
      no_rm: noRM,
      name,
      alamat_lengkap: address,
      no_hp: phoneNumber,
      tgl_daftar: registerDate,
      no_ktp: idNumber,
      no_bpjs: bpjsNumber,
      no_hp_keluarga: emergencyContactNumber,
      gol_darah: bloodType,
      tempat_lahir: placeOfBirth,
      tanggal_lahir: birthDate,
      status_perkawinan: status,
    } = this.patientData;
    return `
    <div
      class="space-y-8 rtl:space-x-reverse md:grid md:grid-cols-[auto_1fr] md:items-center md:space-x-8 md:space-y-0"
      >
      <div
          class="flex h-full min-h-[12rem] w-full items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 sm:w-96 md:w-72"
        >
        <svg
          class="h-[12rem] w-[12rem] px-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
          />
        </svg>
      </div>
      <div class="flex w-full flex-col">
        <div class="top">
          <p class="text-xl font-extrabold">${name}</p>
          <p class="font-bold italic">${noRM}</p>
        </div>
        <div class="bottom">
          <p class="grid grid-cols-[150px_auto]">Nomor BPJS <span class="before:content-[':']"> ${bpjsNumber}</span></p>
          <p class="grid grid-cols-[150px_auto]">Nomor KTP <span class="before:content-[':']"> ${idNumber}</span></p>
          <p class="grid grid-cols-[150px_auto]">Kontak <span class="before:content-[':']"> ${phoneNumber}</span></p>
          <p class="grid grid-cols-[150px_auto]">Kontak Darurat <span class="before:content-[':']"> ${emergencyContactNumber}</span></p>
          <p class="grid grid-cols-[150px_auto]">Golongan Darah <span class="before:content-[':']"> ${bloodType}</span></p>
          <p class="grid grid-cols-[150px_auto]">Status Perkawinan <span class="before:content-[':']"> ${status}</span></p>
          <p class="grid grid-cols-[150px_auto]">Tanggal Pendaftaran <span class="before:content-[':']"> ${registerDate}</span></p>
          <p class="grid grid-cols-[150px_auto]">Tempat Tanggal Lahir <span class="before:content-[':']"> ${placeOfBirth}, ${birthDate}</span></p>
          <p class="grid grid-cols-[150px_auto]">
            Alamat Lengkap <span class="before:content-[':']"> ${address}
          </span></p>
        </div>
      </div>
      </div>
    `;
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

customElements.define('patient-data', PatientData);
