# Hashtables
Implementation: Hash Tables

## Challenge
## Implement a Hashtable with the following capabilities

 * A method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
 * A method/function named Find that takes in the key and returns the value from key/value pair.
 * A method/function named contains that takes in the key and returns if the key exists in the table already.
 * A method/function named GetHash that takes in a key and returns the index in the array the key is stored.

## Approach & Efficiency
We were told to treat these like linked lists.  The Big O for time is O(n), and for space it is O(1).

## API
 * Add() Takes a key and a value, it hashes yhe key and adds the key and value pair to the table.
 * Find() Takes a key and returns the value from that key/value pair.
 * Contains() Takes the key and returns if the key already exists in the table.
 * GetHash() takes a key and returns the indexin the array that the key is stored
