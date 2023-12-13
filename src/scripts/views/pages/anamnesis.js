import { Modal } from 'flowbite';
import { h } from 'gridjs';
import DATA from '../../data/data';
import '../../components/assessment-table';
import '../../components/anamnesis-form';
import showAlert from '../../utils/show-alert';

const Anamnesis = {
  async render() {
    return `
    <anamnesis-form id="modal"></anamnesis-form>
    <assessment-table></assessment-table>
    `;
  },

  async afterRender() {
    const anamnesisForm = document.querySelector('anamnesis-form');
    const assessmentTable = document.querySelector('assessment-table');

    const modal = new Modal(document.querySelector('#modal'), {
      onHide: () => {
        anamnesisForm.clearInput();
      },
    });

    const actionHandler = (noRawat, noRM, nama, idDokter, namaDokter) => {
      anamnesisForm.data = {
        noRawat,
        noRM,
        nama,
        idDokter,
        namaDokter,
      };

      modal.show();
    };

    const columns = [
      { name: 'No. Antrian', width: '100px' },
      'No. Rawat',
      'No. RM',
      'Nama Pasien',
      { name: 'ID Dokter', hidden: true },
      'Dokter',
      {
        name: 'Action',
        formatter: (cell, row) => h(
          'button',
          {
            className: 'table-button',
            onClick: () => actionHandler(
              row.cells[1].data,
              row.cells[2].data,
              row.cells[3].data,
              row.cells[4].data,
              row.cells[5].data,
            ),
          },
          'Pilih',
        ),
      },
    ];

    const fetchDataNurses = async () => {
      try {
        const { error, message, data } = await DATA.getNurses();
        if (!data || error) {
          throw new Error(message);
        }
        return data;
      } catch (error) {
        showAlert.toast(error);
        console.error(error);
        return [];
      }
    };

    const getFilteredDashboardData = async () => {
      try {
        const { error, message, data } = await DATA.dashboard();
        if (error) {
          throw new Error(message);
        }
        const filterDashboardData = data.filter((patient) => !patient.status);
        return filterDashboardData.map((patient) => [
          patient.no_antrian,
          patient.no_rawat,
          patient.pasien.no_rm,
          patient.pasien.name,
          patient.dokter.id,
          patient.dokter.nama,
        ]);
      } catch (error) {
        showAlert.toast(error.message);
        console.error(error);
        return [];
      }
    };

    anamnesisForm.nurses = await fetchDataNurses();
    assessmentTable.data = { columns, tableData: getFilteredDashboardData };

    document.querySelector('#closeModal').addEventListener('click', () => {
      modal.hide();
    });
  },
};

export default Anamnesis;
