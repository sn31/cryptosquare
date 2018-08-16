# Cryptosquare

#### By **Chris Crow * Skye Nguyen**

## Description

A classic method for composing secret messages is called a square code.

In this method, the spaces and punctuation are removed from the English text and the characters are written into a square (or rectangle) and the entire message is downcased.

### Specs
| # | Spec | Input | Output |
| :-------------     | :-------------     | :------------- | :------------- |
| 1 | The program will not allow numbers outside of the range 1 - 3,999 | 5,000 | alert(enter a number between 1 - 3,999) |
| 2 | The program will return the number "I's" equal to the number entered. | 4 | IIII |
| 3 | The program will return "V" for each unit of 5 entered and return "I's" for the remainders | 17 | VVVII |
| 4 | The program will return "X" for each unit of 10 entered, and return "V's" and "I's" for the remainders | 26 | XXVI |
| 5 | The program will return "L" for each unit of 50 entered, and then follow suit with the previous specs with the remainders | 87 | LXXXVII |
| 6 | The program will return "C" for each unit of 100 entered, and then follow suit with the previous specs with the remainders | 278 | CCLXXVIII |
| 7 | The program will return "D" for each unit of 500 entered, and then follow suit with the previous specs with the remainders | 666 | DCLXVI |
| 8 | The program will return "M" for each unit of 1000 entered, and then follow suit with the previous specs with the remainders | 3,777 | MMMDCCLXXVII |
| 9 | If the final number is 4, instead of IIII, the program will use IV | 14 | XIV |
| 10 | If the final number is 9, instead of VIIII, the program will use IX | 29 | XXIX |
| 11 | If the second to last number is 4, the program will use XL | 46 | XLVI |
| 12 | If the second to last number is 9, the program will use XC | 94 | XCIV |
| 13 | If the third to last number is 4, the program will use CD | 439 | CDXXXIX |
| 14 | If the third to last number is 9, the program will use CM | 948 | CMXLVIII |


## Setup/Installation Requirements

1. Clone this repository by using Terminal command:
```
    $ git clone https://github.com/sn31/crypto-square
```
2. Change into the work directory using Terminal command:
```
    $ cd cryptosquare
```
3. Open the project in your preferred text editor.

4. To run the webpage, open it in a any browser.


## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
  * Bootstrap
* JavaScript
  * jQuery

## Support and contact details

Please contact me at skye@dames.es for more information and/or feedback.

### License

*none*

Copyright (c) 2018 **_Chris Crow & Skye Nguyen_**
