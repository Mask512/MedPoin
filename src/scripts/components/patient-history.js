import createTable from '../utils/create-table';

class PatientHistory extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._createTable(data);
  }

  render() {
    this.innerHTML = `
      <div>
        <h3 class="text-lg font-bold my-4">Riwayat Pasien</h3>
        <div id="table-data"></div>
      </div>
    `;
  }

  _createTable(data) {
    const columns = [
      { name: 'No. Antrian', width: '100px' },
      'No. Rawat',
      'No. RM',
      'Nama',
      'Tanggal',
      'Status',
      'Dokter',
    ];

    createTable('table-data', columns, data);
  }
}

customElements.define('patient-history', PatientHistory);
