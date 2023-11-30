import DATA from '../../data/data';
import '../../components/admin-form';
import '../../components/employee-table';

const MasterAdmins = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Master');
    return `
    <admin-form></admin-form>
    <employee-table title="Admin Rekam Medis"></employee-table>
    `;
  },

  async afterRender() {
    try {
      const tableData = async () => {
        const admins = await DATA.getAdmins();
        return admins.map((admin) => [admin.id, admin.name]);
      };
      const columns = ['id', 'Nama'];
      document.querySelector('employee-table').data = { columns, data: tableData };
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default MasterAdmins;
