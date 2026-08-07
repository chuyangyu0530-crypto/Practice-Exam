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
Which is a factor in maintainable software?
  * A. It has no tests.
  * B. Every feature is placed in one function.
  * C. It is easy to find what must be changed.
  * D. Only its original author can understand it.



### Q2: 
Which is an example of a style issue?
  * A. Accessing an undefined variable
  * B. Returning the wrong business result
  * C. Inconsistent indentation
  * D. A failed HTTP connection



### Q3: 
In the Git tree model, what is a branch such as `master`?
  * A. A network protocol
  * B. A list of npm dependencies
  * C. A copy of the operating system
  * D. A pointer to a particular commit



### Q4: 
Which statement correctly compares hashing and encryption?
  * A. Encryption is reversible with a key; hashing is intended to be irreversible.
  * B. Encryption can never restore plaintext.
  * C. Both are always reversible.
  * D. Hashing requires a decryption key.



### Q5: 
Which statement imports NodeJS’s built-in `fs` library?
  * A. #include <fs>
  * B. import fs from 'fs';
  * C. export fs from './fs';
  * D. npm run fs



### Q6: 
Which statement best describes JavaScript in the lecture?
  * A. A low-level assembly language
  * B. A hardware description language
  * C. A database query language
  * D. A high-level, multi-paradigm scripting language widely used for web applications



### Q7: 
Which storage approach is non-persistent?
  * A. Relational database storage
  * B. In-file storage
  * C. In-memory storage
  * D. NoSQL database storage



### Q8: 
What is the presentation time limit?
  * A. 30 seconds
  * B. 3 minutes
  * C. 30 minutes
  * D. 10 minutes



### Q9: 
What is one stated benefit of EAFP?
  * A. It prevents every operation from executing.
  * B. It requires no exception handler.
  * C. It guarantees perfectly structured control flow.
  * D. Multiple error types may be handled in one catch block.



### Q10: 
What is a higher-order function in the lecture’s later example?
  * A. A function that can only add numbers
  * B. A function declared inside JSON
  * C. A function with a large line number
  * D. A function that returns another function



## Theory - Multiple Choice - Multi Select (5 questions, 2 marks each, 10 marks total)



### Q11: 
Which uses of models are listed in the lecture?
  * A. Automatically prove that every implementation is correct.
  * B. Prevent stakeholders from understanding the current state of affairs.
  * C. Predict future states of affairs.
  * D. Determine past states of affairs.
  * E. Communicate fundamental principles and basic functionality.



### Q12: 
Which statements are true of User Acceptance Testing?
  * A. It requires testers to inspect every private implementation detail.
  * B. It evaluates the system against user needs and acceptance criteria.
  * C. It is black-box testing.
  * D. Customers or users commonly participate.
  * E. It can include performance-based or stress testing.



### Q13: 
Which statements distinguish network, internet, and web as presented?
  * A. HTTP is a database-table format.
  * B. The three terms are exact synonyms.
  * C. The internet is global networking infrastructure.
  * D. The web is linked documents/resources accessible through URLs.
  * E. A network is a group of communicating computers.



### Q14: 
Which ideas are associated with DevOps in the lecture?
  * A. Maintaining quality while reducing delivery time
  * B. A strict rule that only one specialist may understand deployment
  * C. Overlap between development, deployment, and quality assurance skills
  * D. Less separation or siloing between teams
  * E. Automation and collaboration around releases



### Q15: 
Which components can appear in scenario-oriented acceptance criteria?
  * A. Compile every source file before stating the scenario
  * B. Then an expected result follows
  * C. When an action occurs
  * D. Given a precondition
  * E. And an additional action or condition



## Cyclomatic Complexity (3 marks)

Consider the following Functions 1 and 2:

Function 1:

```ts
function sumPositive(nums: number[]): number {
  let total = 0;
  for (const n of nums) {
    if (n > 0) total += n;
  }
  return total;
}
```

Function 2:
```ts
function findTopScorers(classes: number[][], minPass: number): number[] {
  const result: number[] = [];
  for (const group of classes) {
    let best = -Infinity;
    for (const s of group) {
      if (s >= minPass && s > best) best = s;
      if (s === 0) continue; // new branch
      if (s < 0) break;      // new branch
    }
    if (best !== -Infinity) result.push(best);
    else result.push(0);     // added alternate path
  }
  return result;
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
function, modify `pets.ts` such that it is type-safe and lint free.
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

## Sweet Treats (20 Marks total)

As the weather gets warmer, it's always tempting to get some ice cream. However, not every moment is the right time for a frozen treat. To help us decide, we have created a function `calculateSuitability` to determine whether now is a good time for ice cream in `q10/icecream.ts`. 

There is a small problem though - there are currently no tests for it!

### Task

Your task is to write tests to reach 100% coverage.

#### Part 1 - Basic Coverage (10 Marks)

In `q10/icecream.test.ts`:

- Write at most four tests for the `shouldIGetIceCream` function.
- Your goal is to achieve 100% statement coverage in `icecream.ts`.

Notes:
- We count tests based on the number of function calls i.e. four calls max.
- Each test case in test.each counts toward the maximum test limit.
- You can assume that the implementation is correct when writing your tests.
- Your test clarity/design will not be assessed. We are only assessing statement coverage.

##### Testing
You can use the following command to run the test and generate a coverage report:

```bash
npm run test-icecream
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

 - statement coverage: `npm run test-icecream`

