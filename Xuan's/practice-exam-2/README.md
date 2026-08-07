# Personal Practice Exam

Welcome to your personal Practice Exam. You have 2 of these generated to help you practice.

Try to copy the conditions of the final exam:
1. 3 hours length
2. No access to the internet
3. Access to the following resources:
    1. Lecture Slides (week 01-12)
    2. Tutorial Solutions (week 01-11)
    3. Lab Solutions (all labs except lab13_deploy)
    4. Jest Expect
    5. Mozilla MDN docs for Javascript
    6. Complete Project Specification

Using AI to answer any questions before you have attempted them will not help you very much.

Good luck!



## Theory - Multiple Choice - Single Select (10 questions, 2 marks each, 20 marks total)



### Q1: 
What is the purpose of `git log`?
  * A. To show commit history
  * B. To remove Git from the computer
  * C. To stage all files
  * D. To resolve every merge conflict automatically



### Q2: 
How many slides are specified for the pitch?
  * A. 5
  * B. 20
  * C. 10
  * D. 3



### Q3: 
What does `JSON.parse(text)` produce?
  * A. A JavaScript value reconstructed from JSON text
  * B. An encrypted password
  * C. A YAML indentation level
  * D. A merge request



### Q4: 
Which conceptual model is specifically used to model databases?
  * A. A unit test
  * B. A weather forecast
  * C. A data model
  * D. A Git branch



### Q5: 
Which command is used in the example testing job?
  * A. node_modules delete
  * B. npm init pipeline
  * C. git checkout test
  * D. npm run test



### Q6: 
What does low branch coverage suggest?
  * A. Some scenarios or decision outcomes lack testing.
  * B. The test runner is faster.
  * C. The program has no conditions.
  * D. All user requirements are satisfied.



### Q7: 
Why is early requirements validation valuable?
  * A. It replaces all testing.
  * B. It finds misunderstandings before they cause expensive rework later.
  * C. It removes the need to speak with stakeholders.
  * D. It guarantees no requirement will ever change.



### Q8: 
What does `Object.keys(userData)` return?
  * A. A copy of every function in NodeJS
  * B. An array of the object’s property names
  * C. An array containing only numeric values
  * D. The object converted to a Boolean



### Q9: 
Which usability statement is most verifiable?
  * A. The interface should feel pleasant.
  * B. After four hours of training, experienced users shall average no more than two errors per hour.
  * C. The system should be easy to use.
  * D. Users should probably learn it quickly.



### Q10: 
Why might a long named import be written across multiple lines?
  * A. To improve readability when importing many items
  * B. To change runtime behaviour
  * C. To create more exported functions automatically
  * D. To avoid using braces



## Theory - Multiple Choice - Multi Select (5 questions, 2 marks each, 10 marks total)



### Q11: 
Which are requirements-elicitation techniques listed in the lecture?
  * A. Stakeholder interviews
  * B. Surveys cannot be used to elicit requirements
  * C. Focus groups are a deployment method rather than an elicitation technique
  * D. Skipping questions and immediately implementing a solution
  * E. Market research



### Q12: 
Which statements are true of a Git commit?
  * A. It can include a message describing the change.
  * B. It records a snapshot of staged work.
  * C. It is created locally before it is pushed.
  * D. It forms part of the repository history.
  * E. It automatically installs dependencies.



### Q13: 
Which input locations are demonstrated in Express routes?
  * A. Path variable through `req.params`
  * B. The response object as the client input
  * C. JSON body through `req.body`
  * D. Query string through `req.query`
  * E. Headers in an HTTP client request



### Q14: 
Which are recommended practices for acceptance criteria?
  * A. Make them deliberately impossible to achieve.
  * B. Make them so narrow that only one implementation is possible.
  * C. Make them measurable and testable.
  * D. Write them without seeking agreement from relevant people.
  * E. Document them before development.



### Q15: 
Which techniques are listed for requirements validation?
  * A. Prototyping
  * B. Ignoring ambiguous statements
  * C. Requirements review
  * D. Test design
  * E. Checks



## Cyclomatic Complexity (3 marks)

Consider the following Functions:

Function 1:

```ts
function findIndex(xs: string[], target: string): number {
  let i = 0;
  for (const x of xs) {
    if (x === target) return i;
    i++;
  }
  return -1;
}
```

Function 2:

