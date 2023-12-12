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
    try {
      const tableData = async () => {
        const dashboardResponse = await DATA.dashboard();
        if (dashboardResponse.error) {
          showAlert.error(dashboardResponse.message);
        }
        const filteredData = dashboardResponse.data.filter((patient) => !patient.status);

        return filteredData.map((patient) => [
          patient.no_antrian,
          patient.no_rawat,
          patient.pasien.no_rm,
          patient.pasien.name,
          patient.dokter.id,
          patient.dokter.nama,
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
              onClick: () => {
                window.location.href = `#/exam/patient/${row.cells[1].data}`;
              }, // 'No. Rawat'
            },
            'Pilih',
          ),
        },
      ];

      assessmentTable.data = { columns, tableData };
    } catch (error) {
      showAlert.error(error.message);
    }
  },
};

export default Exam;
