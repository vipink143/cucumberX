Feature: Home page functionality

    Background:
        Given Visit the website
        When Provide mobile number in the text field "2371387288"
        Then Click on send otp button for login
        When Enter the otp
        Then Click on submit button

    Scenario: Verify the ticket dashboard
        Then Verify the ticket text in the dashboard

    Scenario: Verify the search functionality
        When Click on search box and type the text in the search box 'AL-1171986'
      


    # Scenario: Verify the dropdown functionality
    #     When Click on the dropdown
    #     Then Type the search text and enter


    Scenario: Verify the more filter button is clickable
        When Click on more filter button
        Then Verify the more filter page