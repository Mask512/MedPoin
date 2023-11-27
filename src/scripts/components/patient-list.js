import { h } from 'gridjs';
import createTable from '../utils/create-table';

class PatientList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._createTable(data);
  }

  render() {
    this.innerHTML = `
    <div>
    <h3 class="text-3xl font-bold mt-4 lg:-mb-12">Daftar Pasien</h3>
    <div id="table-data"></div>
    </div>
      `;
  }

  _createTable(data) {
    const columns = [
      'No. RM',
      'Nama',
      'Alamat',
      'Nomor HP',
      {
        name: 'Action',
        formatter: (cell, row) => h('button', {
          className: 'table-button',
          onClick: () => this._actionHandler(row.cells[0].data, row.cells[1].data),
        }, 'Pilih'),
      },
    ];

    createTable('table-data', columns, data, {
      search: true,
      pagination: {
        limit: 8,
      },
    });
  }

  _actionHandler(noRM, nama) {
    const appointmentForm = document.querySelector('appointment-form');
    appointmentForm.setAttribute('data-rm', noRM);
    appointmentForm.setAttribute('data-name', nama);
  }
}

customElements.define('patient-list', PatientList);
