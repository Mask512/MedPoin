import API_ENDPOINT from '../configs/api-endpoint';

const BASE_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  credentials: 'include',
};

class DATA {
  static async getPatients() {
    const response = await fetch(API_ENDPOINT.PATIENTS, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }

  static async getDoctors() {
    const response = await fetch(API_ENDPOINT.DOCTORS, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }

  static async getNurses() {
    const response = await fetch(API_ENDPOINT.NURSES, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }

  static async getAdmins() {
    const response = await fetch(API_ENDPOINT.ADMIN, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }

  static async getUsers() {
    const response = await fetch(API_ENDPOINT.USERS, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }

  static async getAnamnesis(number) {
    const response = await fetch(`${API_ENDPOINT.ANAMNESIS}?no_rawat=${number}`, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }

  static async dashboard() {
    const response = await fetch(API_ENDPOINT.DASHBOARD, {
      ...BASE_OPTIONS,
    });
    if (response.status === 204) {
      return {
        error: true,
        message: 'Belum ada pasien yang didaftarkan hari ini',
        data: null,
      };
    }
    return response.json();
  }

  static async icd9() {
    const response = await fetch(API_ENDPOINT.ICD9, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }

  static async icd10() {
    const response = await fetch(API_ENDPOINT.ICD10, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }

  static async signIn(id, password) {
    const data = { id, password };
    const response = await fetch(API_ENDPOINT.SIGN_IN, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async signOut() {
    const response = await fetch(API_ENDPOINT.SIGN_OUT, {
      ...BASE_OPTIONS,
      method: 'DELETE',
    });
    return response.json();
  }

  static async registerAdmin(id, nama) {
    const response = await fetch(API_ENDPOINT.REG_ADMIN, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify({ id, nama }),
    });
    return response.json();
  }

  static async registerDoctor(id, nama, spesialis) {
    const response = await fetch(API_ENDPOINT.REG_DOCTOR, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify({ id, nama, spesialis }),
    });
    return response.json();
  }

  static async registerNurse(id, nama) {
    const response = await fetch(API_ENDPOINT.REG_NURSES, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify({ id, nama }),
    });
    return response.json();
  }

  static async registerUser(id, password, role) {
    const response = await fetch(API_ENDPOINT.REG_USER, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify({
        id,
        password,
        role,
      }),
    });
    return response.json();
  }

  static async registerPatient(form) {
    const response = await fetch(API_ENDPOINT.REG_PATIENT, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify(form),
    });
    return response.json();
  }

  static async patientAppointment(form) {
    const response = await fetch(API_ENDPOINT.PATIENTS_APPOINTMENT, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify(form),
    });
    return response.json();
  }

  static async anamnesis(form) {
    const response = await fetch(API_ENDPOINT.ANAMNESIS, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify(form),
    });
    return response.json();
  }

  static async exam(form) {
    const response = await fetch(API_ENDPOINT.EXAM, {
      ...BASE_OPTIONS,
      method: 'POST',
      body: JSON.stringify(form),
    });
    return response.json();
  }

  static async patientNumber() {
    const response = await fetch(API_ENDPOINT.RM_NUMBER, {
      ...BASE_OPTIONS,
      method: 'GET',
    });
    return response.json();
  }

  static async medicalRecords() {
    const response = await fetch(API_ENDPOINT.MED_RECORDS, {
      ...BASE_OPTIONS,
      method: 'GET',
    });
    return response.json();
  }

  static async medicalRecordsDetail(number) {
    const response = await fetch(`${API_ENDPOINT.MED_RECORDS}/detail?no_rm=${number}`, {
      ...BASE_OPTIONS,
    });
    return response.json();
  }
}

export default DATA;
