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
    const patientHistory = document.querySelector('patient-history');

    const updatePatientCards = (data) => {
      const total = data.length;
      const terlayani = data.filter((obj) => obj.status).length;
      patientCards.data = { total, terlayani };
      patientCards.hideLoading();
    };

    const fetchData = async () => {
      try {
        const { error, message, data } = await DATA.dashboard();
        if (message === 'Belum ada data yang ditemukan') {
          throw new Error('Belum ada pasien terdaftar');
        }
        if (error) {
          throw new Error(message);
        }
        return data;
      } catch (error) {
        showAlert.toast(error.message);
        return [];
      }
    };

    const mapPatientData = (data) => data.map((patient) => [
      patient.no_antrian,
      patient.no_rawat,
      patient.pasien.no_rm,
      patient.pasien.name,
      formatDate(patient.tgl_antrian),
      patient.status,
      patient.dokter.nama,
    ]);

    const data = await fetchData();
    updatePatientCards(data);
    patientHistory.data = mapPatientData(data);
  },
};

export default Dashboard;
