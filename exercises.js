/*
    TASK NR. 1

    1. Create a variable called "studentName", assign the value "John" to it.

 */

{
    let studentName = "John";
}

/* TASK NR. 1 END */

/*
    TASK NR. 2

    1. On one single line, declare three variables with the following names and values:
        firstName = "John"
        lastName = "Doe"
        age = 29
 */

{
  let firstName = "John", lastName = "Doe", age = 29;
}

/* TASK NR. 2 END */

/*
    TASK NR. 3

    1. Use comments to describe the correct data type of the following variables:
 */

{
    const age = 20;               // Number (all numbers are stored as 64 bit floating points in JavaScript, not integer like in many other programming languages)
    const car = 'Mercedes'        // String
    const user = {
        email: 'john@gmail.com',
        password: 'test123'
    };                            //  Object type with two properties of String type defined inside
}

/* TASK NR. 3 END */

/*
    TASK NR. 4

    1. Write a function which returns a multiplied value of two passed params.

 */

{
    let task4Function = (a, b) => a * b;
    task4Function(1, 2);
}

/* TASK NR. 4 END */

/*
    TASK NR. 5

    1. Create an object called "car" with following properties:
        model = 'BMW'
        maxSpeed = 240

 */

{
    let car = {
        model: 'Fiat',
        maxSpeed: 241
    }
}

/* TASK NR. 5 END */

/*
    TASK NR. 6

    1. Make variable "result" to be equal the length of "text"
        Expected result: 21

 */

{
    const text = 'This is a random text';
    let result = text.length;
    console.log(result);
}

/* TASK NR. 6 END */

/*
    TASK NR. 7

    1. Get string from 4th character to 9th from "text" and assign value to "result"
        Expected result: "s is a ra"

 */

{
    const text = 'This is a random text';
    let result = text.slice(3, 12); // Expected result: "s is a ra"
    console.log(result);
}

/* TASK NR. 7 END */

/*
    TASK NR. 8

    1. Replace word "World" to "All" for "text" and assign value to "result"
        Expected result: "Hello All!"

 */

{
    const text = 'Hello World!';
    let result = text.replace('World', 'All');
    console.log(result);
}

/* TASK NR. 8 END */

/*
    TASK NR. 9

    1. Join two strings "text1" and "text2"
        Expected result: "Hello World!"

 */

{
    const text1 = 'Hello';
    const text2 = 'World!';
    let result = text1 + ' ' + text2; // Expected result: "Hello World!"
    console.log(result);
}

/* TASK NR. 9 END */

/*
    TASK NR. 10

    1. Trim string "text" and assign new value to "result"
        Expected result: "Hello World!"

 */

{
    const text = '    Hello World! ';
    let result = text.trim();
    console.log(result);
}

/* TASK NR. 10 END */

/*
    TASK NR. 11

    1. Get start position(index) of word "name" in string "text" and assign value to result
        Expected result: 3

 */

{
    const text = 'My name is John';
    let result = text.search('name');
    console.log(result);
}

/* TASK NR. 11 END */

/*
    TASK NR. 12

    1. Check if string "text" includes word "is" and assign value to result
        Expected result: true

 */

{
    const text = 'My name is John';
    let result = text.search('is') !== -1;
    console.log(result);
}

/* TASK NR. 12 END */

/*
    TASK NR. 13

    1. Assign dynamic string to "text" using "name" variable. Use ES5
    2. Assign dynamic string to "text" using "name" variable. USE ES6
        Expected result: "My name is John Doe"

 */

{
    const name = 'John Doe';
    const prefix = "My name is";
    let textES5 = prefix + ' ' + name;
    let textES6 = `${prefix} ${name}`;
    console.log(textES5, textES6);
}

/* TASK NR. 13 END */

/*
    TASK NR. 14

    1. What is the data type of NaN ?

 */

{
    // Answer:
    // NaN - Not A Number. The value may be found under "Number" object, so.. We may say "NaN" is of type "Number" too, it should not be the wrong statement, I assume.
}

/* TASK NR. 14 END */

/*
    TASK NR. 15

    1. Transform number "myNumber" into string and assign value to "result"
        Expected result: '5' and typeof result is equal to "number"

 */

