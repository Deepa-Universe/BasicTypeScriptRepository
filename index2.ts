//Functions in TypeScript

let user = (firstname : string, age: string) : string => {
    if(firstname)
    {
        console.log(firstname);
    }
    if(age)
    {
        console.log(age);
    }

    return firstname + ' - ' + age;
}

let result : string = user("Deepa", "28");
console.log(result);

//In the above example- It is an Anonymous function with two parameters firstname and age of string types and return type of the 
//function is string. Function is taken in the variable user

/******************************************************************************************************************************************** */

let contact = (mobileno : number) => console.log(mobileno);
contact(9000000009);

//Type of arrow function, when the contact() function is called, it gets invoked, parameters passed through the function called 

let x = () => console.log("Hello Mrs. Reddy");
x(); //Calling function

/******************************************************************************************************************************************** */

//Function Types
function BookDetails(author:string):string{
    if(author)
    {
        console.log(`author is : ${author}`);
        return author;
    }
}

//let Book : (Bauthor : string) => number ;

let Book : (Bauthor : string) => string ;

Book = BookDetails; //Assigning one function to another function

Book("Deepa-The Angel");

Book = (price: string) => {
    if (price) {
        console.log(`book price: ${price}`);
        return price;
    }
};

Book("2000");
Book("5000");
