---
title: Q03. Pet Adoption (6 marks)
description: ''
---

Animal shelters assess adoption applications before arranging interviews.
Applicants must meet minimum age and availability requirements and provide
confirmations about housing, identity, and ongoing animal care.

You have been asked to validate adoption applications before review.

## Task

Complete the function in `q03-pet-adoption/petAdoption.ts`, based on the
function header comment and interface below.

- You should **NOT** modify the function prototype or parameter.
- Throw errors using `throw new Error(...)`.
- Error messages must match the specified text exactly.
- If more than one error applies, throw the first applicable error in the
  order shown in the table.
- You can validate your implementation by checking all provided tests pass.

### Interface

```ts
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
        <code>validateAdoptionApplication</code><br/>
        Validates a single pet adoption application.
      </td>
      <td>
        <code>application</code> - the input object to validate
      </td>
      <td>
        <ul>
          <li>
            <code>"Applicant is below the minimum adoption age."</code><br/>
            if the applicant is younger than 21 years old
          </li>
          <br/>
          <li>
            <code>"Weekly home time of '&lt;weeklyHomeHours&gt;' hours insufficient."</code><br/>
            if the applicant is home for less than 20 hours per week
          </li>
          <br/>
          <li>
            <code>"Provided applicantId '&lt;applicantId&gt;' not in range."</code><br/>
            if <code>applicantId</code> is not exactly 7 digits
          </li>
          <br/>
          <li>
            <code>"Incomplete adoption application. Missing field/s; '&lt;missing fields&gt;', '&lt;another missing field&gt;'."</code><br/>
            if any field in <code>householdCriteria</code> is missing.<br/>
            Fields must be comma-separated and listed in alphabetical order.
            For example:<br/>
            <code>"Incomplete adoption application. Missing field/s; 'age', 'careAgreementAccepted'."</code>
          </li>
        </ul>
      </td>
      <td>
        Return the string:<br/>
        <code>"Data in correct format. Proceed to adoption review."</code>
      </td>
    </tr>
  </tbody>
</table>
