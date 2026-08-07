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
Which statement best describes JavaScript in the lecture?
  * A. A low-level assembly language
  * B. A hardware description language
  * C. A database query language
  * D. A high-level, multi-paradigm scripting language widely used for web applications



### Q2: 
Which activity belongs to MVP planning?
  * A. Removing all models and prototypes
  * B. Ignoring design challenges until launch
  * C. Building every production integration immediately
  * D. Creating a wireframe to discuss with potential users



### Q3: 
Why are data interchange formats useful?
  * A. They replace HTTP servers with Git.
  * B. They remove all need for data.
  * C. They allow applications and languages to exchange or store data using a common representation.
  * D. They make every program use the same operating system.



### Q4: 
What does ESLint use to determine which rules apply?
  * A. A JSON data store of application users
  * B. A configuration file such as `.eslintrc.js`
  * C. A Git commit message only
  * D. The user’s browser history



### Q5: 
Which statement correctly distinguishes software safety and security in the lecture?
  * A. Safety and security are identical.
  * B. Security protects against accidents; safety protects against attackers.
  * C. Safety concerns only passwords; security concerns only arrays.
  * D. Safety protects against accidental misuse; security protects against deliberate misuse.



### Q6: 
What should meeting minutes normally record?
  * A. Every Git object
  * B. Only source code
  * C. Only the meeting start time
  * D. Attendees, discussion points, and actions



### Q7: 
Which statement best describes the value of a conceptual model during design?
  * A. It replaces every requirement and every test.
  * B. It helps communicate fundamental system ideas at a level stakeholders can understand.
  * C. It must include all low-level source-code details.
  * D. It guarantees the implementation contains no defects.



### Q8: 
What is a pipeline?
  * A. A JavaScript array method
  * B. A summary and sequence of automated jobs run for a commit
  * C. A persistent data file
  * D. A password hash



### Q9: 
Which usability statement is most verifiable?
  * A. The interface should feel pleasant.
  * B. After four hours of training, experienced users shall average no more than two errors per hour.
  * C. The system should be easy to use.
  * D. Users should probably learn it quickly.



### Q10: 
What is true of a default import name?
  * A. It must be placed inside braces.
  * B. It must always exactly match the exported function name.
  * C. It can import only built-in NodeJS modules.
  * D. The importing file can choose a different local name.



## Theory - Multiple Choice - Multi Select (5 questions, 2 marks each, 10 marks total)



### Q11: 
Which statements about NPM are supported by the lecture?
  * A. It replaces Git version control.
  * B. It manages dependencies/modules/libraries.
  * C. It can download packages from the NPM registry.
  * D. It can run custom scripts.
  * E. It is installed alongside NodeJS.



### Q12: 
Which statements distinguish in-memory and persistent state?
  * A. A file can be used to reconstruct in-memory state.
  * B. Saving to disk can provide persistence.
  * C. Persistent state can survive a server restart.
  * D. A global variable alone is automatically persistent.
  * E. In-memory state normally exists only while the process runs.



### Q13: 
Which statements correctly describe cohesion and coupling?
  * A. Excessive coupling can contribute to spaghetti code.
  * B. Low coupling means modules have limited interdependence.
  * C. Good design requires every module to modify the internal data of every other module.
  * D. High cohesion means elements of a module contribute to one well-defined purpose.
  * E. Keeping related behaviour together can improve cohesion.



### Q14: 
Which statements describe verification rather than validation?
  * A. Checking whether requirements contain the necessary elements.
  * B. Requirements verification ignores completeness.
  * C. Confirming that stakeholders wanted a different product.
  * D. Checking correctness and consistency of the written requirements.
  * E. Verification never compares a product with its required characteristics.



### Q15: 
Which statements are true of a Git commit?
  * A. It can include a message describing the change.
  * B. It records a snapshot of staged work.
  * C. It is created locally before it is pushed.
  * D. It forms part of the repository history.
  * E. It automatically installs dependencies.



## Cyclomatic Complexity (3 marks)

Consider the following Functions 1 and 2:

Function 1:

```ts
function countShort(names: string[], maxLen: number): number {
  let c = 0;
  for (const n of names) {
    if (n.length <= maxLen) c++;
  }
  return c;
}
```

Function 2:
```ts
function normalizeUsers(users: {name:string;active:boolean}[]): string[] {
  const active: string[] = [];
  const inactive: string[] = [];
  for (const u of users) {
    if (u.active) active.push(u.name.trim());
    else inactive.push(u.name.trim());
    if (!u.name) console.warn("Unnamed user"); // extra
  }
  for (let i = 0; i < inactive.length; i++) {
    if (inactive[i] === "") inactive[i] = "(unknown)";
    if (inactive[i].startsWith("temp")) inactive[i] = "(temporary)"; // extra branch
  }
  if (active.length > inactive.length) active.push("(majority active)"); // +1
  return active.concat(inactive);
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
function, modify `library.ts` such that it is type-safe and lint free.
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

## Soccer Club (15 Marks)

Congratulations! You have become a very successful software engineer who made billions of dollars from their Xecaps software. Now the only reasonable thing to do is start your own Soccer (Association Football) Club!

Every club begins with a mighty name and a list of strong players. You can use your capabilities from software engineering to build some server routes to manage your club.


### Task
In `q9/server.ts`, implement the routes specified in the [swagger](./q9/swagger.yaml) interface in this folder or found in Gitlab.

You should not need to change the logic or the tests if you implement the server routes correctly.

### Testing
You can use the following command to start your server:

```bash
npm run start
# or to start in developer mode
npm run dev
```

You can use the following command to run tests:

```bash
npm run test
```

### Marking

When you think your program is working, you can run some simple automated checks:

 - tests: `npm run start` and in a separate process `npm run test`

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