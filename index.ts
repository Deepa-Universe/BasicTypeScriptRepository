
/*Introduction to Type Script*/
//let username = "Deepa"; //Static Type
//username = 4; //Error- We cannot assign 4 in the variable username, because it is storing string Value at first place.

//let username : string = "Deepa";
//username = 6; //string is the type of variable for username.



/* Type Inference */
let myString = "This is string";
//myString = 67; //error

function myFunction(){
    return 45;
}

let myString2 = "This is new string";
//myString2 = myFunction(); //error //Number cannot be assigned to string.



/* Adding Type Annotation */
let myNewString : string = "This is string";
//myString = 67; //error

function myNewFunction() : number {
    return 45;
}

let myNewString2 : string = "This is new string";
//myString2 = myFunction(); //error //Number cannot be assigned to string.



//Enums - User Defined Object Type
enum Category {RepublicDay, IndependenceDay, Holi, Diwali}; //0,1,2 -- Position (Index)
enum Category2 {Fashion = 2, Art, Books}; //2,3,4 (We can change the indexing)
enum Category3 {Deepa = 3, Rudra = 3, Alarka = 12}; //3,3,12 -- Here, since 3 has 2 values, it gets replaced by second value

let favoriteCategory = Category.Holi;
console.log(favoriteCategory);

let favorite2Category : Category = Category.IndependenceDay;
console.log(Category[favorite2Category]);
console.log(Category3[Category3.Deepa]);

//Array
let strArray1 : string[] = ["Apple", "Ball", "Cat", "Data"];
let strArray2 : Array<string> = ["Elephant","Fish","Goat","Hen"];

let anyArray : any[] = [true, false, "Space", 12, "Universe"];

//Tuples
let myTuples : [number, string] = [1,"King"]; //Two different dataTypes
let firstElement: number = myTuples[0]; //1

console.log("*******************************************************************************************");

//enum Country {"India" = 9, "Bangladesh" = 8, "Canada", "Poland"}; //We can change and set the index
//console.log(Country[Country.India]); //We can give previous no. in indexing but it will override the values, if maximum index has been set before.

enum Country {"India", "Bangladesh", "Canada", "Poland"};

function StoreUserData(){
    let users = [
        {
            id:1,
            name:"Deepa",
            email:"deepa@yahoo.com",
            country : Country.India,
            available:true
        },
        {
            id:2,
            name:"Ekta",
            email:"ekta@yahoo.com",
            country : Country.Canada,
            available:false
        },
        {
            id:3,
            name:"Bharath",
            email:"bharath@yahoo.com",
            country : Country.Poland,
            available:true
        },
        {
            id:4,
            name:"Ankit",
            email:"ankit@yahoo.com",
            country : Country.Bangladesh,
            available:true
        }
    ];

    return users;
};

function FetchUserRecord(data : any):string{     //data is the parameter with return type "any"
    let userdata : string ;

    for(let d of data) //index s value print (Of)- this is foreach of ts
    {
        if(d.available)
        {
            userdata = d.name + " - " + d.email;
        }
    }
    console.log(userdata);
    return userdata;
}

const data = StoreUserData();
FetchUserRecord(data);

//In the above example, function FetchUserRecord(data) is printing the output. to have the value in parameter
//We are fetching it from another function.


function FetchUserRecordByCountry(data : Country) : Array<string> {
    console.log(`Your country name : ${data}`); //gives position of index
    console.log(`Your country name : ${Country[data]}`); //gives value 

    let userData : string[] = [];
    let Sdata = StoreUserData();

    for(let d of Sdata)
    {
        if(d.available)
        {
            userData.push(d.email, d.name);
            break;
        }
    }
    console.log(userData);
    return userData;
}


FetchUserRecordByCountry(Country.India);

let store = FetchUserRecordByCountry(Country.India);

store.forEach((val, arg) => console.log(`${arg} - ${val}`)); //Call Back function used, arg gives position of the value


