import '../../components/assessment-table';
import { h } from 'gridjs';
import DATA from '../../data/data';
import showAlert from '../../utils/show-alert';

const Exam = {
  async render() {
    return `
    <assessment-table></assessment-table>
    `;
  },
  async afterRender() {
    const assessmentTable = document.querySelector('assessment-table');

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
            onClick: () => {
              window.location.href = `#/exam/patient/${row.cells[1].data}`;
            },
          },
          'Pilih',
        ),
      },
    ];

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

    assessmentTable.data = { columns, tableData: getFilteredDashboardData };
  },
};

export default Exam;
