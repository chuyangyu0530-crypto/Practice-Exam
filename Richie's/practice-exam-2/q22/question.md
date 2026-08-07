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