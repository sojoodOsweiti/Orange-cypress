Feature: Add a new candidate  
    Scenario: Verify add new user with valid data 
        Given Click on recruitment page
        When Click on add button
        And Enter first name
        And Enter last name
        And Enter Email
        And Click on save button
        Then The candidate is added