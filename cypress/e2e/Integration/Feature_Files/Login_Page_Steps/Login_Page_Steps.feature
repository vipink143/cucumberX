# Feature: Test Login feature

#     Scenario: login functionatilty with valid credentials
#     Given Visit the website
#     When Provide mobile number in the text field "2371387288"
#     Then Click on send otp button for login
#     When Enter the otp
#     Then Click on submit button



#     Scenario: login functionatilty with invalid credentials
#     Given Visit the website
#     When Provide mobile number in the text field "2371387289"
#     Then Click on send otp button for login
#     Then Verify the error message


Feature: Login functionality

    Scenario: Login with valid mobile
        # Given Visit the website
        When I login with valid mobile number "2371387289"

    Scenario: Login with invalid mobile
        # Given Visit the website
        When I login with invalid mobile number "2371387289"
