$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/LoginPage.feature");
formatter.feature({
  "name": "Verifying the Adactin Hotel Functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin Login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should select the \"\u003clocation\u003e\",\"\u003chotelname\u003e\"",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "roomType",
        "noOfRooms",
        "adultPerRoom",
        "childPerRoom"
      ]
    },
    {
      "cells": [
        "Double",
        "3 - Three",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Standard",
        "2 - Two",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Super Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    }
  ]
});
formatter.step({
  "name": "user should click search button",
  "keyword": "Then "
});
formatter.step({
  "name": "user should select the radio button and click continue",
  "keyword": "When "
});
formatter.step({
  "name": "user should enter \"\u003cfirstName\u003e\" ,\"\u003clastName\u003e\",\"\u003cAddress\u003e\",\"\u003cccNUm\u003e\",\"\u003cexpiryDateMonth\u003e\",\"\u003cexpiryDateYear\u003e\",\"\u003ccvvNum\u003e\"",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "ccType"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    }
  ]
});
formatter.step({
  "name": "user should click the booknow button",
  "keyword": "Then "
});
formatter.step({
  "name": "user print the booking id",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotelname",
        "firstName",
        "lastName",
        "Address",
        "ccNUm",
        "expiryDateMonth",
        "expiryDateYear",
        "cvvNum"
      ]
    },
    {
      "cells": [
        "SanjuArjun",
        "Cinna0419!",
        "Sydney",
        "Hotel Creek",
        "sanju",
        "Arjun",
        "ooty , the Nilgiris",
        "1234567890123456",
        "January",
        "2022",
        "223"
      ]
    },
    {
      "cells": [
        "SanjuArjun",
        "Cinna0419!",
        "Sydney",
        "Hotel Creek",
        "sanju",
        "Arjun",
        "ooty , the Nilgiris",
        "1234567890123456",
        "January",
        "2022",
        "223"
      ]
    },
    {
      "cells": [
        "SanjuArjun",
        "Cinna0419!",
        "Sydney",
        "Hotel Creek",
        "sanju",
        "Arjun",
        "ooty , the Nilgiris",
        "1234567890123456",
        "January",
        "2022",
        "223"
      ]
    },
    {
      "cells": [
        "SanjuArjun",
        "Cinna0419!",
        "Sydney",
        "Hotel Creek",
        "sanju",
        "Arjun",
        "ooty , the Nilgiris",
        "1234567890123456",
        "January",
        "2022",
        "223"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin Login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step2.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"SanjuArjun\" and \"Cinna0419!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select the \"Sydney\",\"Hotel Creek\"",
  "rows": [
    {
      "cells": [
        "roomType",
        "noOfRooms",
        "adultPerRoom",
        "childPerRoom"
      ]
    },
    {
      "cells": [
        "Double",
        "3 - Three",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Standard",
        "2 - Two",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Super Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should select the radio button and click continue",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should enter \"sanju\" ,\"Arjun\",\"ooty , the Nilgiris\",\"1234567890123456\",\"January\",\"2022\",\"223\"",
  "rows": [
    {
      "cells": [
        "ccType"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click the booknow button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user print the booking id",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verifying Adactin Login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step2.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"SanjuArjun\" and \"Cinna0419!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select the \"Sydney\",\"Hotel Creek\"",
  "rows": [
    {
      "cells": [
        "roomType",
        "noOfRooms",
        "adultPerRoom",
        "childPerRoom"
      ]
    },
    {
      "cells": [
        "Double",
        "3 - Three",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Standard",
        "2 - Two",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Super Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should select the radio button and click continue",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should enter \"sanju\" ,\"Arjun\",\"ooty , the Nilgiris\",\"1234567890123456\",\"January\",\"2022\",\"223\"",
  "rows": [
    {
      "cells": [
        "ccType"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click the booknow button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user print the booking id",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verifying Adactin Login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step2.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"SanjuArjun\" and \"Cinna0419!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select the \"Sydney\",\"Hotel Creek\"",
  "rows": [
    {
      "cells": [
        "roomType",
        "noOfRooms",
        "adultPerRoom",
        "childPerRoom"
      ]
    },
    {
      "cells": [
        "Double",
        "3 - Three",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Standard",
        "2 - Two",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Super Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should select the radio button and click continue",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should enter \"sanju\" ,\"Arjun\",\"ooty , the Nilgiris\",\"1234567890123456\",\"January\",\"2022\",\"223\"",
  "rows": [
    {
      "cells": [
        "ccType"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click the booknow button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user print the booking id",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verifying Adactin Login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step2.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"SanjuArjun\" and \"Cinna0419!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select the \"Sydney\",\"Hotel Creek\"",
  "rows": [
    {
      "cells": [
        "roomType",
        "noOfRooms",
        "adultPerRoom",
        "childPerRoom"
      ]
    },
    {
      "cells": [
        "Double",
        "3 - Three",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Standard",
        "2 - Two",
        "1 - One",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Super Deluxe",
        "3 - Three",
        "2 - Two",
        "1 - One"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should select the radio button and click continue",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should enter \"sanju\" ,\"Arjun\",\"ooty , the Nilgiris\",\"1234567890123456\",\"January\",\"2022\",\"223\"",
  "rows": [
    {
      "cells": [
        "ccType"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click the booknow button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user print the booking id",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});