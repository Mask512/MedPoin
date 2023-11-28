import { h } from 'gridjs';
import { Modal } from 'flowbite';
import createTable from '../utils/create-table';
import './anamnesis-form';

class AnamnesisTable extends HTMLElement {
  constructor() {
    super();
    this.modalElement = null;
    this.form = null;
  }

  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._createTable(data);
  }

  render() {
    this.innerHTML = `
    <div>
      <h3 class="text-3xl font-bold mt-4 lg:-mb-12">Daftar Pasien Anamnesis</h3>
      <div id="table-data"></div>
    </div>
    ${this._renderForm()}
      `;
    this.modalElement = this.querySelector('#modalEl');
    this.form = new Modal(this.modalElement, {
      onHide: () => {
        this._clearInputValues();
      },
    });
    this.querySelector('#closeModal').addEventListener(
      'click',
      () => {
        this._closeModal();
      },
    );
  }

  _renderForm() {
    return `
    <anamnesis-form
    id="modalEl"
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0">
    </anamnesis-form>
    `;
  }

  _clearInputValues() {
    this.modalElement.querySelectorAll('input').forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.value = '';
    });
  }

  _createTable(data) {
    const columns = [
      { name: 'No. Antrian', width: '100px' },
      'No. Rawat',
      'No. RM',
      'Nama Pasien',
      'Dokter',
      {
        name: 'Action',
        formatter: (cell, row) => h(
          'button',
          {
            className: 'table-button',
            onClick: () => this._actionHandler(
              row.cells[1].data, // 'No. Rawat',
              row.cells[2].data, // 'No. RM',
              row.cells[3].data, // 'Nama Pasien',
              row.cells[4].data, // 'Dokter',
            ),
          },
          'Pilih',
        ),
      },
    ];
    createTable('table-data', columns, data, { search: true });
  }

  _actionHandler(noRawat, noRM, nama, dokter) {
    this.querySelector('anamnesis-form').form = {
      noRawat,
      noRM,
      nama,
      dokter,
    };
    this._openModal();
  }

  _openModal() {
    this.form.show();
  }

  _closeModal() {
    this.form.hide();
  }
}

customElements.define('anamnesis-table', AnamnesisTable);
