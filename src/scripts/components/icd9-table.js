import createTable from '../utils/create-table';

class ICD9Table extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(table) {
    this._createTable(table.columns, table.data);
  }

  render() {
    this.innerHTML = `
    <div>
      <h3 class="text-3xl font-bold my-4 lg:-mb-12">Daftar Prosedur ICD-9-CM</h3>
      <div id="table-icd9"></div>
    </div>
      `;
  }

  _createTable(columns, data) {
    createTable('table-icd9', columns, data, { search: true, pagination: true, fixedHeader: true });
  }
}

customElements.define('icd9-table', ICD9Table);
