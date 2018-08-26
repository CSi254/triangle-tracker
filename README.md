# triangle-tracker
The module created here will help you identify what type of triangle you have by collecting the leanths you have put in i.e(Isosceles,Equilateral or even a Scalane.  This module is able to calculate and give you an answer which is accurate acording to the code. The project is open for changes froim all sources and any improvements needed to satisfiy the user will be highly apriciated.

#### By **John Gatheru**
## Description
This application prompts the user to input three digits. After they have submitted the three digits the application checks if the three sides can make a triangle. If they can, it then goes ahead to tell the user if it is an equilateral, isosceles or scalene triangle.
## BDD
The program checks if the input is not a number or less than 0.
* Example input: a
* Example output: Please enter the first side again. You entered a value that is not a number or is a number less than one or nothing at all.

The program checks if input is empty.
* Example input: ""
* Example output: Please enter the first side again. You entered a value that is not a number or is a number less than one or nothing at all.

The program checks if input is 0.
* Example input: 0
* Example output: Please enter the first side again. You entered a value that is not a number or is a number less than one or nothing at all.

The program checks if sides entered can make a triangle.
* Example input: 1
* Example input: 1
* Example input: 3
* Example output: The three sides cannot make a triangle!!!

The program checks if sides entered can make an equilateral triangle.
* Example input: 5
* Example input: 5
* Example input: 5
* Example output: The three sides make an equilateral triangle!!!

The program checks if sides entered can make an equilateral triangle.
* Example input: 5
* Example input: 5
* Example input: 8
* Example output: The three sides make an isosceles triangle!!!

The program checks if sides entered can make a scalene triangle.
* Example input: 3
* Example input: 9
* Example input: 7
* Example output: The three sides make a scalene triangle!!!

# Live Pages link
* https://csi254.github.io/triangle-tracker/


#MIT License

Copyright (c) 2018 CSi254

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
