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
    let getData;

    try {
      getData = async () => {
        const response = await DATA.getAdmins();
        if (response.error) {
          throw new Error(response.message);
        }
        return response.data.map((admin) => [admin.id, admin.nama]);
      };
      table.data = { columns, data: getData };
    } catch (error) {
      showAlert.error(error.message);
    }

    document
      .querySelector('admin-form form')
      .addEventListener('submit', async () => {
        table.updateTable({
          data: await getData,
        });
      });
  },
};

export default MasterAdmins;
