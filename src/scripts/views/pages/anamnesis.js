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
    try {
      const anamnesisForm = document.querySelector('anamnesis-form');
      const assessmentTable = document.querySelector('assessment-table');

      const modal = new Modal(document.querySelector('#modal'), {
        onHide: () => {
          anamnesisForm.clearInput();
        },
      });

      const nurses = await DATA.getNurses();
      anamnesisForm.nurses = nurses;

      const actionHandler = (noRawat, noRM, nama, idDokter, namaDokter) => {
        // send data to form
        anamnesisForm.data = {
          noRawat,
          noRM,
          nama,
          idDokter,
          namaDokter,
        };

        modal.show();
      };

      const tableData = async () => {
        const dashboardData = await DATA.dashboard();
        const filteredData = dashboardData.filter((patient) => !patient.status);

        return filteredData.map((patient) => [
          patient.no_antrian,
          patient.no_rawat,
          patient.no_rm,
          patient.nama,
          patient.id_dokter,
          patient.nama_dokter,
        ]);
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
                row.cells[1].data, // 'No. Rawat',
                row.cells[2].data, // 'No. RM',
                row.cells[3].data, // 'Nama Pasien',
                row.cells[4].data, // 'ID Dokter',
                row.cells[5].data, // 'Dokter',
              ),
            },
            'Pilih',
          ),
        },
      ];

      assessmentTable.data = { columns, tableData };

      document.querySelector('#closeModal').addEventListener('click', () => {
        modal.hide();
      });
    } catch (error) {
      showAlert.error(error.message);
    }
  },
};

export default Anamnesis;
