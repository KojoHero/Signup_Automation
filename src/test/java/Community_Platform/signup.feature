Feature: Sign up to account 
         Verify that user sign up is unsuccessful after passing incorrect credentials
         but successful only with valid credentials
         


Scenario Outline: User signs up with valid and invalid credentials
    Given User navigates to community platform signup page      
#    And   User clicks on the signup button on landing page    
    When  User enters an "<email>" and "<password>" 
    And   User "<confirm password>"      
    Then  user selects user type
    And   User clicks on the signup button 
    Then  user should be noticed with a success or failure "<message>" depending on the credentials used  
    

Examples:
    |   email                        |   password   |confirm password|  message| 
    |   testing.amalitech.com        |   12345678!A |      12345678!A|  |
    |   testing.amalitech@gmailcom   |   12345678!A |	   12345678!A|  Pleaseenterthecorrectemailaddressorphonenumber| 
    |   testing.amalitech@gmail.com  |   12354678!A |	   12345678!A|  Pleaseenterthecorrectemailaddressorphonenumber| 
    |   testing.amalitech.gmail.com  |   12345678!A | 	    12345678!|  Pleaseenterthecorrectemailaddressorphonenumber|  
    |   testing.amalitech@gmail.com  |   12345678!A | 	   12345678!A|  Aconfirmationhasbeensenttoyouremail.Pleaseretrievethecodeandconfirmacount|
    |   testing.amalitech@gmail.com  |   12345678!A | 		         |  Pleaseenterthecorrectemailaddressorphonenumber|
    |   testing.amalitech@gmail.com  |              | 	   12345678!A|  Pleaseenterthecorrectemailaddressorphonenumber| 
    |   testing.amalitech@gmail.com  |              | 	          	 |  Pleaseenterthecorrectemailaddressorphonenumber|
    |                                |   12345678!A | 	   12345678!A|  Pleaseenterthecorrectemailaddressorphonenumber| 
    |   testing.amalitech@gmail.com  |   12345678!A | 	   12345678!A|  Userwiththisemailalreadyexists|        
