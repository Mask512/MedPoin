import createTable from '../utils/create-table';

const columns = ['Nama', 'Tanggal Pendaftaran', 'Pukul', 'Status', 'Dokter'];

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
    createTable('table-data', columns, data);
  }
}

customElements.define('patient-history', PatientHistory);
