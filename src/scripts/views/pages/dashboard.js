import '../../components/patient-cards';
import '../../components/patient-history';
import dataSource from '../../data/dashboard.json';

const Dashboard = {
  async render() {
    return `
    <patient-cards loading="true"></patient-cards>
    <patient-history></patient-history>
    `;
  },

  async afterRender() {
    const { data } = dataSource;
    const total = data.length;
    const terlayani = data.filter((obj) => obj.status).length;
    const patientCards = document.querySelector('patient-cards');
    patientCards.data = { total, terlayani };
    patientCards.setAttribute('loading', 'false');

    const patientData = data.map((patient) => [
      patient.queue_number,
      patient.patient_name,
      patient.date,
      patient.time,
      patient.status ? 'Terlayani' : 'Antri',
      patient.doctor_name,
    ]);

    const patientHistory = document.querySelector('patient-history');
    patientHistory.data = patientData;
  },
};

export default Dashboard;