```ts
function reduceByOp(rows: number[][], op: "sum"|"min"|"max"|"avg"): number[] {
  const out: number[] = [];
  for (const r of rows) {
    let acc = op === "sum" ? 0 : (op === "min" ? Infinity : -Infinity);
    for (const v of r) {
      switch (op) {
        case "sum": acc += v; break;
        case "min": if (v < acc) acc = v; break;
        case "max": if (v > acc) acc = v; break;
        case "avg": acc += v; break; // +1
      }
      if (v === 0) continue; // +1
    }
    if (op === "avg" && r.length > 0) acc = acc / r.length; // +1
    out.push(acc);
  }
  return out;
}

```

In `q16.md`, Answer the following:

a) What is the cycolmatic complexity of Function 1? (1 mark)

b) What is the cyclomatic complexity of Function 2? (2 marks)

## SDLC (4 marks)

In the Software Development Life Cycle (SDLC), we often have Testing shown as a stage of the cycle after development. However, for your projects we recommend a different approach called `Testing-based Development`.

In `q17.md`:

 - a) Explain what is meant by testing based development and black-box testing (2 marks).
 - b) Give an example of at least 2 assumptions that some test designers might make that would cause their tests to not be black box - i.e. think about how your own tests ight fail if you move them from your teams codebase to another teams code base. (2 marks).

## Static Verification (4 marks)

Not all bugs need to wait for a program to run. Static verification, as opposed to dynamic verification, helps find problems in code before it's executed.

In `q17.md`:

 - a) List two static verification techniques in JavaScript, or any other programming language (2 marks).
 - b) For each technique, give an example of an issue static verfication would find, that dynamic testing may not find (2 marks).

## Assorted Javascript Basics (10 marks)

Complete the functions mentioned in `q19/basic.js`

### Testing

You can use `npm run test` to test your code.

## Static Verification (10 marks)

Based on the JSDoc function header comments and your understanding of the
function, modify `clinic.ts` such that it is type-safe and lint free.
- You must type all function parameters.
- You must type all function return types.
- You must fix wrong function parameter types to match the given JSDoc.
- You may create interfaces or type aliases in the main file.
- You should NOT modify variable names, function prototypes, function
  parameters, nor any logic. You can validate this by checking all provided
  tests pass.


### Testing

You may run 'npm run test' to test your code.

You can run 'npm run tsc' to check your code for type-safety.

## Bicycle Fleet API — Implement the Express Routes (10 marks)

### Context

Manage bicycles in a campus bicycle-hire fleet.

### Task

Complete `server.ts` by implementing the five missing routes described in `swagger.yaml`.
The `DELETE /clear` route is already complete. The backend logic and data store are also complete and must not be modified.

Your routes must:

- call the matching exported function in `logic.ts`;
- obtain values from the JSON body, request headers, path parameters, and query parameters exactly as specified by `swagger.yaml`;
- convert numeric path, header, and query values to numbers before calling the logic layer;
- convert boolean query values from the strings `"true"` and `"false"` where required;
- return successful results with HTTP status `200`;
- return logic errors with HTTP status `400`, except `INVALID_ROLE`, which must use HTTP status `403`.

The list route uses the `available` query parameter. The delete route also consumes the `retired` query parameter.

### Files

- `server.ts` — **the only file students should edit**
- `swagger.yaml` — complete API contract
- `logic.ts` — completed business logic
- `dataStore.ts` — completed in-memory data store
- `server.jest.test.ts` — HTTP tests using `sync-request`
- `config.json` — port and base URL configuration

Marks are divided evenly across the five missing routes.

### Testing

As these tests are using a server, if you wish to test your server routes, remember to do the following:
1. Start your server in one terminal - `npm run start`
2. While the server is running, open another terminal and run `npm run test`

After you have finished, remember to shutdown your server.

## Beautiful Beaches (20 Marks total)

As summer approaches, it is import to enjoy our days at the beach. However some days may not be as appropriate as others. To help us out, we have created a function `calculateSuitability` to determine whether today is a good day for the beach in `q10/beach.ts`. 

There is a small problem though - there are currently no tests for it!

### Task

Your task is to write tests to reach 100% coverage.

#### Part 1 - Basic Coverage (10 Marks)

In `q10/beach.test.ts`:

- Write at most four tests for the `calculateSuitability` function.
- Your goal is to achieve 100% statement coverage in `beach.ts`.

Notes:
- We count tests based on the number of function calls i.e. four calls max.
- Each test case in test.each counts toward the maximum test limit.
- You can assume that the implementation is correct when writing your tests.
- Your test clarity/design will not be assessed. We are only assessing statement coverage.

##### Testing
You can use the following command to run the test and generate a coverage report:

```bash
npm run test-beach
```

##### Coverage Reports

1. In the exam environment
- To view the coverage report in a browser, you can run the following command:

