//Functions in TypeScript
var user = function (firstname, age) {
    if (firstname) {
        console.log(firstname);
    }
    if (age) {
        console.log(age);
    }
    return firstname + ' - ' + age;
};
var result = user("Deepa", "28");
console.log(result);
//In the above example- It is an Anonymous function with two parameters firstname and age of string types and return type of the 
//function is string. Function is taken in the variable user
/******************************************************************************************************************************************** */
var contact = function (mobileno) { return console.log(mobileno); };
contact(9000000009);
//Type of arrow function, when the contact() function is called, it gets invoked, parameters passed through the function called 
var x = function () { return console.log("Hello Mrs. Reddy"); };
x(); //Calling function
/******************************************************************************************************************************************** */
//Function Types
function BookDetails(author) {
    if (author) {
        console.log("author is : " + author);
        return author;
    }
}
//let Book : (Bauthor : string) => number ;
var Book;
Book = BookDetails; //Assigning one function to another function
Book("Deepa-The Angel");
Book = function (price) {
    if (price) {
        console.log("book price: " + price);
        return price;
    }
};
Book("2000");
Book("5000");
