import createTable from '../utils/create-table';

class EmployeeTable extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(table) {
    this._createTable(table.columns, table.data);
  }

  render() {
    const tableTitle = this.getAttribute('title');
    this.innerHTML = `
    <div>
      <h3 class="text-3xl font-bold my-4 lg:-mb-12">Daftar <span id="table-title">${tableTitle}</span></h3>
      <div id="table-data"></div>
    </div>
    `;
  }

  _createTable(columns, data) {
    this.grid = createTable('table-data', columns, data, { search: true });
  }

  updateTable(config) {
    if (this.grid) {
      this.grid
        .updateConfig({
          pagination: false,
          search: false,
          ...config,
        })
        .forceRender();
    } else {
      console.error('Belum ada tabel. gunakan _createTable');
    }
  }
}

customElements.define('employee-table', EmployeeTable);
