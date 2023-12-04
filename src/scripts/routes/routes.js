import Dashboard from '../views/pages/dashboard';
import Registration from '../views/pages/registration';
import Appointment from '../views/pages/appointment';
import Anamnesis from '../views/pages/anamnesis';
import Exam from '../views/pages/exam';
import MedicalRecords from '../views/pages/medical-records';
import Master from '../views/pages/master';
import MasterAdmin from '../views/pages/master-admins';
import MasterNurses from '../views/pages/master-nurses';
import MasterDoctors from '../views/pages/master-doctors';
import MasterUsers from '../views/pages/master-users';
import ExamPatient from '../views/pages/exam-patient';

const routes = {
  '/': Dashboard,
  '/registration': Registration,
  '/appointment': Appointment,
  '/anamnesis': Anamnesis,
  '/exam': Exam,
  '/exam/patient/:id': ExamPatient,
  '/medical-records': MedicalRecords,
  '/master': Master,
  '/master/admins': MasterAdmin,
  '/master/nurses': MasterNurses,
  '/master/doctors': MasterDoctors,
  '/master/users': MasterUsers,
};

export default routes;
