import DATA from '../../data/data';
import '../../components/nurse-form';
import '../../components/employee-table';

const MasterNurses = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Master');
    return `
    <nurse-form></nurse-form>
    <employee-table title="Perawat"></employee-table>
    `;
  },

  async afterRender() {
    try {
      const tableData = async () => {
        const nurses = await DATA.getNurses();
        return nurses.map((nurse) => [nurse.id, nurse.name]);
      };
      const columns = ['id', 'Nama'];
      document.querySelector('employee-table').data = { columns, data: tableData };
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default MasterNurses;
