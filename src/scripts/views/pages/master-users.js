import DATA from '../../data/data';
import '../../components/user-form';
import '../../components/employee-table';
import showAlert from '../../utils/show-alert';

const MasterUsers = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Master');
    return `
    <user-form></user-form>
    <employee-table title="Pengguna Aplikasi"></employee-table>
    `;
  },

  async afterRender() {
    const userForm = document.querySelector('user-form');
    const table = document.querySelector('employee-table');
    const columns = ['id', 'Role'];
    let getData;

    try {
      const employeeData = await Promise.all([
        DATA.getAdmins(),
        DATA.getDoctors(),
        DATA.getNurses(),
      ]);

      employeeData.forEach((response) => {
        if (response.error) {
          throw new Error('Something error with get Employee Data');
        }
      });

      const [admins, doctors, nurses] = employeeData;
      const dataArr = [...admins.data, ...doctors.data, ...nurses.data];
      const employeeList = dataArr.map((obj) => ({
        id: obj.id,
        name: obj.nama,
      }));

      userForm.employee = employeeList;

      getData = async () => {
        const response = await DATA.getUsers();
        if (response.error) {
          throw new Error(response.message);
        }
        return response.data.map((user) => [user.id, user.role]);
      };

      table.data = { columns, data: getData };
    } catch (error) {
      showAlert.error(error.message);
    }

    userForm
      .querySelector('form')
      .addEventListener('submit', async () => {
        table.updateTable({
          data: await getData,
        });
      });
  },
};

export default MasterUsers;
