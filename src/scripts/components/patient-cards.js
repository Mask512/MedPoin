class PatientCards extends HTMLElement {
  static observedAttributes = ['loading'];

  connectedCallback() {
    this.render();
  }

  set data(data) {
    const { total, terlayani } = data;
    this._totalPasien = total;
    this._terlayani = terlayani;
    this._belumTerlayani = total - terlayani;
    this.render();
  }

  render() {
    const animatePulseClass = this.getAttribute('loading') === 'true' ? 'animate-pulse' : '';

    this.innerHTML = `
      <div class="flex flex-wrap gap-4 ${animatePulseClass}">
  
        <div
          class="flex-auto sm:flex-none grid grid-cols-[2fr_1fr] grid-rows-2 place-items-start rounded-md bg-gray-300 p-4 font-semibold text-gray-700 ring-1 ring-gray-400 dark:bg-gray-800 dark:text-gray-300"
        >
          <h3 class="text-xl">Pasien Hari ini</h3>
          <p class="col-start-1 row-start-2 text-4xl"> ${this._totalPasien}
          </p>
          <span class="material-symbols-outlined col-start-2 row-span-3 text-7xl">
            group
          </span>
        </div>
  
        <div
          class="flex-auto sm:flex-none grid grid-cols-[2fr_1fr] grid-rows-2 place-items-start rounded-md bg-gray-50 p-4 font-semibold text-gray-700 ring-1 ring-gray-400 dark:bg-gray-800 dark:text-gray-300"
        >
          <h3 class="text-xl">Belum Terlayani</h3>
          <p class="col-start-1 row-start-2 text-4xl">
          ${this._belumTerlayani}
          </p>
          <span class="material-symbols-outlined col-start-2 row-span-3 text-7xl">
            group
          </span>
        </div>
  
        <div
          class="flex-auto sm:flex-none grid grid-cols-[2fr_1fr] grid-rows-2 place-items-start rounded-md bg-gray-50 p-4 font-semibold text-gray-700 ring-1 ring-gray-400 dark:bg-gray-800 dark:text-gray-300"
        >
          <h3 class="text-xl">Terlayani</h3>
          <p class="col-start-1 row-start-2 text-4xl">
          ${this._terlayani}
          </p>
          <span class="material-symbols-outlined col-start-2 row-span-3 text-7xl">
            group
          </span>
        </div>
      </div>
    `;
  }

  attributeChangedCallback(name) {
    if (name === 'loading') {
      this.render();
    }
  }
}

customElements.define('patient-cards', PatientCards);
