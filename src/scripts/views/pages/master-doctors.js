import DATA from '../../data/data';
import '../../components/doctor-form';
import '../../components/employee-table';

const MasterDoctors = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Master');
    return `
    <doctor-form></doctor-form>
    <employee-table title="Dokter"></employee-table>
    `;
  },

  async afterRender() {
    try {
      const tableData = async () => {
        const doctors = await DATA.getDoctors();
        return doctors.map((doctor) => [doctor.id, doctor.name, doctor.speciality]);
      };
      const columns = ['id', 'Nama', 'Spesialis'];
      document.querySelector('employee-table').data = { columns, data: tableData };
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default MasterDoctors;
