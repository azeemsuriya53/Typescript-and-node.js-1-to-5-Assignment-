// Task 01
//Install Node.js, TypeScript and VS Code on your computer.
// Done
// Task 02
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let personName: string = "Eric";
// console.log(`hello ${personName}, would you like to learn some Python today`);
// Task 03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName: string = "Azeem Jawaid";
// in lowercase
// console.log("lowercase:", personName.toLowerCase());
// in uppercase
// console.log("uppercase:", personName.toUpperCase());
// title case
// console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
//task 04
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var author = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
console.log("".concat(author, " once said, \"").concat(quote, "\"\""));
// task 05
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = ("".concat(famous_person, " once said, {\"").concat(quote, "\"}"));
