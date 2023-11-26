import '../../components/appointment-form';
import '../../components/patient-list';
import DATA from '../../data/data';

const Rawat = {
  async render() {
    return `
    <appointment-form></appointment-form>
    <patient-list></patient-list>
    `;
  },
  async afterRender() {
    try {
      const appointmentForm = document.querySelector('appointment-form');
      appointmentForm.data = await DATA.getDoctors();

      const patients = await DATA.getPatients();
      const patientsData = patients.map((patient) => [
        patient.no_rm,
        patient.nama,
        patient.alamat,
        patient.no_hp,
      ]);

      const patientList = document.querySelector('patient-list');
      patientList.data = patientsData;
    } catch (error) {
      console.log(error);
    }
  },
};

export default Rawat;
