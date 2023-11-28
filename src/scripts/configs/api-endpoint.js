import CONFIG from './config';

// eslint-disable-next-line import/no-mutable-exports
let API_ENDPOINT;

if (process.env.APP_ENV === 'production') {
  API_ENDPOINT = {
    PATIENTS: `${CONFIG.BASE_URL}pasien.json?key=${CONFIG.API_KEY}`,
    DOCTORS: `${CONFIG.BASE_URL}dokter.json?key=${CONFIG.API_KEY}`,
    DASHBOARD: `${CONFIG.BASE_URL}dashboard.json?key=${CONFIG.API_KEY}`,
  };
} else {
  API_ENDPOINT = {
    PATIENTS: `${CONFIG.BASE_URL}pasien`,
    DOCTORS: `${CONFIG.BASE_URL}dokter`,
    DASHBOARD: `${CONFIG.BASE_URL}dashboard`,
  };
}

export default API_ENDPOINT;
