import CONFIG from './config';

const API_ENDPOINT = {
  PATIENTS: `${CONFIG.BASE_URL}pasien`,
  DOCTORS: `${CONFIG.BASE_URL}dokter`,
  NURSES: `${CONFIG.BASE_URL}perawat`,
  DASHBOARD: `${CONFIG.BASE_URL}dashboard`,
  ADMIN: `${CONFIG.BASE_URL}admin`,
  ICD9: `${CONFIG.BASE_URL}icd9`,
  ICD10: `${CONFIG.BASE_URL}icd10`,
  SIGN_IN: `${CONFIG.BASE_URL}signin`,
  SIGN_OUT: `${CONFIG.BASE_URL}signout`,
};

export default API_ENDPOINT;
