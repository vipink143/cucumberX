Feature: Home page functionality

    Background:

        # Given Visit the website
        When I login with valid mobile number "2371387289"


        
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

    Scenario: Verify the dropdown
        When Click on the dropdown
        Then Select the multiple value from the dropdown
        And Verify the selected status

    Scenario: Verify add new ticket button is clickable
        When Click on add new ticket button
        Then Verify the ticket creation page