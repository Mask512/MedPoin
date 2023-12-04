import '../../components/assessment-table';
import { h } from 'gridjs';
import DATA from '../../data/data';

const Exam = {
  async render() {
    return `
    <assessment-table></assessment-table>
    `;
  },
  async afterRender() {
    try {
      const assessmentTable = document.querySelector('assessment-table');
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
      console.log(error.message);
    }
  },
};

export default Exam;