{
    const myNumber = 5;
    let resultString = myNumber.toString(10);
    let resultInt = parseInt(resultString, 10);
    console.log(resultString, typeof resultString, resultInt, typeof resultInt); // 5 as string, 5 as integer (converted back from a string)
}

/* TASK NR. 15 END */

/*
    TASK NR. 16

    1. Transform number "myNumber" into number with 2 decimals instead of 4 and assign value to result
        Expected result: 7.46

 */

{
    const myNumber = 7.469458;
    let resultUpFixedDecimals = parseFloat(myNumber.toFixed(2)); // 7.47. Aka. the regular way of rounding a number
    let resultUpFixedLength = parseFloat(myNumber.toPrecision(3)); // Round to 7.47. Works for formatting purpose only, the value "3" works in cases of numbers greater than -10 and lower than 10.
    let resultDown = parseFloat((Math.floor(myNumber * 100) / 100).toFixed(2)); // Round down to 7.46 as requested
    console.log(resultUpFixedDecimals, typeof resultUpFixedDecimals, resultUpFixedLength, typeof resultUpFixedLength, resultDown, typeof resultDown);


}

/* TASK NR. 16 END */

/*
    TASK NR. 17

    1. Create an array with following items:
        'apple'
        98
        'orange'

 */

{
    let arrayOfTask17 = ['apple', 98, 'orange'];
    console.log(arrayOfTask17);
}

/* TASK NR. 17 END */

/*
    TASK NR. 18

    1. Transform array "myArray" into following string and assign value tu result:
        "My name is John Doe"

 */

{
    const myArray = [
        'My',
        'name',
        'is',
        'John',
        'Doe'
    ];
    let result = myArray.join(' ');
    console.log(result);
}

/* TASK NR. 18 END */

/*
    TASK NR. 19

    1. Remove third item from "myArray" and assign removed item to "result"
        Expected result: 9

 */

{
    const myArray = [1, 8, 9, 22, 4];
    let result = myArray.splice(2, 1);
    console.log(myArray, result);
}

/* TASK NR. 19 END */

/*
    TASK NR. 20

    1. Add item "2" at the end of "myArray"
        Expected "myArray": [1, 8, 9, 22, 4, 2]

 */

{
    const myArray = [1, 8, 9, 22, 4];
    myArray.push(2);
    console.log(myArray);
}

/* TASK NR. 20 END */

/*
    TASK NR. 21

    1. Add item "10" at the start of "myArray"
        Expected "myArray": [10, 1, 8, 9, 22, 4]

 */

{
    const myArray = [1, 8, 9, 22, 4];
    myArray.unshift(10);
    console.log(myArray);
}

/* TASK NR. 21 END */

/*
    TASK NR. 22

    1. Change "myArray" 4th item into "19"
        Expected "myArray": [1, 8, 9, 19, 4]

 */

{
    const myArray = [1, 8, 9, 22, 4];
    myArray[3] = 19;
    console.log(myArray);
}

/* TASK NR. 22 END */

/*
    TASK NR. 23

    1. Join arrays "myArray1" and "myArray2" and assign result to "joinedArray"
        Expected "joinedArray": [1, 8, 22, 4]

 */

{
    const myArray1 = [1, 8];
    const myArray2 = [22, 4];
    let joinedArray = [...myArray1, ...myArray2]; // We may probably use concat for this too, concat should probably be faster
    console.log(joinedArray);
}

/* TASK NR. 23 END */

/*
    TASK NR. 24

    1. Slice out items from "myArray" which are in position from 2 to 4 and assign result to "result"
        Expected "joinedArray": [1, 99, 54, 86]

 */

{
    const myArray = [1, 8, 14, 15, 99, 54, 86];
    let result = myArray.filter((value, index, number) => {
        return index < 1 || index > 3;
    })
    console.log(result);
}

/* TASK NR. 24 END */

/*
    TASK NR. 25

    1. Get current year, month and day, and assign value to "year" | "month" | "day"

 */

{
    let date = new Date()
    // Getting UTC date
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1; // January is 0 and December is 11 by default, so we add 1 to make the value "human-readable"
    let day = date.getUTCDate();

    console.log(year, month, day);
}

/* TASK NR. 25 END */

/*
    TASK NR. 26

    1. Generate random number from 0 to 1 and assign it to "randNum"

 */

