import '../../components/appointment-form';
import '../../components/patient-list';
import dataSource from '../../data/patients.json';

const doctors = [
  {
    id: 1,
    name: 'dr. Bryan',
  },
  {
    id: 2,
    name: 'dr. Fikry',
  },
  {
    id: 3,
    name: 'dr. Dhimas',
  },
];

const Rawat = {
  async render() {
    return `
    <appointment-form></appointment-form>
    <patient-list></patient-list>
    `;
  },
  async afterRender() {
    const appointmentForm = document.querySelector('appointment-form');
    appointmentForm.data = doctors;

    const { patients } = dataSource;
    const patientsData = patients.map((patient) => [
      `RM-000${patient.id}`,
      patient.name,
      patient.address,
    ]);

    const patientList = document.querySelector('patient-list');
    patientList.data = patientsData;
  },
};

export default Rawat;
