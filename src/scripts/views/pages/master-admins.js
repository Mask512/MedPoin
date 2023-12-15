import DATA from '../../data/data';
import '../../components/admin-form';
import '../../components/employee-table';
import showAlert from '../../utils/show-alert';

const MasterAdmins = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Master');
    return `
    <admin-form></admin-form>
    <employee-table title="Admin Rekam Medis"></employee-table>
    `;
  },

  async afterRender() {
    const table = document.querySelector('employee-table');
    const columns = ['id', 'Nama'];
    const fetchData = async () => {
      try {
        const { error, message, data } = await DATA.getAdmins();
        if (error) {
          throw new Error(message);
        }
        return data.map((admin) => [admin.id, admin.nama]);
      } catch (error) {
        showAlert.toast('Belum ada data admin');
        return [];
      }
    };

    table.data = { columns, data: fetchData };

    document
      .querySelector('admin-form form')
      .addEventListener('submit', () => {
        table.updateTable({
          data: fetchData,
        });
      });
  },
};

export default MasterAdmins;