#### Part 2 - HTTP Coverage (10 Marks)

In `q10/server.test.ts`:

- Write at most four HTTP tests for the `/icecream/decide` route in `q10/server.ts`.
- Your goal is to achieve 100% statement coverage in `icecream.ts` and `server.ts`.
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


## Chess Timer (15 marks)

Chess is a very interesting game that can take a long time to play! However, we just want to create a simple timer for speed chess games that will be played in just 2 minutes (or 120 seconds)!

Each round a player has a chance to make a move within 15 seconds. If they do not make a move, we skip their turn. If the game has no outcome within 120 seconds, we will also end the game.

You may assume that any move that follows the valid format checked by `isValidMoveFormat()` function is also a valid move. You do not need to keep track of the board state, only the timers and movement between turns.

### Task

You will implment a basic chess timer state machine which will begin a chess match and allow for moves. If any of the timers ends (120s since start or 15s since last move), then the game ends with a timeout. The chess timer will keep track of which player currently has their turn. A player is given 15 seconds to make a move before their turn is skipped. After a move, if 20 turns have been taken in total, then the game is declared a draw.

To fulfil this task, you must implement at least the following two functions:
1. `startGame()`
2. `makeMove()`

Here is the state diagram:

 ![Chess State Diagram](./q12/chess_state_diagram.png)

#### Interface
Implement these functions in `q12/chess.ts`:

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
         <td><code>startGame</code></td>
         <td>
            <p>Starts a chess timer with a 120-second limit.</p>
            <p>
               If the chess game hasn't ended within that time,
               <code>"TIMEOUT: END"</code> should be printed.
            </p>
         </td>
         <td>N/A</td>
         <td>
            <ul>
               <li>
                  <code>"Error: IN_PROGRESS"</code> printed if a chess timer is already in
                  progress
               </li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Game started! WHITE's turn"</code> printed on success</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>makeMove</code></td>
         <td>
            <p>
               The current player makes a move
            </p>
            <p>
               If no move is made within 15 seconds, then the current turn is skipped and the other player make take their turn 
               <code>"TIMEOUT: WHITE_TURN"</code> or <code>"TIMEOUT: BLACK_TURN"</code> is printed
            </p>
         </td>
         <td>
            <ul>
               <li>
                  <code>player</code>: the player making the move
               </li>
               <li><code>move</code>: a string representing a move from one square of the board to another</li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Error: GAME_OVER"</code> is printed if game is not active</li>
               <li>
                  <code>"Error: INVALID_TURN"</code> is printed if it is not the current players turn.
               </li>
               <li>
                  <code>"Error: INVALID_MOVE"</code> is printed if the provided move is not in a valid format
               </li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"WHITE's turn"</code> is printed on success if BLACK made a move</li>
               <li><code>"BLACK's turn"</code> is printed on success if WHITE made a move</li>
               <li><code>"Draw!"</code> is printed on success if 20 moves have been taken</li>
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
         <td><code>getGameState</code></td>
         <td>retrieves the current state of the game</td>
         <td>N/A</td>
         <td> An object with the following properties
            <li><code>active</code>: 0 if the auction is not active, 1 otherwise </li>
            <li><code>turn</code>: The current player's turn - either WHITE or BLACK</li>
            <li><code>moveCount</code>: The number of moves taken so far</li>
         </td>
      </tr>
      <tr>
         <td><code>isValidMoveFormat</code></td>
         <td>checks to see if a move string follows the correct format</td>
         <td><code>move</code>: a string indicating an attempted move</td>
         <td><ul>
         <li><code>true</code> if the move is of a valid format</li>
         <li><code>false</code>if the move is NOT of a valid format</li>
         </ul></td>
      </tr>
      <tr>
         <td><code>checkGameEnd</code></td>
         <td>checks to see if a gameEnd condition like 20 or more moves has been met</td>
         <td>N/A</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><code>clear</code></td>
         <td>resets the auction and clears all timers</td>
         <td>N/A</td>
         <td><ul>
         <li><code>'DRAW'</code> if 20 or more moves have been taken for this chess timer</li>
         <li><code>false</code>if fewer than 20 moves have been taken</li>
         </ul></td>
      </tr>
   </tbody>
</table>

### Marking

When you think your program is working, you can run some simple automated checks:
 - tests: `npm run test`
 - type check: `npm run tsc`
 
No additional tests will be run. Therefore, any behavior not covered by the given tests will be considered undefined.