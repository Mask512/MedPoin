import '../../components/appointment-form';
import '../../components/patient-list';
import DATA from '../../data/data';
import showAlert from '../../utils/show-alert';

const Appointment = {
  async render() {
    return `
    <appointment-form></appointment-form>
    <patient-list></patient-list>
    `;
  },
  async afterRender() {
    const appointmentForm = document.querySelector('appointment-form');
    const patientListTable = document.querySelector('patient-list');

    const fetchDataDoctors = async () => {
      try {
        const { error, message, data } = await DATA.getDoctors();
        if (error) {
          throw new Error(message);
        }
        return data;
      } catch (error) {
        showAlert.toast('Belum ada data dokter');
        console.error(error);
        return [];
      }
    };

    appointmentForm.data = await fetchDataDoctors();

    const fetchDataPatients = async () => {
      try {
        const { error, message, data } = await DATA.getPatients();
        if (!data.length || error) {
          throw new Error(message);
        }
        return data.map((patient) => [
          patient.no_rm,
          patient.name,
          patient.alamat_lengkap,
          patient.no_hp,
        ]);
      } catch (error) {
        showAlert.toast('Belum ada pasien terdaftar');
        console.error(error);
        return [];
      }
    };

    patientListTable.data = fetchDataPatients;
  },
};

export default Appointment;
