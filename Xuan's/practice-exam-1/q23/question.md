---
title: Q05. Scholarship Application (6 marks)
description: ''
---

Scholarship offices screen applications before academic assessment. An
applicant must meet the minimum academic mark, stay within the income limit,
and provide all enrolment, citizenship, and reference confirmations.

You have been asked to validate scholarship applications before assessment.

## Task

Complete the function in `q05-scholarship-application/scholarshipApplication.ts`, based on the
function header comment and interface below.

- You should **NOT** modify the function prototype or parameter.
- Throw errors using `throw new Error(...)`.
- Error messages must match the specified text exactly.
- If more than one error applies, throw the first applicable error in the
  order shown in the table.
- You can validate your implementation by checking all provided tests pass.

### Interface

```ts
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
        <code>validateScholarshipApplication</code><br/>
        Validates a single scholarship application.
      </td>
      <td>
        <code>application</code> - the input object to validate
      </td>
      <td>
        <ul>
          <li>
            <code>"Average mark of '&lt;averageMark&gt;' insufficient."</code><br/>
            if the average mark is less than 70
          </li>
          <br/>
          <li>
            <code>"Household income of '&lt;householdIncome&gt;' exceeds limit."</code><br/>
            if household income is greater than $80,000
          </li>
          <br/>
          <li>
            <code>"Provided applicationId '&lt;applicationId&gt;' not in range."</code><br/>
            if <code>applicationId</code> is not exactly 9 digits
          </li>
          <br/>
          <li>
            <code>"Incomplete scholarship application. Missing field/s; '&lt;missing fields&gt;', '&lt;another missing field&gt;'."</code><br/>
            if any field in <code>eligibilityCriteria</code> is missing.<br/>
            Fields must be comma-separated and listed in alphabetical order.
            For example:<br/>
            <code>"Incomplete scholarship application. Missing field/s; 'averageMark', 'citizenshipVerified'."</code>
          </li>
        </ul>
      </td>
      <td>
        Return the string:<br/>
        <code>"Data in correct format. Proceed to scholarship assessment."</code>
      </td>
    </tr>
  </tbody>
</table>
