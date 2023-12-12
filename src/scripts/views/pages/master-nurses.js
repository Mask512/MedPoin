import DATA from '../../data/data';
import '../../components/nurse-form';
import '../../components/employee-table';
import showAlert from '../../utils/show-alert';

const MasterNurses = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Master');
    return `
    <nurse-form></nurse-form>
    <employee-table title="Perawat"></employee-table>
    `;
  },

  async afterRender() {
    const table = document.querySelector('employee-table');
    const columns = ['id', 'Nama'];
    let getData;

    try {
      getData = async () => {
        const response = await DATA.getNurses();
        if (response.error) {
          throw new Error(response.message);
        }
        return response.data.map((nurse) => [nurse.id, nurse.nama]);
      };
      table.data = { columns, data: getData };
    } catch (error) {
      showAlert.error(error.message);
    }

    document
      .querySelector('nurse-form form')
      .addEventListener('submit', async () => {
        table.updateTable({
          data: await getData,
        });
      });
  },
};

export default MasterNurses;
