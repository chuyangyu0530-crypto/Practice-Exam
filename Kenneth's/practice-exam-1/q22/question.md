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
