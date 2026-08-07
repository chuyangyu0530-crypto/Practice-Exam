import { describe, expect, test } from '@jest/globals';
import { type ScholarshipApplication, validateScholarshipApplication } from './scholarshipApplication';

describe('validateScholarshipApplication', () => {
  const baseScholarshipApplication: ScholarshipApplication = {
    applicationId: 100234567,
    eligibilityCriteria: {
      averageMark: 82,
      citizenshipVerified: true,
      householdIncome: 45000,
      enrolledFullTime: true,
      referencesProvided: true,
    },
  };

  test('success - all criteria are valid', () => {
    expect(validateScholarshipApplication(baseScholarshipApplication)).toBe(
      "Data in correct format. Proceed to scholarship assessment.",
    );
  });

  test('error - the average mark is less than 70', () => {
    const invalidInput = {
      ...baseScholarshipApplication,
      eligibilityCriteria: {
        ...baseScholarshipApplication.eligibilityCriteria,
        averageMark: 69,
      },
    };

    expect(() => validateScholarshipApplication(invalidInput)).toThrow(
      "Average mark of '69' insufficient.",
    );
  });

  test('error - household income is greater than $80,000', () => {
    const invalidInput = {
      ...baseScholarshipApplication,
      eligibilityCriteria: {
        ...baseScholarshipApplication.eligibilityCriteria,
        householdIncome: 80001,
      },
    };

    expect(() => validateScholarshipApplication(invalidInput)).toThrow(
      "Household income of '80001' exceeds limit.",
    );
  });

  test('error - applicationId is not 9 digits', () => {
    const invalidInput = { ...baseScholarshipApplication, applicationId: 10012345 };

    expect(() => validateScholarshipApplication(invalidInput)).toThrow(
      "Provided applicationId '10012345' not in range.",
    );
  });

  test('error - one required field is missing', () => {
    const incompleteInput: ScholarshipApplication = {
      applicationId: 100234567,
      eligibilityCriteria: {
        averageMark: 82,
        citizenshipVerified: true,
        // missing householdIncome
        enrolledFullTime: true,
        referencesProvided: true,
      },
    };

    expect(() => validateScholarshipApplication(incompleteInput)).toThrow(
      "Incomplete scholarship application. Missing field/s; 'householdIncome'.",
    );
  });

  test('error - multiple fields are missing and alphabetized', () => {
    const incompleteInput: ScholarshipApplication = {
      applicationId: 100234567,
      eligibilityCriteria: {},
    };

    expect(() => validateScholarshipApplication(incompleteInput)).toThrow(
      "Incomplete scholarship application. Missing field/s; 'averageMark', 'citizenshipVerified', 'enrolledFullTime', 'householdIncome', 'referencesProvided'.",
    );
  });
});