{
    let randNum = Math.random(); // As far as I know, Math.random() will never return 0 or 1 exactly, it will return numbers in between only.
    console.log(randNum);
}

/* TASK NR. 26 END */

/*
    TASK NR. 27

    1. Get "firstName" value from "user" object and assign it to "fName"
        Expected "fName" value: 'John'

 */

{
    const user = { firstName: 'John', lastName: 'Doe' };
    let fName = user.firstName;
    console.log(fName);
}

/* TASK NR. 27 END */

/*
    TASK NR. 28

    1. Add method "getFullName" in user object, which allows to get full name.
        Expected result of user.getFullName(): 'John Doe'

 */

{
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    console.log(user.getFullName());
}

/* TASK NR. 28 END */

/*
    TASK NR. 29

    1. Delete "lastName" property from "user" object
        Expected user object: { firstName: 'John' }

 */

{
    const user = {
        firstName: 'John',
        lastName: 'Doe',
    };

    delete user.lastName;

    // The alternative may be:
    // Reflect.deleteProperty(user, 'lastName');

    console.log(user);
}

/* TASK NR. 29 END */

/*
    TASK NR. 30

    1. Check if object "user" has property "age" and assign result to "result"
        Expected "result" value: false

 */

{
    const user = {
        firstName: 'John',
        lastName: 'Doe',
    };

    let result = user.hasOwnProperty('age');
    console.log(result);
}

/* TASK NR. 30 END */

/*
    TASK NR. 31

    1. Make a immutable copy of "user" object and assign that copy to "copiedUser"
        Expected "copiedUser" value: { firstName: 'John', lastName: 'Doe' }

 */

{
    const user = {
        firstName: 'John',
        lastName: 'Doe',
    };

    let copiedUser1 = { ...user };
    let copiedUser2 = Object.assign({}, user);

    user.anyNewProperty = 'any new value'; // A value to test on - changing user should not affect copiedUser1 and copiedUser2

    console.log(user, copiedUser1, copiedUser2);
}

/* TASK NR. 31 END */

/*
    TASK NR. 32

    1. Filter out numbers "4" from "numbers" array and assign filtered array to "filteredNumbers".
       Use ES6 features.
       Expected "filteredNumbers" value: [1, 10, 7, 8, 6]
 */

{
    const numbers = [1, 4, 10, 7, 8, 4, 6, 4];
    let filteredNumbers = numbers.filter((value) => {
        return value !== 4;
    })
    console.log(filteredNumbers);
}

/* TASK NR. 32 END */

/*
    TASK NR. 33

    1. Find user with name "Sam" in "users" array, and assign that user to "sam"
       Use ES6 features.
       Expected "sam" value: { name: 'Sam' }
 */

{
    const users = [{ name: 'John' }, { name: 'Sam' }, { name: 'Mark' }];
    let sam = users.find((value, index, obj) => {
        return value.name === 'Sam';
    });
    console.log(sam);
}

/* TASK NR. 33 END */

/*
    TASK NR. 34

    1. Iterate through "users" array, and add each name to "names" array
       Use ES6 features.
       Expected "names" value: ['John', 'Sam', 'Mark']
 */

{
    const users = [{ name: 'John' }, { name: 'Sam' }, { name: 'Mark' }];
    let names = [];
    users.forEach((value, index, array) => {
        names.push(value.name);
    });
    console.log(names);
}

/* TASK NR. 34 END */

/*
    TASK NR. 35

    1. Find index of number "17" in "numbers" array and assign that index to "indexOf17"
       Use ES6 features.
       Expected "indexOf17" value: 4
 */

{
    const numbers = [1, 4, 10, 24, 17, 5];
    let indexOf17 = numbers.findIndex((value, index, obj) => {
        return value === 17;
    });
    console.log(indexOf17);
}

/* TASK NR. 35 END */

/*
    TASK NR. 36

    1. Check if "numbers" array includes number "10" and assign result to "isNumbersIncludes10"
    2. Check if "numbers" array includes number "99" and assign result to "isNumbersIncludes99"
       Use ES6 features.
       Expected "isNumbersIncludes10" value: true
       Expected "isNumbersIncludes99" value: false
 */