```bash
display_html <path-to-index.html>
# For example
display_html $HOME/q10/coverage/lcov-report/index.html
```
2. Alternatively, right-click the index.html file > click "Copy Path", and paste this into a new browser tab.

##### Marking
When you think your program is working, you can run some simple automated checks:

 - statement coverage: `npm run test-beach`

#### Part 2 - HTTP Coverage (10 Marks)

In `q10/server.test.ts`:

- Write at most four HTTP tests for the `/beach/decide` route in `q10/server.ts`.
- Your goal is to achieve 100% statement coverage in `beach.ts` and `server.ts`.
- If you get strange coverage results like the first line is not covered or `404` is not covered, that is fine.

Notes:
- We count tests based on the number of HTTP requests i.e. four requests max.
- Each test case in test.each counts toward the maximum test limit.
- You can assume that the implementation is correct when writing your tests.
- Your test clarity/design will not be assessed. We are only assessing statement coverage.

Hint: consider how you might use part 1 of this question.

##### Testing
You can run the following command to start the server with coverage report:

```bash
npm run start-coverage
```
You can use the following command to run your http tests:

```bash
npm run test-server
```

##### Marking
When you think your program is working, you can run some simple automated checks:

 - statement coverage: `npm run start-coverage` and in a separate process `npm run test-server`

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


## Auction Timers (15 marks)

One of the most interesting ways to sell a product is to put it up for auction. Today you will implement a fast-paced auction that lasts only 30 seconds!

An auction starts with an item and a starting bid. Bidders can place a bid that is greater than the starting bid and current bid to be in the winning position in the auction. The auction ends if either 30seconds passes from the beginning of the auction or there is a period of 5 seconds with no bidder. Then whoever is the current winning bidder gets to claim the item!

### Task

You will implment a basic auction state machine which will begin an auction and take bids. If any of the timers ends (30s since start or 5s since last bid), then the auction ends and the winning bidder receives the item. 

To fulfil this task, you must implement at least the following two functions:
1. `startAuction()`
2. `placeBid()`

Here is the state diagram:

 ![Auction State Diagram](./q12/auction_state_diagram.png)

#### Interface
Implement these functions in `q12/auction.ts`:

Strings provided in the "Errors" and "Success" columns are to be written to console using `console.log`, not returned

<table>
   <thead>
      <tr>
         <th>Function</th>
         <th>Description</th>
         <th>Parameters</th>
         <th>Errors</th>
         <th>Success</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>startAuction</code></td>
         <td>
            <p>Starts a auction with a 30-second limit.</p>
            <p>
               If the auction hasn't ended within that time,
               <code>"TIMEOUT: END"</code> should be printed.
            </p>
         </td>
         <td>N/A</td>
         <td>
            <ul>
               <li>
                  <code>"Error: IN_PROGRESS"</code> printed if auction is already in
                  progress
               </li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Auction started! Starting bid: $100"</code> printed on success</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>placeBid</code></td>
         <td>
            <p>
               Places a bid. A bid must be placed within 5 seconds of the start or the previous bid.
            </p>
            <p>
               If no bid is made within 5 seconds, then the auction ends 
               <code>"TIMEOUT: SOLD to ${auction.currentBidder} for $${auction.currentBid}!"</code> is printed
            </p>
         </td>
         <td>
            <ul>
               <li>
                  <code>bidder</code>: the name of the person putting in a bid
               </li>
               <li><code>amount</code>: amount bid</li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Error: AUCTION_OVER"</code> is printed if auction is not active</li>
               <li>
                  <code>"Error: BID_TOO_LOW"</code> is printed if the amount in this bid is lower than the currentBid
               </li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Bid accepted: ${bidder} bids $${amount}"</code> is printed on success</li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

#### Provided Helper Functions

You may modify these if you wish

<table>
   <thead>
      <tr>
         <th>Function</th>
         <th>Description</th>
         <th>Parameters</th>
         <th>Returns</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>getAuctionState</code></td>
         <td>retrieves the current state of the auction</td>
         <td>N/A</td>
         <td> An object with the following properties
            <li><code>active</code>: 0 if the auction is not active, 1 otherwise </li>
            <li><code>currentBid</code>: The current highest bid</li>
            <li><code>currentBidder</code>: The name of the current highest bidder</li>
         </td>
      </tr>
      <tr>
         <td><code>clear</code></td>
         <td>resets the auction and clears all timers</td>
         <td>N/A</td>
         <td>N/A</td>
      </tr>
   </tbody>
</table>

### Marking

When you think your program is working, you can run some simple automated checks:
 - tests: `npm run test`
 - type check: `npm run tsc`

No additional tests will be run. Therefore, any behavior not covered by the given tests will be considered undefined.