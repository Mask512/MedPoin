import DATA from '../../data/data';
import '../../components/user-form';
import '../../components/employee-table';

const MasterUsers = {
  async render() {
    document.querySelector('content-title').setAttribute('data-link', 'Master');
    return `
    <user-form></user-form>
    <employee-table title="Pengguna Aplikasi"></employee-table>
    `;
  },
  async afterRender() {
    const [admins, doctors, nurses] = await Promise.all([
      DATA.getAdmins(),
      DATA.getDoctors(),
      DATA.getNurses(),
    ]);
    const employeeList = [...admins, ...doctors, ...nurses];
    document.querySelector('user-form').employee = employeeList;
    document.querySelector('employee-table').data = { columns: [], data: [] };
  },
};

export default MasterUsers;
