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
    |   email                  |   password   |  confirm password|  message| 
    |   herogodsway.com        |   12345678!A |        12345678!A|  Invaliddatainput.Passwordsmismatch|
    |   herogodsway@yahoocom   |   12345678!A |	       12345678!A|  Invaliddatainput.Passwordsmismatch| 
    |   herogodsway@yahoo.com  |   12354678!A |	       12345678!A|  Passwordmismatch| 
    |   herogodsway.com        |   12345678!A | 	   12345678!A|  Include@inemail|
    |   herogodsway.yahoo.com  |   12345678!A | 	    12345678!|  Include@inemail|  
    |   herogodsway@yahoo.com  |   12345678!A | 	   12345678!A|  Aconfirmationhasbeensenttoyouremail.Pleaseretrievethecodeandconfirmacount|
    |   herogodsway@yahoo.com  |   12345678!A | 		         |  Passwordmismatch|
    |   herogodsway@yahoo.com  |              | 	   12345678!A|  Passwordmismatch| 
    |   herogodsway@yahoo.com  |              | 	          	 |  Passwordmismatch| 
    |   herogodsway@yahoo.com  |   12345678!A | 	   12345678!A|  Userwiththisemailalreadyexists|        
