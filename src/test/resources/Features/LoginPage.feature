Feature: Verifying the Adactin Hotel Functionalities

  Scenario Outline: Verifying Adactin Login details
    Given user is on the Adactin Hotel page
    When user should enter "<username>" and "<password>"
    And user should click the login button
    And user should select the "<location>","<hotelname>"
      | roomType     | noOfRooms | adultPerRoom | childPerRoom |
      | Double       | 3 - Three | 1 - One      | 1 - One      |
      | Standard     | 2 - Two   | 1 - One      | 1 - One      |
      | Deluxe       | 3 - Three | 2 - Two      | 1 - One      |
      | Super Deluxe | 3 - Three | 2 - Two      | 1 - One      |
    Then user should click search button
    When user should select the radio button and click continue
    And user should enter "<firstName>" ,"<lastName>","<Address>","<ccNUm>","<expiryDateMonth>","<expiryDateYear>","<cvvNum>"
      | ccType |
      | VISA   |
      | VISA   |
      | VISA   |
    Then user should click the booknow button
    When user print the booking id

    Examples: 
      | username   | password   | location | hotelname   | firstName | lastName | Address             | ccNUm            | expiryDateMonth | expiryDateYear | cvvNum |
      | SanjuArjun | Cinna0419! | Sydney   | Hotel Creek | sanju     | Arjun    | ooty , the Nilgiris | 1234567890123456 | January         |           2022 |    223 |
      | SanjuArjun | Cinna0419! | Sydney   | Hotel Creek | sanju     | Arjun    | ooty , the Nilgiris | 1234567890123456 | January         |           2022 |    223 |
      | SanjuArjun | Cinna0419! | Sydney   | Hotel Creek | sanju     | Arjun    | ooty , the Nilgiris | 1234567890123456 | January         |           2022 |    223 |
      | SanjuArjun | Cinna0419! | Sydney   | Hotel Creek | sanju     | Arjun    | ooty , the Nilgiris | 1234567890123456 | January         |           2022 |    223 |
