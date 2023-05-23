# Lab 8 - Starter

Gil Keidar

1.  Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    1. Within a GitHub action that runs whenever code is pushed.

    By doing this, I can write the test suite once (and modify it when needed),
    and know that whenever I push to the repository, the test suite will be run.
    This makes it less tedious as I don't have to manually run the tests for every change.

    Waiting to run the test suites after all development is completed could be disastrous as bugs could fester and at the end, I could find a really hard to fix bug as it's at the foundation of a lot of other code.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    No, it would be more appropriate to use unit testing for this case.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    Since this feature tests the interaction between individual components (i.e., want to check that the text the user wrote reached the other user) instead of testing an individual part by itself, I would use E2E testing instead of unit testing for this case.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    No, I would use E2E for this as well (I think this could be done by filling the text field with 80 characters, checking that the text filled so far matches what was sent, typing just one more character, and checking that the text filled so far matches the original text).


