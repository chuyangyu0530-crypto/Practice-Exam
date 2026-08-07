---
title: Q02. Vehicle Rental (6 marks)
description: ''
---

Vehicle-rental companies validate bookings before allowing customers to
collect a vehicle. Drivers must meet minimum age and experience requirements,
and the required licence, payment, and agreement checks must be complete.

You have been asked to validate rental bookings before collection.

## Task

Complete the function in `q02-vehicle-rental/vehicleRental.ts`, based on the
function header comment and interface below.

- You should **NOT** modify the function prototype or parameter.
- Throw errors using `throw new Error(...)`.
- Error messages must match the specified text exactly.
- If more than one error applies, throw the first applicable error in the
  order shown in the table.
- You can validate your implementation by checking all provided tests pass.

### Interface

```ts
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
```

<table>
  <thead>
    <tr>
      <th>Function</th>
      <th>Parameters</th>
      <th>Thrown Errors (with EXACT message)</th>
      <th>Success</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>validateRentalBooking</code><br/>
        Validates a single vehicle rental booking.
      </td>
      <td>
        <code>booking</code> - the input object to validate
      </td>
      <td>
        <ul>
          <li>
            <code>"Driver is underage."</code><br/>
            if the driver is younger than 21 years old
          </li>
          <br/>
          <li>
            <code>"Driving experience of '&lt;yearsLicensed&gt;' year/s insufficient."</code><br/>
            if the driver has held a licence for less than 2 years
          </li>
          <br/>
          <li>
            <code>"Provided bookingId '&lt;bookingId&gt;' not in range."</code><br/>
            if <code>bookingId</code> is not exactly 8 digits
          </li>
          <br/>
          <li>
            <code>"Incomplete booking. Missing field/s; '&lt;missing fields&gt;', '&lt;another missing field&gt;'."</code><br/>
            if any field in <code>driverCriteria</code> is missing.<br/>
            Fields must be comma-separated and listed in alphabetical order.
            For example:<br/>
            <code>"Incomplete booking. Missing field/s; 'age', 'licenceVerified'."</code>
          </li>
        </ul>
      </td>
      <td>
        Return the string:<br/>
        <code>"Data in correct format. Proceed to vehicle collection."</code>
      </td>
    </tr>
  </tbody>
</table>
