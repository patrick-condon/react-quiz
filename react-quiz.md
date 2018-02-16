You've been tasked with making a quiz application in React!

![React Quiz 1][react-quiz-1]

## Setup
From your challenges directory, run the following:

```
$ et get react-quiz
$ cd react-quiz
$ bundle install
$ bundle exec ruby server.rb
```

Then in another terminal tab run:

```
$ npm install
$ npm start
```

If you go to [localhost:4567][localhost-4567], there will be nothing on the
page except React Quiz and there should be no errors in your console.


## Meets Expectations Requirements
1. Using React and the data supplied in `react/src/constants/data.js`, render a
     static page displaying the question and its possible answers. **You may not
     modify the data in this file**. On initial render, the page should not
     display either 'Correct!' or 'Incorrect' on the page.

     ![React Quiz 1][react-quiz-1]

2. Clicking on a correct answer updates the page to display 'Correct!' at the
     bottom of the answers.

     ![React Quiz 2][react-quiz-2]

3. Clicking on an incorrect answer updates the page to display 'Incorrect' at the
     bottom of the answers.

     ![React Quiz 3][react-quiz-3]

## Exceeds Expectations Requirements
**Make sure you stop and save your work at this point. The Exceeds Expectations portion will break your Meets Expectations code**

1. Add an API endpoint to the Sinatra application which responds to the following cURL GET request:

    ```sh
    $ curl http://localhost:4567/api/v1/questions.json
    ```

    The JSON response should be a random question with three incorrect answers
    and one correct answer. The following is an example of how the response
    body should be structured:

    ```sh
    {"question":{"id":1,"body":"What is the best JavaScript Framework?"},"answers":[{"id":1,"body":"React","question_id":1,"correct":true},{"id":2,"body":"Ember","question_id":1,"correct":false},{"id":3,"body":"Angular2","question_id":1,"correct":false},{"id":4,"body":"Rails","question_id":1,"correct":false}]};
    ```

2. When a correct answer is selected, your React application should now display a button with the text "Next Question".

     ![React Quiz 4][react-quiz-4]

     Clicking on the button will update the application to show a question randomly chosen from the server.
     The page should not display either 'Correct!' or 'Incorrect' on the page.

     ![React Quiz 5][react-quiz-5]

[localhost-4567]: http://localhost:4567
[react-quiz-1]: https://s3.amazonaws.com/horizon-production/images/react-quiz-1.png
[react-quiz-2]: https://s3.amazonaws.com/horizon-production/images/react-quiz-2.png
[react-quiz-3]: https://s3.amazonaws.com/horizon-production/images/react-quiz-3.png
[react-quiz-4]: https://s3.amazonaws.com/horizon-production/images/react-quiz-4.png
[react-quiz-5]: https://s3.amazonaws.com/horizon-production/images/react-quiz-5.png

3. For Exceeds Expectations, the first question displayed when the page loads should be the question given to you in the `constants/data.js` file. All subsequent questions should come from the `questions.json` file via your Sinatra API endpoint.

4. You should have two buttons: one "Fetch Questions" button that gets the questions from the API endpoint, and one "Next Question" button that displays the next question to the user.
