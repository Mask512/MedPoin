import DATA from '../../data/data';
import UrlParser from '../../routes/url-parser';
import showAlert from '../../utils/show-alert';
import '../../components/patient-data';
import '../../components/employee-table';
import { formatDate } from '../../utils/date';

const MedicalRecordsDetail = {
  async render() {
    document
      .querySelector('content-title')
      .setAttribute('data-link', 'Riwayat Medis');
    return `
    <patient-data></patient-data>
    <employee-table title="Riwayat Rekam Medis"></employee-table>
    `;
  },

  async afterRender() {
    const detailNumber = UrlParser.parseUrlDetail().number;
    const patientData = document.querySelector('patient-data');
    const table = document.querySelector('employee-table');
    const columns = [
      'Tanggal',
      'No Rawat',
      'Keluhan',
      'Diagnosa',
      'Tindakan',
      'Resep',
      'Dokter',
    ];
    try {
      const response = await DATA.medicalRecordsDetail(detailNumber);
      if (response.error) {
        throw new Error(response.message);
      }

      const { biodata, riwayat } = response.data;

      patientData.data = biodata;
      const tableData = await riwayat.map((obj) => [
        formatDate(obj.tgl_rawat),
        obj.no_rawat,
        obj.keluhan,
        obj.diagnosis,
        obj.tindakan,
        obj.resep_obat,
        obj.dokter.nama,
      ]);
      table.data = { columns, data: await tableData };
    } catch (error) {
      showAlert.error(error.message);
    }
  },
};

export default MedicalRecordsDetail;
