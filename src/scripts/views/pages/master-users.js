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
    const table = document.querySelector('employee-table');
    const userForm = document.querySelector('user-form');
    const columns = ['id', 'Role'];

    const getEmployeeList = async () => {
      try {
        const employeeData = await Promise.all([
          DATA.getAdmins(),
          DATA.getDoctors(),
          DATA.getNurses(),
        ]);

        employeeData.forEach((response) => {
          if (response.error === 'Not found') {
            throw new Error(`Belum ada data pegawai | ${response.message}`);
          }
        });

        const [admins, doctors, nurses] = employeeData;
        const dataArr = [...admins.data, ...doctors.data, ...nurses.data];
        return dataArr.map((obj) => ({
          id: obj.id,
          name: obj.nama,
        }));
      } catch (error) {
        showAlert.toast(error.message);
        return [];
      }
    };

    userForm.employee = await getEmployeeList();

    const getUsersData = async () => {
      try {
        const { error, message, data } = await DATA.getUsers();
        if (error) {
          throw new Error(message);
        }
        return data.map((user) => [user.id, user.role]);
      } catch (error) {
        showAlert.error(error.message);
        return [];
      }
    };

    table.data = { columns, data: await getUsersData() };
    userForm.addEventListener('user-added', async () => {
      table.updateTable({
        data: await getUsersData(),
      });
    });
  },
};

export default MasterUsers;
