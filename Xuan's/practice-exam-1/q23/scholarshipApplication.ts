export interface ScholarshipApplication {
  applicationId: number;
  eligibilityCriteria: {
    averageMark?: number;
    citizenshipVerified?: true;
    householdIncome?: number;
    enrolledFullTime?: true;
    referencesProvided?: true;
  };
}

/**
 * Validates a single scholarship application.
 */
export function validateScholarshipApplication(application: ScholarshipApplication): string {
  // TODO: complete me
  return 'Data in correct format. Proceed to scholarship assessment.';
}
