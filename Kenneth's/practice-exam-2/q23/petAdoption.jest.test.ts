import { describe, expect, test } from '@jest/globals';
import { type AdoptionApplication, validateAdoptionApplication } from './petAdoption';

describe('validateAdoptionApplication', () => {
  const baseAdoptionApplication: AdoptionApplication = {
    applicantId: 1234567,
    householdCriteria: {
      age: 30,
      housingApproved: true,
      weeklyHomeHours: 35,
      identityVerified: true,
      careAgreementAccepted: true,
    },
  };

  test('success - all criteria are valid', () => {
    expect(validateAdoptionApplication(baseAdoptionApplication)).toBe(
      "Data in correct format. Proceed to adoption review.",
    );
  });

  test('error - the applicant is younger than 21 years old', () => {
    const invalidInput = {
      ...baseAdoptionApplication,
      householdCriteria: {
        ...baseAdoptionApplication.householdCriteria,
        age: 20,
      },
    };

    expect(() => validateAdoptionApplication(invalidInput)).toThrow(
      "Applicant is below the minimum adoption age.",
    );
  });

  test('error - the applicant is home for less than 20 hours per week', () => {
    const invalidInput = {
      ...baseAdoptionApplication,
      householdCriteria: {
        ...baseAdoptionApplication.householdCriteria,
        weeklyHomeHours: 12,
      },
    };

    expect(() => validateAdoptionApplication(invalidInput)).toThrow(
      "Weekly home time of '12' hours insufficient.",
    );
  });

  test('error - applicantId is not 7 digits', () => {
    const invalidInput = { ...baseAdoptionApplication, applicantId: 112345 };

    expect(() => validateAdoptionApplication(invalidInput)).toThrow(
      "Provided applicantId '112345' not in range.",
    );
  });

  test('error - one required field is missing', () => {
    const incompleteInput: AdoptionApplication = {
      applicantId: 1234567,
      householdCriteria: {
        age: 30,
        housingApproved: true,
        // missing weeklyHomeHours
        identityVerified: true,
        careAgreementAccepted: true,
      },
    };

    expect(() => validateAdoptionApplication(incompleteInput)).toThrow(
      "Incomplete adoption application. Missing field/s; 'weeklyHomeHours'.",
    );
  });

  test('error - multiple fields are missing and alphabetized', () => {
    const incompleteInput: AdoptionApplication = {
      applicantId: 1234567,
      householdCriteria: {},
    };

    expect(() => validateAdoptionApplication(incompleteInput)).toThrow(
      "Incomplete adoption application. Missing field/s; 'age', 'careAgreementAccepted', 'housingApproved', 'identityVerified', 'weeklyHomeHours'.",
    );
  });
});
