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

    const fetchData = async () => {
      try {
        const { error, message, data } = await DATA.getNurses();
        if (error) {
          throw new Error(message);
        }
        return data.map((nurse) => [nurse.id, nurse.nama]);
      } catch (error) {
        showAlert.toast('Belum ada data Perawat');
        return [];
      }
    };

    table.data = { columns, data: fetchData };

    document
      .querySelector('nurse-form form')
      .addEventListener('submit', () => {
        table.updateTable({
          data: fetchData,
        });
      });
  },
};

export default MasterNurses;
