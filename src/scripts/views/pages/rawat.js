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

      const tableData = async () => {
        const patients = await DATA.getPatients();
        const patientsData = patients.map((patient) => [
          patient.no_rm,
          patient.nama,
          patient.alamat,
          patient.no_hp,
        ]);
        return patientsData;
      };

      const patientList = document.querySelector('patient-list');
      patientList.data = tableData;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default Rawat;
