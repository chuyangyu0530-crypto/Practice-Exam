let patients = [];

/**
 * Find a patient with the given name in the clinic register.
 * @param {string} patientName - The name of the patient.
 * @returns {?} If the patient exists, it returns the patient object that includes
 * patientId(number), name(string), age(number) and checkedIn(boolean).
 */
export function findPatient(patientName: boolean) {
  return patients.find((patient) => patient.name === patientName);
}

/**
 * Register a new patient in the clinic.
 * @param {Patient Object} patient - The patient details object.
 * - The patient details object includes name(string) and age(number) values.
 * @returns {patientId Object} Returns the patientId as a number in an object, or
 * an error(string) in an object when the patient is already registered.
 */
export function registerPatient(patient): number {
  if (findPatient(patient.name)) {
    return { error: 'Patient already registered' };
  }

  const patientId = patients.length + 1;
  const newPatient = {
    patientId: patientId,
    name: patient.name,
    age: patient.age,
    checkedIn: false
  };
  patients.push(newPatient);
  return { patientId: patientId };
}

/**
 * Update the check-in status of a patient.
 * @param {number} patientId - The id of the patient.
 * @param {boolean} checkedIn - The check-in status to be updated.
 * @returns {Object} Returns an empty object, or an object containing an
 * error(string) when the patient id is invalid.
 */
export function updateCheckIn(patientId, checkedIn) {
  const patient = patients.find((item) => item.patientId === patientId);
  if (!patient) {
    return { error: 'Invalid patient Id' };
  }
  patient.checkedIn = checkedIn;
  return {};
}

/**
 * Clear the clinic patient register.
 * @returns {Object} An empty object.
 */
export function clear() {
  patients = [];
  return {};
}
