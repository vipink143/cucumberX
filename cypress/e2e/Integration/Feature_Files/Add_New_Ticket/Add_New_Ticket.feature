
Feature: Adding new ticket

    Background: Login the user and redirect to create new ticket page
        Given Visit the website
        When Provide mobile number in the text field "2371387288"
        Then Click on send otp button for login
        When Enter the otp
        Then Click on submit button
        When Click on add new ticket button
        Then Verify the ticket creation page




    Scenario: Creating new ticket
    When Click on the city dropdown
