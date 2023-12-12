import CONFIG from './config';

const API_ENDPOINT = {
  PATIENTS: `${CONFIG.BASE_URL}pasien`,
  PATIENTS_APPOINTMENT: `${CONFIG.BASE_URL}rawat`,
  DOCTORS: `${CONFIG.BASE_URL}dashboard/dokter`,
  NURSES: `${CONFIG.BASE_URL}dashboard/perawat`,
  DASHBOARD: `${CONFIG.BASE_URL}dashboard`,
  ADMIN: `${CONFIG.BASE_URL}dashboard/staf`,
  USERS: `${CONFIG.BASE_URL}dashboard/users`,
  ICD9: `${CONFIG.BASE_URL}icd9`,
  ICD10: `${CONFIG.BASE_URL}icd10`,
  SIGN_IN: `${CONFIG.BASE_URL}signin`,
  SIGN_OUT: `${CONFIG.BASE_URL}signout`,
  REG_ADMIN: `${CONFIG.BASE_URL}signup/staf`,
  REG_DOCTOR: `${CONFIG.BASE_URL}signup/dokter`,
  REG_NURSES: `${CONFIG.BASE_URL}signup/perawat`,
  REG_USER: `${CONFIG.BASE_URL}signup`,
  REG_PATIENT: `${CONFIG.BASE_URL}pasien/registrasi`,
  RM_NUMBER: `${CONFIG.BASE_URL}pasien/rm`,
  ANAMNESIS: `${CONFIG.BASE_URL}anamnesis`,
  // ANAMNESIS_NUMBER: `${CONFIG.BASE_URL}anamnesis`,
  EXAM: `${CONFIG.BASE_URL}pemeriksaan`,
  MED_RECORDS: `${CONFIG.BASE_URL}rekammedis`,
  MED_RECORDS_DETAIL: `${CONFIG.BASE_URL}rekammedis`,
};

export default API_ENDPOINT;
