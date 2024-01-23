// Core types
const num: number = 10;

const str: string = 'string';

const bool: boolean = true;

const arr1: number[] = [1, 2, 3, 4, 5]; // single type array

// tuples i.e special array with only 2 elements first is number, second is string
// arr.push is allowed in tuples
// valuable if u know how many many will be there in an array
const tuple: [number, string] = [2, 'author'];

// Enums
// default values start from 0 and so on
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// This will start values from 5
enum Role1 {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

// Assign custom values
enum Role2 {
  ADMIN = 'Admin',
  READ_ONLY = 'Read_Only',
  AUTHOR = 'Author',
}

// Object type
const person = {
  name: 'Umar',
  age: 25,
  role: Role.ADMIN,
};

// any type
// Store any type of value

const arr2: (number | string)[] = [1, 2, 3, 4, 5, 'umar']; // Union types

// Type Interference
// When the compiler assign types by itself with respect the variable and its value
