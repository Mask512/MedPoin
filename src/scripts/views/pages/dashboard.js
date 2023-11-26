import '../../components/patient-cards';
import '../../components/patient-history';
import DATA from '../../data/data';

const Dashboard = {
  async render() {
    return `
    <patient-cards loading="true"></patient-cards>
    <patient-history></patient-history>
    `;
  },

  async afterRender() {
    try {
      const data = await DATA.dashboard();
      const total = data.length;
      const terlayani = data.filter((obj) => obj.status).length;
      const patientCards = document.querySelector('patient-cards');
      patientCards.data = { total, terlayani };
      patientCards.setAttribute('loading', 'false');

      const patientData = data.map((patient) => [
        patient.no_antrian,
        patient.no_rawat,
        patient.no_rm,
        patient.nama,
        patient.tanggal_pendaftaran,
        patient.status ? 'Terlayani' : 'Belum Terlayani',
        patient.nama_dokter,
      ]);

      const patientHistory = document.querySelector('patient-history');
      patientHistory.data = patientData;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default Dashboard;
