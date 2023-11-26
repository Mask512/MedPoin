import CONFIG from './config';

const API_ENDPOINT = {
  PATIENTS: `${CONFIG.BASE_URL2}pasien.json`,
  DOCTORS: `${CONFIG.BASE_URL}doctors`,
  DASHBOARD: `${CONFIG.BASE_URL2}dashboard.json`,
};

export default API_ENDPOINT;
