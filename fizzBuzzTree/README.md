# FizzBuzz Tree
Conduct “FizzBuzz” on a tree while traversing through it. Change the values of each of the nodes dependent on the current node’s value

## Challenge
* Write a function called FizzBuzzTree which takes a tree as an argument.

* Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:

 * If the value is divisible by 3, replace the value with “Fizz”
 * If the value is divisible by 5, replace the value with “Buzz”
 * If the value is divisible by 3 and 5, replace the value with “FizzBuzz”

* Return the tree with its news values.

## Approach & Efficiency
Traverse through the tree checking each value to see if it's divisible by 3, 5, or 3 and 5, and then replacing the values that are with the appropriate word. Return the new tree when done. Big O for space is O(n), Big O for time is O(n).

## Solution
![](../assets/fizz_buzz_tree.jpg)