$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/SignUp/signup/src/test/java/Community_Platform/signup.feature");
formatter.feature({
  "line": 1,
  "name": "Sign up to account",
  "description": "       Verify that user sign up is unsuccessful after passing incorrect credentials\r\n       but successful only with valid credentials",
  "id": "sign-up-to-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User signs up with valid and invalid credentials",
  "description": "",
  "id": "sign-up-to-account;user-signs-up-with-valid-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#    And   User clicks on the signup button on landing page"
    }
  ],
  "line": 10,
  "name": "User enters an \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User \"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be noticed with a success or failure \"\u003cmessage\u003e\" depending on the credentials used",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "sign-up-to-account;user-signs-up-with-valid-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "confirm password",
        "message"
      ],
      "line": 18,
      "id": "sign-up-to-account;user-signs-up-with-valid-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "herogodsway.com",
        "12345678!A",
        "12345678!A",
        "Invaliddatainput.Passwordsmismatch"
      ],
      "line": 19,
      "id": "sign-up-to-account;user-signs-up-with-valid-and-invalid-credentials;;2"
    },
    {
      "cells": [
        "herogodsway@yahoocom",
        "12345678!A",
        "12345678!A",
        "Invaliddatainput.Passwordsmismatch"
      ],
      "line": 20,
      "id": "sign-up-to-account;user-signs-up-with-valid-and-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10686133000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User signs up with valid and invalid credentials",
  "description": "",
  "id": "sign-up-to-account;user-signs-up-with-valid-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#    And   User clicks on the signup button on landing page"
    }
  ],
  "line": 10,
  "name": "User enters an \"herogodsway.com\" and \"12345678!A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User \"12345678!A\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be noticed with a success or failure \"Invaliddatainput.Passwordsmismatch\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 668378200,
  "status": "passed"
});
formatter.before({
  "duration": 5578097300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User signs up with valid and invalid credentials",
  "description": "",
  "id": "sign-up-to-account;user-signs-up-with-valid-and-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User navigates to community platform signup page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#    And   User clicks on the signup button on landing page"
    }
  ],
  "line": 10,
  "name": "User enters an \"herogodsway@yahoocom\" and \"12345678!A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User \"12345678!A\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user selects user type",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on the signup button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be noticed with a success or failure \"Invaliddatainput.Passwordsmismatch\" depending on the credentials used",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 663362900,
  "status": "passed"
});
});