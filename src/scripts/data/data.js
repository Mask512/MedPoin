import API_ENDPOINT from '../configs/api-endpoint';
import APP_CONFIG from '../configs/config';

class DATA {
  static API_KEY = APP_CONFIG.API_KEY;

  static async getPatients() {
    const response = await fetch(API_ENDPOINT.PATIENTS, {
      headers: {
        'X-API-Key': this.API_KEY,
      },
    });
    return response.json();
  }

  static async getDoctors() {
    const response = await fetch(API_ENDPOINT.DOCTORS);
    return response.json();
  }

  static async dashboard() {
    const response = await fetch(API_ENDPOINT.DASHBOARD, {
      headers: {
        'X-API-Key': this.API_KEY,
      },
    });
    return response.json();
  }
}

export default DATA;
