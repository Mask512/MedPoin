import CONFIG from './config';

const API_ENDPOINT = {
  PATIENTS: `${CONFIG.BASE_URL}pasien`,
  DOCTORS: `${CONFIG.BASE_URL}dokter`,
  NURSES: `${CONFIG.BASE_URL}perawat`,
  DASHBOARD: `${CONFIG.BASE_URL}dashboard`,
  ADMIN: `${CONFIG.BASE_URL}admin`,
};

export default API_ENDPOINT;
