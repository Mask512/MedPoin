/* eslint-disable consistent-return */
import { h } from 'gridjs';
import '../../components/medical-records-table';
import DATA from '../../data/data';
import showAlert from '../../utils/show-alert';
import { formatDate } from '../../utils/date';

const MedicalRecords = {
  async render() {
    return '<medrec-table></medrec-table>';
  },

  async afterRender() {
    const table = document.querySelector('medrec-table');
    const columns = [
      'No. RM',
      'Nama Pasien',
      'Kunjungan Terakhir',
      'Jumlah Kunjungan',
      {
        name: 'Action',
        formatter: (cell, row) => h(
          'button',
          {
            className: 'table-button',
            onClick: () => {
              window.location.href = `#/medical-records/detail/${row.cells[0].data}`;
            },
          },
          'Detail',
        ),
      },
    ];

    const getData = async () => {
      try {
        const response = await DATA.medicalRecords();
        if (response.error) {
          throw new Error(response.message);
        }

        return response.data.map((patient) => [
          patient.no_rm,
          patient.name,
          formatDate(patient.kunjungan_terakhir),
          patient.jumlah_kunjungan,
        ]);
      } catch (error) {
        showAlert.error(error.message);
      }
    };
    table.data = { columns, data: await getData };
  },
};

export default MedicalRecords;
