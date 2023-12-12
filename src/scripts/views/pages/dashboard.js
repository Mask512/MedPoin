/* eslint-disable consistent-return */
import '../../components/patient-cards';
import '../../components/patient-history';
import DATA from '../../data/data';
import { formatDate } from '../../utils/date';
import showAlert from '../../utils/show-alert';

const Dashboard = {
  async render() {
    return `
    <patient-cards></patient-cards>
    <patient-history></patient-history>
    `;
  },

  async afterRender() {
    const patientCards = document.querySelector('patient-cards');
    const updatePatientCards = (total, terlayani) => {
      patientCards.data = { total, terlayani };
    };
    const patientHistory = document.querySelector('patient-history');

    const tableData = async () => {
      try {
        const { error, message, data } = await DATA.dashboard();
        if (error) {
          updatePatientCards(0, 0);
          patientHistory.data = [];
          throw new Error(message);
        }

        const total = data.length;
        const terlayani = data.filter((obj) => obj.status).length;

        updatePatientCards(total, terlayani);

        const patientData = data.map((patient) => [
          patient.no_antrian,
          patient.no_rawat,
          patient.pasien.no_rm,
          patient.pasien.name,
          formatDate(patient.tgl_antrian),
          patient.status ? 'Terlayani' : 'Belum Terlayani',
          patient.dokter.nama,
        ]);

        return patientData;
      } catch (error) {
        showAlert.error(error);
      } finally {
        patientCards.hideLoading();
      }
    };
    patientHistory.data = tableData;
  },
};

export default Dashboard;
