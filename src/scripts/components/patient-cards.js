class PatientCards extends HTMLElement {
  static observedAttributes = ['loading'];

  constructor() {
    super();
    this.setAttribute('loading', 'true');
  }

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
        ${this.renderCard('Pasien Hari ini', this._totalPasien, 'bg-gray-300')}
        ${this.renderCard('Belum Terlayani', this._belumTerlayani, 'bg-gray-50')}
        ${this.renderCard('Terlayani', this._terlayani, 'bg-gray-50')}
      </div>
    `;
  }

  renderCard(title, value, cardColor) {
    return `
      <div class="flex-auto sm:flex-none grid grid-cols-[2fr_1fr] grid-rows-2 place-items-start rounded-md p-4 font-semibold text-gray-700 ring-1 ring-gray-200 dark:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 ${cardColor}">
        <h3 class="text-xl">${title}</h3>
        <p class="col-start-1 row-start-2 text-4xl">${value || '0'}</p>
        <span class="material-symbols-outlined col-start-2 row-span-3 text-7xl">
          group
        </span>
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
    this.render();
  }
}

customElements.define('patient-cards', PatientCards);
