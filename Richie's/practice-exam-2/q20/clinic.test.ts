import {
  findPatient,
  registerPatient,
  updateCheckIn,
  clear,
} from './clinic.ts';

describe('clinic types and behaviour', () => {
  beforeEach(() => {
    clear();
  });

  test('adds the first item and returns id 1', () => {
    expect(registerPatient({ name: 'Alice Nguyen', age: 34 })).toEqual({ patientId: 1 });
  });

  test('finds an added item with its generated fields', () => {
    registerPatient({ name: 'Alice Nguyen', age: 34 });
    expect(findPatient('Alice Nguyen')).toEqual({ patientId: 1, name: 'Alice Nguyen', age: 34, checkedIn: false });
  });

  test('returns undefined when the item does not exist', () => {
    expect(findPatient('Alice Nguyen')).toBeUndefined();
  });

  test('increments ids for later items', () => {
    expect(registerPatient({ name: 'Alice Nguyen', age: 34 })).toEqual({ patientId: 1 });
    expect(registerPatient({ name: 'Ben Lee', age: 22 })).toEqual({ patientId: 2 });
  });

  test('rejects a duplicate item without consuming an id', () => {
    registerPatient({ name: 'Alice Nguyen', age: 34 });
    expect(registerPatient({ name: 'Alice Nguyen', age: 34 })).toEqual({
      error: 'Patient already registered',
    });
    expect(registerPatient({ name: 'Ben Lee', age: 22 })).toEqual({ patientId: 2 });
  });

  test('updates an existing item', () => {
    registerPatient({ name: 'Alice Nguyen', age: 34 });
    expect(updateCheckIn(1, true)).toEqual({});
    expect(findPatient('Alice Nguyen')).toEqual({ patientId: 1, name: 'Alice Nguyen', age: 34, checkedIn: true });
  });

  test('returns the required error for an invalid id', () => {
    expect(updateCheckIn(999, true)).toEqual({
      error: 'Invalid patient Id',
    });
  });

  test('clear removes all items and resets id generation', () => {
    registerPatient({ name: 'Alice Nguyen', age: 34 });
    expect(clear()).toEqual({});
    expect(findPatient('Alice Nguyen')).toBeUndefined();
    expect(registerPatient({ name: 'Ben Lee', age: 22 })).toEqual({ patientId: 1 });
    expect(findPatient('Ben Lee')).toBeDefined();
  });
});
