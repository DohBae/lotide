# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @baedoh/lotide`

**Require it:**

`const _ = require('@baedoh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertAraysEqual`: compares non-primitive arrays
* `assertEqual`: tests code to see if it's a pass or fail
* `assertObjectsEqual`: compares objects (with emoji visuals)
* `countLetters`: takes in a sentence (as a string) and returns a count of each letter in said sentence
* `countOnly`: takes in a collection of items and returns counts for a specific subset of said items
* `eqArrays`: compares arrays (primitive)
* `eqObjects`: compares objects 
* `findKey`: takes in an object and callback and returns the first key for which the callback returns a truthy value
* `findKeyByValue`: finds key on an object where its value matches a given value
* `head`: retrieves the first item of an array
* `letterPositions`: returns all indices in the string where each letter is found
* `map`: returns a new array based on results of the callback function
* `middle`: returns the middle value of an array with an odd number of indices, and the two middle values of an array with an even number of indices
* `tail`: retrieves every element in an array except the head
* `takeUntil`: returns a slice of an array with elements taken from the beginning
* `without`: removes unwanted items from data