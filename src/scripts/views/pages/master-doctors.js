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
    let getData;
    try {
      getData = async () => {
        const response = await DATA.getDoctors();
        if (response.error) {
          throw new Error(response.message);
        }
        return response.data.map((doctor) => [doctor.id, doctor.nama, doctor.spesialis]);
      };

      table.data = { columns, data: getData };
    } catch (error) {
      showAlert.error(error.message);
    }

    document
      .querySelector('doctor-form form')
      .addEventListener('submit', async () => {
        table.updateTable({
          data: await getData,
        });
      });
  },
};

export default MasterDoctors;
