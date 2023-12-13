import '../../components/exam-form';
import { h } from 'gridjs';
import DATA from '../../data/data';
import UrlParser from '../../routes/url-parser';
import showAlert from '../../utils/show-alert';

const ExamPatient = {
  async render() {
    document
      .querySelector('content-title')
      .setAttribute('data-link', 'Pemeriksaan Dokter');
    return `
    <exam-form></exam-form>
    `;
  },

  async afterRender() {
    const examForm = document.querySelector('exam-form');
    const examNumber = UrlParser.parseUrlDetail().number;

    const fillInputAndCloseModal = (
      inputId,
      code,
      description,
      targetModal,
    ) => {
      const targetEl = document.querySelector(inputId);

      targetEl.dataset.id = code;
      targetEl.value = `${code} | ${description}`;
      document
        .querySelector(`[data-modal-hide=${targetModal}]`)
        .dispatchEvent(new Event('click'));
    };

    const icd9Columns = [
      {
        name: 'Kode',
        width: '100px',
      },
      'Deskripsi',
      {
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
      },
    ];

    const icd10Columns = [
      {
        name: 'Kode',
        width: '100px',
      },
      'Deskripsi',
      {
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
      },
    ];

    const icdMapped = async (lists) => lists.map((list) => [list.id, list.nama]);

    const icd9Table = document.querySelector('icd9-table');
    const icd10Table = document.querySelector('icd10-table');

    try {
      const [anamnesisResponse, icd9Response, icd10Response] = await Promise.all([
        DATA.getAnamnesis(examNumber),
        DATA.icd9(),
        DATA.icd10(),
      ]);

      if (anamnesisResponse.status === 422) {
        examForm.data = {
          name: '',
          no_rm: '',
          no_rawat: '',
          tanggal_lahir: undefined,
          berat: '',
          tinggi: '',
          tensi: '',
          suhu: '',
        };
        throw new Error('Data Anamnesis Belum Tersedia Harap isi anamnesis terlebih dahulu');
      }
      if (anamnesisResponse.error) {
        throw new Error(anamnesisResponse.message);
      }

      if (icd9Response.error) {
        throw new Error(icd9Response.message);
      }

      if (icd10Response.error) {
        throw new Error(icd10Response.message);
      }
      examForm.data = anamnesisResponse.data;

      icd9Table.data = {
        columns: icd9Columns,
        data: await icdMapped(icd9Response.data),
      };

      icd10Table.data = {
        columns: icd10Columns,
        data: await icdMapped(icd10Response.data),
      };
    } catch (error) {
      showAlert.error(error.message);
    }
  },
};

export default ExamPatient;
