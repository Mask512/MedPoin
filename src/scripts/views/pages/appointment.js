import '../../components/appointment-form';
import '../../components/patient-list';
import DATA from '../../data/data';

const Appointment = {
  async render() {
    return `
    <appointment-form></appointment-form>
    <patient-list></patient-list>
    `;
  },
  async afterRender() {
    const appointmentForm = document.querySelector('appointment-form');
    try {
      const response = await DATA.getDoctors();
      if (response.error) {
        throw new Error(response.message);
      }
      const doctors = response.data;
      appointmentForm.data = doctors;

      const tableData = async () => {
        const res = await DATA.getPatients();
        if (res.error) {
          throw new Error(res.message);
        }
        const patientsData = res.data.map((patient) => [
          patient.no_rm,
          patient.name,
          patient.alamat_lengkap,
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

export default Appointment;
