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
What is the key difference between `let` and `const` shown in the slides?
  * A. A `let` variable can be reassigned, while a `const` binding cannot be reassigned.
  * B. `const` can be used only inside loops.
  * C. `let` creates strings while `const` creates numbers.
  * D. `let` automatically makes a variable global.



### Q2: 
Which is an example of testing in the small?
  * A. A requirements interview
  * B. A deployment to production
  * C. A unit test of one function in isolation
  * D. A full system acceptance test



### Q3: 
What is maintainability?
  * A. The speed of one particular function only
  * B. The number of users currently online
  * C. The requirement that code never changes
  * D. The ease with which software can be modified to fix faults, improve it, or adapt it



### Q4: 
Which is a valid representation of a use case?
  * A. An informal written list of steps
  * B. Only a package-lock file
  * C. Only a performance graph
  * D. Only an executable binary



### Q5: 
Who typically uses UAT results to decide whether the system should be accepted?
  * A. Only the package manager
  * B. An unrelated external developer
  * C. Only the compiler
  * D. Users, customers, or another authorised entity



### Q6: 
What is NPM used for in a NodeJS project?
  * A. Creating Git branches
  * B. Drawing state diagrams
  * C. Encrypting HTTP traffic
  * D. Managing external packages and project dependencies



### Q7: 
Which change helped make software updates more frequent?
  * A. The removal of networks from software systems
  * B. Disabling automated pipelines
  * C. A return to shipping every update on a CD
  * D. The growth of web-based applications and improved internet connectivity



### Q8: 
What is an anonymous function?
  * A. A private Git commit
  * B. A function expression without a name, often used once as an argument
  * C. A function stored only in XML
  * D. A function that cannot run



### Q9: 
Which definition matches a network?
  * A. A collection of Git branches only
  * B. A group of interconnected computers that can communicate
  * C. A single JavaScript function
  * D. Every document on one computer



### Q10: 
What is type inference?
  * A. A Git branch is renamed automatically.
  * B. The programmer removes all types.
  * C. TypeScript determines a type from the assigned value or context.
  * D. A runtime exception guesses the answer.



## Theory - Multiple Choice - Multi Select (5 questions, 2 marks each, 10 marks total)



### Q11: 
Which statements correctly describe cohesion and coupling?
  * A. Excessive coupling can contribute to spaghetti code.
  * B. Low coupling means modules have limited interdependence.
  * C. Good design requires every module to modify the internal data of every other module.
  * D. High cohesion means elements of a module contribute to one well-defined purpose.
  * E. Keeping related behaviour together can improve cohesion.



### Q12: 
Which cloud services are named as deployment examples?
  * A. Amazon Web Services
  * B. Vercel
  * C. Jest
  * D. Google App Engine
  * E. ESLint



### Q13: 
Which statements describe validation?
  * A. It checks alignment with stakeholder needs.
  * B. It confirms written requirements agree with stakeholder requests.
  * C. It ignores the intended use, goals, and objectives.
  * D. It asks whether the right system is being built.
  * E. It is concerned only with code formatting.



### Q14: 
Which statements describe well-written requirements according to the lecture?
  * A. They should be complete by describing all required facilities.
  * B. They should be precise enough to avoid multiple interpretations.
  * C. Non-functional goals should be made measurable where possible.
  * D. They should be consistent and avoid contradictions.
  * E. Ambiguity is useful because each developer can choose a different meaning.



### Q15: 
Which fields are included in the use-case background template?
  * A. The colour of every source-code token
  * B. Preconditions
  * C. Primary actor
  * D. Success and failed end conditions
  * E. Trigger



## Cyclomatic Complexity (3 marks)

Consider the following Functions 1 and 2:

Function 1:

```ts
function hasKeyword(texts: string[], kw: string): boolean {
  for (const t of texts) {
    if (t.includes(kw)) return true;
  }
  return false;
}

```

Function 2:
```ts
function filterAndBucket(values: number[]): { evens: number[]; odds: number[] } {
  const evens: number[] = [];
  const odds: number[] = [];
  for (const v of values) {
    if (v % 2 === 0) evens.push(v);
    else odds.push(v);
    if (v === 0) console.log("Zero found"); // extra branch
  }
  for (let i = 0; i < evens.length; i++) {
    if (evens[i] < 0) evens[i] = 0;
    else if (evens[i] > 100) evens[i] = 100; // extra path
  }
  if (odds.length === 0) console.log("No odds"); // extra if
  return { evens, odds };
}

```

In `q16.md`, Answer the following:

a) What is the cycolmatic complexity of Function 1? (1 mark)

b) What is the cyclomatic complexity of Function 2? (2 marks)

## SDLC (4 marks)

The Software Development Life Cycle (SDLC) is used as a guideline for software creation.

In `q17.md`:

 - a) What are the various stages of the Software Development Life Cycle? (3 marks).
 - b) Give an example that might cause you to start the cycle again? (1 marks).

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

## Animal Shelter API — Implement the Express Routes (10 marks)

### Context

Manage animals currently registered at a small shelter.

### Task

Complete `server.ts` by implementing the five missing routes described in `swagger.yaml`.
The `DELETE /clear` route is already complete. The backend logic and data store are also complete and must not be modified.

Your routes must:

- call the matching exported function in `logic.ts`;
- obtain values from the JSON body, request headers, path parameters, and query parameters exactly as specified by `swagger.yaml`;
- convert numeric path, header, and query values to numbers before calling the logic layer;
- convert boolean query values from the strings `"true"` and `"false"` where required;
- return successful results with HTTP status `200`;
- return logic errors with HTTP status `400`, except `INVALID_STAFF_TOKEN`, which must use HTTP status `403`.

The list route uses the `species` query parameter. The delete route also consumes the `reason` query parameter.

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

## Movie Time! (20 Marks)

When work stresses us out, we sometimes like to relax by watching a movie. We shouldn't always be watching movies though, so to help us out, we have created a function `shouldIWatchMovie` to determine whether today is a good day for the beach in `q10/movie.ts`. 

There is a small problem though - there are currently no tests for it!

### Task

Your task is to write tests to reach 100% coverage.

#### Part 1 - Basic Coverage (10 Marks)

In `q10/movie.test.ts`:

- Write at most four tests for the `shouldIWatchMovie` function.
- Your goal is to achieve 100% statement coverage in `movie.ts`.

Notes:
- We count tests based on the number of function calls i.e. four calls max.
- Each test case in test.each counts toward the maximum test limit.
- You can assume that the implementation is correct when writing your tests.
- Your test clarity/design will not be assessed. We are only assessing statement coverage.

##### Testing
You can use the following command to run the test and generate a coverage report:

```bash
npm run test-movie
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

 - statement coverage: `npm run test-movie`

#### Part 2 - HTTP Coverage (10 Marks)

In `q10/server.test.ts`:

- Write at most four HTTP tests for the `/movie/decide` route in `q10/server.ts`.
- Your goal is to achieve 100% statement coverage in `movie.ts` and `server.ts`.
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