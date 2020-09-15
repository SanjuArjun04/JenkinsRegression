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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0T505316\u0027, ip: \u0027192.168.0.122\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\gnshs\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52495}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8630ea88bdc11e4f6e73e5464b47b6d2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.base.Utility.loadUrl(Utility.java:27)\r\n\tat com.stepdefinition.Step2.user_is_on_the_Adactin_Hotel_page(Step2.java:29)\r\n\tat ✽.user is on the Adactin Hotel page(src/test/resources/Features/LoginPage.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should enter \"SanjuArjun\" and \"Cinna0419!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_should_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0T505316\u0027, ip: \u0027192.168.0.122\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\gnshs\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52495}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8630ea88bdc11e4f6e73e5464b47b6d2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.base.Utility.loadUrl(Utility.java:27)\r\n\tat com.stepdefinition.Step2.user_is_on_the_Adactin_Hotel_page(Step2.java:29)\r\n\tat ✽.user is on the Adactin Hotel page(src/test/resources/Features/LoginPage.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should enter \"SanjuArjun\" and \"Cinna0419!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_should_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0T505316\u0027, ip: \u0027192.168.0.122\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\gnshs\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52495}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8630ea88bdc11e4f6e73e5464b47b6d2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.base.Utility.loadUrl(Utility.java:27)\r\n\tat com.stepdefinition.Step2.user_is_on_the_Adactin_Hotel_page(Step2.java:29)\r\n\tat ✽.user is on the Adactin Hotel page(src/test/resources/Features/LoginPage.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should enter \"SanjuArjun\" and \"Cinna0419!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_should_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
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