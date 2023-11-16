import Dashboard from '../views/pages/dashboard';
import Registrasi from '../views/pages/registrasi';
import Rawat from '../views/pages/rawat';
import Anamnesis from '../views/pages/anamnesis';
import PemeriksaanDokter from '../views/pages/pemeriksaan';
import RekamMedis from '../views/pages/rekam-medis';
import Master from '../views/pages/master';

const routes = {
  '/': Dashboard,
  '/registrasi': Registrasi,
  '/rawat': Rawat,
  '/anamnesis': Anamnesis,
  '/pemeriksaan': PemeriksaanDokter,
  '/rekam-medis': RekamMedis,
  '/master': Master,
};

export default routes;
