export interface RentalBooking {
  bookingId: number;
  driverCriteria: {
    age?: number;
    licenceVerified?: true;
    yearsLicensed?: number;
    paymentVerified?: true;
    termsAccepted?: true;
  };
}

/**
 * Validates a single vehicle rental booking.
 */
export function validateRentalBooking(booking: RentalBooking): string {
  // TODO: complete me
  return 'Data in correct format. Proceed to vehicle collection.';
}
