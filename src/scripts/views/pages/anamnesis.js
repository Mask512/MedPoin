import DATA from '../../data/data';
import '../../components/anamnesis-table';

const Anamnesis = {
  async render() {
    return '<anamnesis-table></anamnesis-table>';
  },

  async afterRender() {
    const data = await DATA.dashboard();
    const tableData = data
      .filter((patient) => !patient.status)
      .map((patient) => [
        patient.no_antrian, patient.no_rawat, patient.no_rm, patient.nama, patient.nama_dokter]);

    const anamnesisTable = document.querySelector('anamnesis-table');
    anamnesisTable.data = tableData;
  },
};

export default Anamnesis;
