import createTable from '../utils/create-table';
import './anamnesis-form';

class AssessmentTable extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._createTable(data.columns, data.tableData);
  }

  render() {
    this.innerHTML = `
    <div>
      <h3 class="text-3xl font-bold mt-4 lg:-mb-12">Antrian Pemeriksaan Pasien</h3>
      <div id="table-data"></div>
    </div>
    `;
  }

  _createTable(columns, data) {
    createTable('table-data', columns, data, { search: true });
  }
}

customElements.define('assessment-table', AssessmentTable);
