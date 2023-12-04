import '../../components/exam-form';
import { h } from 'gridjs';
import DATA from '../../data/data';

const ExamPatient = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Pemeriksaan Dokter');
    return `
    <exam-form></exam-form>
    `;
  },

  async afterRender() {
    document.querySelector('exam-form').hideLoading();
    try {
      const icd9Data = async () => {
        const { icd9cm_procedure_codes: lists } = await DATA.icd9();
        return lists.map((list) => [list.id, list.name]);
      };

      const fillInputAndCloseModal = (inputId, code, description, targetModal) => {
        const targetEl = document.querySelector(inputId);

        targetEl.dataset.id = code;
        targetEl.value = `${code} | ${description}`;
        document.querySelector(`[data-modal-hide=${targetModal}]`).dispatchEvent(new Event('click'));
      };

      const icd9Columns = [{
        name: 'Kode',
        width: '100px',
      }, 'Deskripsi', {
        name: 'Aksi',
        width: '125px',
        formatter: (cell, row) => h(
          'button',
          {
            className: 'table-button',
            onClick: () => fillInputAndCloseModal(
              '#tindakan',
              row.cells[0].data,
              row.cells[1].data,
              'icd9-modal',
            ),
          },
          'Pilih',
        ),
      }];
      document.querySelector('icd9-table').data = { columns: icd9Columns, data: icd9Data };

      const icd10Data = async () => {
        const { icd10_codes: lists } = await DATA.icd10();
        return lists.map((list) => [list.id, list.name]);
      };
      const icd10Columns = [{
        name: 'Kode',
        width: '100px',
      }, 'Deskripsi', {
        name: 'Aksi',
        width: '125px',
        formatter: (cell, row) => h(
          'button',
          {
            className: 'table-button',
            onClick: () => fillInputAndCloseModal(
              '#diagnosis',
              row.cells[0].data,
              row.cells[1].data,
              'icd10-modal',
            ),
          },
          'Pilih',
        ),
      }];
      document.querySelector('icd10-table').data = { columns: icd10Columns, data: icd10Data };
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default ExamPatient;