{
    const numbers = [1, 4, 10, 24, 17, 5];
    let isNumbersIncludes10 = numbers.includes(10);
    let isNumbersIncludes99 = numbers.includes(99);
    console.log(isNumbersIncludes10, isNumbersIncludes99);
}

/* TASK NR. 36 END */

/*
    TASK NR. 37

    1. Iterate through "numbers" array and map each name into name + 1
       Use ES6 features.
       Expected "mappedNames" value: ['John1', 'Lisa1', 'Bernard1']
 */

{
    const names = ['John', 'Lisa', 'Bernard'];
    let mappedNames = names.map((value, index, array) => {
        return value + '1';
    });
    console.log(mappedNames);
}

/* TASK NR. 37 END */

/*
    TASK NR. 38

    1. Reverse "numbers" array and assign reversed value to "reversedNumbers"
       Use ES6 features.
       Expected "reversedNumbers" value: [10, 5, 7, 1]
 */

{
    const numbers = [1, 7, 5, 10];
    let reversedNumbers = numbers.reverse();
    console.log(reversedNumbers);
}

/* TASK NR. 38 END */

/*
    TASK NR. 39

    1. Sort "months" array and assign sorted months value to "sortedMonths. Order "ascending"
       Use ES6 features.
       Expected "sortedMonths" value: ['Dec', 'Feb', 'Jan', 'March']
 */

{
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    let sortedMonths = months.sort(); // sorts in ascending, ASCII character order
    console.log(sortedMonths);
}

/* TASK NR. 39 END */

/*
    TASK NR. 40

    1. Implement ES6 features into the object.
    2. Return value of "deduct" after 2 seconds.
 */

{
    let john = {
        name: 'John Doe',
        balance: 1500,

        sleep: ms => {
            console.log(`Sleeping for ${ms} milliseconds...`);
            return new Promise(resolve => setTimeout(resolve, ms));
        },

        deduct: function(amount) {
            return this.sleep(2000).then(
                function() {
                    this.balance = this.balance - amount;
                    return`${this.name} has a balance of ${this.balance}`;
                }.bind(this)
            )
        }
    };
    john.deduct(10).then(data => {
        console.log(data);
    });
}

/* TASK NR. 40 END */

/*
    TASK NR. 41

    1. Get "person" object properties length and assign this value to "objectPropsLength"
    2. Add method "getFullName" into "person" object, which returns full name of "person"
    2. Add method "getBirthYear" into "person" object, which returns year of birth of "person" according to "age" property
    2. Remove "weight" property from "person" object
    Expected "objectPropsLength": 4
    Expected value of "person.getFullName()": 'David Ray'
    Expected value of "person.getBirthYear()": 1997
    Expected object after removing "weight" property: { firstName: 'David', lastName: 'Ray', age" 24 }
 */

{
    const person = {
        firstName: 'David',
        lastName: 'Ray',
        age: 24,
        weight: 80,

        getFullName() { // I'm not sure if that's the expected way of adding the method. Either way, I add getBirthYear by using another way.
            return `${this.firstName} ${this.lastName}`;
        }
    };

    // 2. Add method "getBirthYear" into "person" object, which returns year of birth of "person" according to "age" property
    person.getBirthYear = function () {
        return new Date().getUTCFullYear() - this.age;
    };

    // 1. Get "person" object properties length and assign this value to "objectPropsLength"
    const personNames = Object.getOwnPropertyNames(person);
    let objectPropsLength = personNames.filter((value, index, array) => {
        return !(Object.getOwnPropertyDescriptor(person, value).value instanceof Function);
    });

    // 2. Remove "weight" property from "person" object
    Reflect.deleteProperty(person, 'weight');

    console.log(objectPropsLength, person.getFullName(), person.getBirthYear(), person);
}

/* TASK NR. 41 END */

/*
    TASK NR. 42

    1. The function "job" must return a promise object (use new Promise).
    2. The promise must resolve itself 4 seconds after the call to "job".
    3. Console.log "Hello World" when promise is resolved.
    3. Convert basic function "job" into arrow function.
 */

{
    function sleep (ms) {
        console.log(`Sleeping for ${ms} milliseconds...`);
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const job = () => {
        return sleep(4000).then(
            data => console.log('Hello World')
        );
    }

    job();
}

/* TASK NR. 42 END */
