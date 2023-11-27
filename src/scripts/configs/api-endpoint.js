import CONFIG from './config';

const API_ENDPOINT = {
  PATIENTS: `${CONFIG.BASE_URL}pasien`,
  DOCTORS: `${CONFIG.BASE_URL}dokter`,
  DASHBOARD: `${CONFIG.BASE_URL}dashboard`,
};

export default API_ENDPOINT;
