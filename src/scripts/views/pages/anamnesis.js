import DATA from '../../data/data';
import '../../components/anamnesis-table';
import showAlert from '../../utils/show-alert';

const Anamnesis = {
  async render() {
    return '<anamnesis-table></anamnesis-table>';
  },

  async afterRender() {
    try {
      const tableData = async () => {
        const dashboardData = await DATA.dashboard();
        const filteredData = dashboardData.filter((patient) => !patient.status);

        return filteredData.map((patient) => [
          patient.no_antrian,
          patient.no_rawat,
          patient.no_rm,
          patient.nama,
          patient.id_dokter,
          patient.nama_dokter,
        ]);
      };

      const anamnesisTable = document.querySelector('anamnesis-table');
      anamnesisTable.data = tableData;

      const nurses = await DATA.getNurses();
      const anamnesisForm = document.querySelector('anamnesis-form');
      anamnesisForm.nurses = nurses;
    } catch (error) {
      showAlert.error(error.message);
    }
  },
};

export default Anamnesis;
