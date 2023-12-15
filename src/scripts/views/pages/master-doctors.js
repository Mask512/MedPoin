import DATA from '../../data/data';
import '../../components/doctor-form';
import '../../components/employee-table';
import showAlert from '../../utils/show-alert';

const MasterDoctors = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Master');
    return `
    <doctor-form></doctor-form>
    <employee-table title="Dokter"></employee-table>
    `;
  },

  async afterRender() {
    const table = document.querySelector('employee-table');
    const columns = ['id', 'Nama', 'Spesialis'];

    const fetchData = async () => {
      try {
        const { error, message, data } = await DATA.getDoctors();
        if (error) {
          throw new Error(message);
        }
        return data.map((doctor) => [doctor.id, doctor.nama, doctor.spesialis]);
      } catch (error) {
        showAlert.toast('Belum ada data dokter');
        console.error(error);
        return [];
      }
    };

    table.data = { columns, data: fetchData };

    document
      .querySelector('doctor-form form')
      .addEventListener('submit', () => {
        table.updateTable({
          data: fetchData,
        });
      });
  },
};

export default MasterDoctors;
