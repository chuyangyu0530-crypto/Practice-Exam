export interface AdoptionApplication {
  applicantId: number;
  householdCriteria: {
    age?: number;
    housingApproved?: true;
    weeklyHomeHours?: number;
    identityVerified?: true;
    careAgreementAccepted?: true;
  };
}

/**
 * Validates a single pet adoption application.
 */
export function validateAdoptionApplication(application: AdoptionApplication): string {
  // TODO: complete me
  return 'Data in correct format. Proceed to adoption review.';
}
