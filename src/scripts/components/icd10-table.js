import createTable from '../utils/create-table';

class ICD10Table extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(table) {
    this._createTable(table.columns, table.data);
  }

  render() {
    this.innerHTML = `
    <div>
      <h3 class="text-3xl font-bold my-4 lg:-mb-12">Daftar Diagnosis ICD 10</h3>
      <div id="table-icd10"></div>
    </div>
      `;
  }

  _createTable(columns, data) {
    createTable('table-icd10', columns, data, { search: true, pagination: true });
  }
}

customElements.define('icd10-table', ICD10Table);
