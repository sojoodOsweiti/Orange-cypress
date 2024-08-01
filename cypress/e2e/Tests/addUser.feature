Feature: Add a new user 
    Scenario: Verify add new user with valid data 
        Given Click on admin page
        When Click on add button
        And Select a role
        And Select a status
        And Select a role employee
        When Enter user name
        And Enter Password
        And Confirm password
        And Click on save button
        Then The user is added
        