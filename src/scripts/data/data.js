import API_ENDPOINT from '../configs/api-endpoint';

const BASE_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  credentials: 'include',
};

class DATA {
  static async fetchData(endpoint, method = 'GET', body = null) {
    const options = { ...BASE_OPTIONS, method };
    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(endpoint, options);

    if (response.status === 401 && response.statusText === 'Unauthorized') {
      localStorage.removeItem('accessToken');
    }

    if (response.status === 204) {
      return {
        error: true,
        message: 'Belum ada data yang ditemukan',
        data: null,
      };
    }

    if (response.status === 500) {
      return {
        error: true,
        message: 'Internal Server Error',
        data: null,
      };
    }

    return response.json();
  }

  static async getPatients() {
    return DATA.fetchData(API_ENDPOINT.PATIENTS);
  }

  static async getDoctors() {
    return DATA.fetchData(API_ENDPOINT.DOCTORS);
  }

  static async getNurses() {
    return DATA.fetchData(API_ENDPOINT.NURSES);
  }

  static async getAdmins() {
    return DATA.fetchData(API_ENDPOINT.ADMIN);
  }

  static async getUsers() {
    return DATA.fetchData(API_ENDPOINT.USERS);
  }

  static async getAnamnesis(number) {
    return DATA.fetchData(`${API_ENDPOINT.ANAMNESIS}?no_rawat=${number}`);
  }

  static async dashboard() {
    return DATA.fetchData(API_ENDPOINT.DASHBOARD);
  }

  static async icd9() {
    return DATA.fetchData(API_ENDPOINT.ICD9);
  }

  static async icd10() {
    return DATA.fetchData(API_ENDPOINT.ICD10);
  }

  static async signIn(id, password) {
    const body = { id, password };
    return DATA.fetchData(API_ENDPOINT.SIGN_IN, 'POST', body);
  }

  static async signOut() {
    return DATA.fetchData(API_ENDPOINT.SIGN_OUT, 'DELETE');
  }

  static async registerAdmin(id, nama) {
    const body = { id, nama };
    return DATA.fetchData(API_ENDPOINT.REG_ADMIN, 'POST', body);
  }

  static async registerDoctor(id, nama, spesialis) {
    const body = { id, nama, spesialis };
    return DATA.fetchData(API_ENDPOINT.REG_DOCTOR, 'POST', body);
  }

  static async registerNurse(id, nama) {
    const body = { id, nama };
    return DATA.fetchData(API_ENDPOINT.REG_NURSES, 'POST', body);
  }

  static async registerUser(id, password, role) {
    const body = { id, password, role };
    return DATA.fetchData(API_ENDPOINT.REG_USER, 'POST', body);
  }

  static async registerPatient(form) {
    return DATA.fetchData(API_ENDPOINT.REG_PATIENT, 'POST', form);
  }

  static async patientAppointment(form) {
    return DATA.fetchData(API_ENDPOINT.PATIENTS_APPOINTMENT, 'POST', form);
  }

  static async anamnesis(form) {
    return DATA.fetchData(API_ENDPOINT.ANAMNESIS, 'POST', form);
  }

  static async exam(form) {
    return DATA.fetchData(API_ENDPOINT.EXAM, 'POST', form);
  }

  static async patientNumber() {
    return DATA.fetchData(API_ENDPOINT.RM_NUMBER, 'GET');
  }

  static async medicalRecords() {
    return DATA.fetchData(API_ENDPOINT.MED_RECORDS, 'GET');
  }

  static async medicalRecordsDetail(number) {
    return DATA.fetchData(`${API_ENDPOINT.MED_RECORDS}/detail?no_rm=${number}`);
  }
}

export default DATA;
