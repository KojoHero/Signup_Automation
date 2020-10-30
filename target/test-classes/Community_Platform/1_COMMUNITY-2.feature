@COMMUNITY-190
@REQ_COMMUNITY-2
Feature: Marketplace

	#Tests As a user, an organization, or an individual, I want to register an account on the platform so that I can fully access the platform.
	#
	#*Acceptance Criteria*:
	#
	## When a user navigates to the signup page, the following fields should be available;
	#
	#* {color:#ff5630}required Email{color} 
	#* Password and
	#* confirm password.
	#* Radio button labels for Pre-selected "Organization", and "Individual"
	#* Sign Up button.
	#
	## The email field accepts only valid email addresses
	## The password is a minimum of 8 characters (alphanumeric & special characters)
	## The view Password option is available on a password text fields
	## Clicking sign up button prompts a message that a confirmation code has been sent to the user's email address.
	## (No Name) for absence of name. “No Name“ is not searchable
	@TEST_COMMUNITY-268 @REQ_COMMUNITY-8 @TESTSET_COMMUNITY-189
	Scenario Outline: Verify valid and invalid credentials
		           Given User navigates to community platform signup page
				    When  User enters an "<email>" and "<password>"
				    And   User "<confirm password>"
				    Then  user selects user type
				    And   User clicks on the signup button
				    Then  user should be noticed with a success or failure "<message>" depending on the credentials used
				
				Examples:
				    |   email                        |   password   | confirm password|  message|
				    |   testing.amalitech.com        |   12345678!A |      12345678!A|  |
				    |   testing.amalitech@gmailcom   |   12345678!A |	   12345678!A|  Check E-mail: Please enter the correct email address or phone number| 
				    |   testing.amalitech@gmail.com  |   12354678!A |	   12345678!A|  Check Password: There should be at least one lowercase character| 
				    |   testing.amalitech.gmail.com  |  12345678!Aa | 	  12345678!Aa|  |  
				    |   testing.amalitech@gmail.com  |  12345678!Aa | 	  12345678!Aa|  A confirmation has been sent to your email. Please retrieve the code and confirm acount|
				    |   testing.amalitech@gmail.com  |   12345678!A | 		         |  Check Password: There should be at least one lowercase character|
				    |   testing.amalitech@gmail.com  |              | 	  12345678!Aa|  Check Password: There should be at least one lowercase character| 
				    |   testing.amalitech@gmail.com  |              | 	          	 |  Check Password: There should be at least one lowercase character|
				    |                                |  12345678!Aa | 	  12345678!Aa|  Check E-mail: Please enter the correct email address or phone number| 
				    |   testing.amalitech@gmail.com  |  12345678!Aa |     12345678!Aa|  User with this email already exists|        
				
