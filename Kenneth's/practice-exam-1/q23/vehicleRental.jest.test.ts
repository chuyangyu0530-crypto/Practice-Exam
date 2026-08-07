import { describe, expect, test } from '@jest/globals';
import { type RentalBooking, validateRentalBooking } from './vehicleRental';

describe('validateRentalBooking', () => {
  const baseRentalBooking: RentalBooking = {
    bookingId: 10234567,
    driverCriteria: {
      age: 25,
      licenceVerified: true,
      yearsLicensed: 4,
      paymentVerified: true,
      termsAccepted: true,
    },
  };

  test('success - all criteria are valid', () => {
    expect(validateRentalBooking(baseRentalBooking)).toBe(
      "Data in correct format. Proceed to vehicle collection.",
    );
  });

  test('error - the driver is younger than 21 years old', () => {
    const invalidInput = {
      ...baseRentalBooking,
      driverCriteria: {
        ...baseRentalBooking.driverCriteria,
        age: 20,
      },
    };

    expect(() => validateRentalBooking(invalidInput)).toThrow(
      "Driver is underage.",
    );
  });

  test('error - the driver has held a licence for less than 2 years', () => {
    const invalidInput = {
      ...baseRentalBooking,
      driverCriteria: {
        ...baseRentalBooking.driverCriteria,
        yearsLicensed: 1,
      },
    };

    expect(() => validateRentalBooking(invalidInput)).toThrow(
      "Driving experience of '1' year/s insufficient.",
    );
  });

  test('error - bookingId is not 8 digits', () => {
    const invalidInput = { ...baseRentalBooking, bookingId: 1012345 };

    expect(() => validateRentalBooking(invalidInput)).toThrow(
      "Provided bookingId '1012345' not in range.",
    );
  });

  test('error - one required field is missing', () => {
    const incompleteInput: RentalBooking = {
      bookingId: 10234567,
      driverCriteria: {
        age: 25,
        licenceVerified: true,
        // missing yearsLicensed
        paymentVerified: true,
        termsAccepted: true,
      },
    };

    expect(() => validateRentalBooking(incompleteInput)).toThrow(
      "Incomplete booking. Missing field/s; 'yearsLicensed'.",
    );
  });

  test('error - multiple fields are missing and alphabetized', () => {
    const incompleteInput: RentalBooking = {
      bookingId: 10234567,
      driverCriteria: {},
    };

    expect(() => validateRentalBooking(incompleteInput)).toThrow(
      "Incomplete booking. Missing field/s; 'age', 'licenceVerified', 'paymentVerified', 'termsAccepted', 'yearsLicensed'.",
    );
  });
});
