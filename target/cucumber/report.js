$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/SignUp/signup/src/test/java/Community_Platform/1_COMMUNITY-2.feature");
formatter.feature({
  "line": 3,
  "name": "Marketplace",
  "description": "",
  "id": "marketplace",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#Tests As a user, an organization, or an individual, I want to register an account on the platform so that I can fully access the platform."
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#*Acceptance Criteria*:"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "## When a user navigates to the signup page, the following fields should be available;"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#* {color:#ff5630}required Email{color}"
    },
    {
      "line": 12,
      "value": "#* Password and"
    },
    {
      "line": 13,
      "value": "#* confirm password."
    },
    {
      "line": 14,
      "value": "#* Radio button labels for Pre-selected \"Organization\", and \"Individual\""
    },
    {
      "line": 15,
      "value": "#* Sign Up button."
    },
    {
      "line": 16,
      "value": "#"
    },
    {
      "line": 17,
      "value": "## The email field accepts only valid email addresses"
    },
    {
      "line": 18,
      "value": "## The password is a minimum of 8 characters (alphanumeric \u0026 special characters)"
    },
    {
      "line": 19,
      "value": "## The view Password option is available on a password text fields"
    },
    {
      "line": 20,
      "value": "## Clicking sign up button prompts a message that a confirmation code has been sent to the user\u0027s email address."
    },
    {
      "line": 21,
      "value": "## (No Name) for absence of name. “No Name“ is not searchable"
    }
  ],
  "line": 23,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"\u003cmessage\u003e\" depending on the credentials used",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "confirm password",
        "message"
      ],
      "line": 32,
      "id": "marketplace;verify-valid-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "testing.amalitech.com",
        "12345678!A",
        "12345678!A",
        ""
      ],
      "line": 33,
      "id": "marketplace;verify-valid-and-invalid-credentials;;2"
    },
    {
      "cells": [
        "testing.amalitech@gmailcom",
        "12345678!A",
        "12345678!A",
        "Check E-mail: Please enter the correct email address or phone number"
      ],
      "line": 34,
      "id": "marketplace;verify-valid-and-invalid-credentials;;3"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "12354678!A",
        "12345678!A",
        "Check Password: There should be at least one lowercase character"
      ],
      "line": 35,
      "id": "marketplace;verify-valid-and-invalid-credentials;;4"
    },
    {
      "cells": [
        "testing.amalitech.gmail.com",
        "12345678!Aa",
        "12345678!Aa",
        ""
      ],
      "line": 36,
      "id": "marketplace;verify-valid-and-invalid-credentials;;5"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "12345678!Aa",
        "12345678!Aa",
        "A confirmation has been sent to your email. Please retrieve the code and confirm acount"
      ],
      "line": 37,
      "id": "marketplace;verify-valid-and-invalid-credentials;;6"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "12345678!A",
        "",
        "Check Password: There should be at least one lowercase character"
      ],
      "line": 38,
      "id": "marketplace;verify-valid-and-invalid-credentials;;7"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "",
        "12345678!Aa",
        "Check Password: There should be at least one lowercase character"
      ],
      "line": 39,
      "id": "marketplace;verify-valid-and-invalid-credentials;;8"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "",
        "",
        "Check Password: There should be at least one lowercase character"
      ],
      "line": 40,
      "id": "marketplace;verify-valid-and-invalid-credentials;;9"
    },
    {
      "cells": [
        "",
        "12345678!Aa",
        "12345678!Aa",
        "Check E-mail: Please enter the correct email address or phone number"
      ],
      "line": 41,
      "id": "marketplace;verify-valid-and-invalid-credentials;;10"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "12345678!Aa",
        "12345678!Aa",
        "User with this email already exists"
      ],
      "line": 42,
      "id": "marketplace;verify-valid-and-invalid-credentials;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6227349700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech.com\" and \"12345678!A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"12345678!A\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 4548665300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech.com",
      "offset": 16
    },
    {
      "val": "12345678!A",
      "offset": 44
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 367245100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!A",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 70877400,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 44417400,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 226989300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8158767600,
  "status": "passed"
});
formatter.after({
  "duration": 689815800,
  "status": "passed"
});
formatter.before({
  "duration": 5347977300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech@gmailcom\" and \"12345678!A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"12345678!A\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"Check E-mail: Please enter the correct email address or phone number\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 3081556700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmailcom",
      "offset": 16
    },
    {
      "val": "12345678!A",
      "offset": 49
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 195423300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!A",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 73824000,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 46579400,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 83357600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check E-mail: Please enter the correct email address or phone number",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8025331400,
  "status": "passed"
});
formatter.after({
  "duration": 618143800,
  "status": "passed"
});
formatter.before({
  "duration": 5203216000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech@gmail.com\" and \"12354678!A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"12345678!A\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"Check Password: There should be at least one lowercase character\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 2107655000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 16
    },
    {
      "val": "12354678!A",
      "offset": 50
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 189130500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!A",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 73566600,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 42584000,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 38518600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Password: There should be at least one lowercase character",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8021950300,
  "status": "passed"
});
formatter.after({
  "duration": 618144300,
  "status": "passed"
});
formatter.before({
  "duration": 5183255000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech.gmail.com\" and \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"12345678!Aa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 2283821500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech.gmail.com",
      "offset": 16
    },
    {
      "val": "12345678!Aa",
      "offset": 50
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 199844900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!Aa",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 71893000,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 41169200,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 56342700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8045361000,
  "status": "passed"
});
formatter.after({
  "duration": 625363600,
  "status": "passed"
});
formatter.before({
  "duration": 5212953200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech@gmail.com\" and \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"12345678!Aa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"A confirmation has been sent to your email. Please retrieve the code and confirm acount\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 2068938500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 16
    },
    {
      "val": "12345678!Aa",
      "offset": 50
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 189681300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!Aa",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 71499100,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 41896600,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 41321000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A confirmation has been sent to your email. Please retrieve the code and confirm acount",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8056967300,
  "status": "passed"
});
formatter.after({
  "duration": 619877800,
  "status": "passed"
});
formatter.before({
  "duration": 5280982600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech@gmail.com\" and \"12345678!A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"Check Password: There should be at least one lowercase character\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 2014854800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 16
    },
    {
      "val": "12345678!A",
      "offset": 50
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 204491600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 48329100,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 44417800,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 40563000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Password: There should be at least one lowercase character",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8026903400,
  "status": "passed"
});
formatter.after({
  "duration": 619569900,
  "status": "passed"
});
formatter.before({
  "duration": 5325745900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"12345678!Aa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"Check Password: There should be at least one lowercase character\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 2892350200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 16
    },
    {
      "val": "",
      "offset": 50
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 180329800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!Aa",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 79779300,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 41240500,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 42598900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Password: There should be at least one lowercase character",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8032407900,
  "status": "passed"
});
formatter.after({
  "duration": 620743900,
  "status": "passed"
});
formatter.before({
  "duration": 5312681500,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"Check Password: There should be at least one lowercase character\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 6440781800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 16
    },
    {
      "val": "",
      "offset": 50
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 171299800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 41331100,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 164444000,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 42844000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Password: There should be at least one lowercase character",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8089182200,
  "status": "passed"
});
formatter.after({
  "duration": 671182400,
  "status": "passed"
});
formatter.before({
  "duration": 7131912900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"\" and \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"12345678!Aa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"Check E-mail: Please enter the correct email address or phone number\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 2212427300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "12345678!Aa",
      "offset": 23
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 124095000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!Aa",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 80013500,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 47092900,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 39646600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check E-mail: Please enter the correct email address or phone number",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8033758000,
  "status": "passed"
});
formatter.after({
  "duration": 616436800,
  "status": "passed"
});
formatter.before({
  "duration": 5276890200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify valid and invalid credentials",
  "description": "",
  "id": "marketplace;verify-valid-and-invalid-credentials;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TEST_COMMUNITY-268"
    },
    {
      "line": 22,
      "name": "@REQ_COMMUNITY-8"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 22,
      "name": "@TESTSET_COMMUNITY-189"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters an \"testing.amalitech@gmail.com\" and \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User \"12345678!Aa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should be noticed with a success or failure \"User with this email already exists\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "signup.user_navigates_to_community_platform_signup_page()"
});
formatter.result({
  "duration": 2188610500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 16
    },
    {
      "val": "12345678!Aa",
      "offset": 50
    }
  ],
  "location": "signup.user_enters_an_and(String,String)"
});
formatter.result({
  "duration": 202618200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!Aa",
      "offset": 6
    }
  ],
  "location": "signup.user(String)"
});
formatter.result({
  "duration": 77957100,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_selects_user_type()"
});
formatter.result({
  "duration": 39773300,
  "status": "passed"
});
formatter.match({
  "location": "signup.user_clicks_on_the_signup_button()"
});
formatter.result({
  "duration": 40779200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User with this email already exists",
      "offset": 50
    }
  ],
  "location": "signup.user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8026965700,
  "status": "passed"
});
formatter.after({
  "duration": 623381200,
  "status": "passed"
});
});