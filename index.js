/*Introduction to Type Script*/
//let username = "Deepa"; //Static Type
//username = 4; //Error- We cannot assign 4 in the variable username, because it is storing string Value at first place.
//let username : string = "Deepa";
//username = 6; //string is the type of variable for username.
/* Type Inference */
var myString = "This is string";
//myString = 67; //error
function myFunction() {
    return 45;
}
var myString2 = "This is new string";
//myString2 = myFunction(); //error //Number cannot be assigned to string.
/* Adding Type Annotation */
var myNewString = "This is string";
//myString = 67; //error
function myNewFunction() {
    return 45;
}
var myNewString2 = "This is new string";
//myString2 = myFunction(); //error //Number cannot be assigned to string.
//Enums - User Defined Object Type
var Category;
(function (Category) {
    Category[Category["RepublicDay"] = 0] = "RepublicDay";
    Category[Category["IndependenceDay"] = 1] = "IndependenceDay";
    Category[Category["Holi"] = 2] = "Holi";
    Category[Category["Diwali"] = 3] = "Diwali";
})(Category || (Category = {}));
; //0,1,2 -- Position (Index)
var Category2;
(function (Category2) {
    Category2[Category2["Fashion"] = 2] = "Fashion";
    Category2[Category2["Art"] = 3] = "Art";
    Category2[Category2["Books"] = 4] = "Books";
})(Category2 || (Category2 = {}));
; //2,3,4 (We can change the indexing)
var Category3;
(function (Category3) {
    Category3[Category3["Deepa"] = 3] = "Deepa";
    Category3[Category3["Rudra"] = 3] = "Rudra";
    Category3[Category3["Alarka"] = 12] = "Alarka";
})(Category3 || (Category3 = {}));
; //3,3,12 -- Here, since 3 has 2 values, it gets replaced by second value
var favoriteCategory = Category.Holi;
console.log(favoriteCategory);
var favorite2Category = Category.IndependenceDay;
console.log(Category[favorite2Category]);
console.log(Category3[Category3.Deepa]);
//Array
var strArray1 = ["Apple", "Ball", "Cat", "Data"];
var strArray2 = ["Elephant", "Fish", "Goat", "Hen"];
var anyArray = [true, false, "Space", 12, "Universe"];
//Tuples
var myTuples = [1, "King"]; //Two different dataTypes
var firstElement = myTuples[0]; //1
console.log("*******************************************************************************************");
//enum Country {"India" = 9, "Bangladesh" = 8, "Canada", "Poland"}; //We can change and set the index
//console.log(Country[Country.India]); //We can give previous no. in indexing but it will override the values, if maximum index has been set before.
var Country;
(function (Country) {
    Country[Country["India"] = 0] = "India";
    Country[Country["Bangladesh"] = 1] = "Bangladesh";
    Country[Country["Canada"] = 2] = "Canada";
    Country[Country["Poland"] = 3] = "Poland";
})(Country || (Country = {}));
;
function StoreUserData() {
    var users = [
        {
            id: 1,
            name: "Deepa",
            email: "deepa@yahoo.com",
            country: Country.India,
            available: true
        },
        {
            id: 2,
            name: "Ekta",
            email: "ekta@yahoo.com",
            country: Country.Canada,
            available: false
        },
        {
            id: 3,
            name: "Bharath",
            email: "bharath@yahoo.com",
            country: Country.Poland,
            available: true
        },
        {
            id: 4,
            name: "Ankit",
            email: "ankit@yahoo.com",
            country: Country.Bangladesh,
            available: true
        }
    ];
    return users;
}
;
function FetchUserRecord(data) {
    var userdata;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var d = data_1[_i];
        if (d.available) {
            userdata = d.name + " - " + d.email;
        }
    }
    console.log(userdata);
    return userdata;
}
var data = StoreUserData();
FetchUserRecord(data);
//In the above example, function FetchUserRecord(data) is printing the output. to have the value in parameter
//We are fetching it from another function.
function FetchUserRecordByCountry(data) {
    console.log("Your country name : " + data); //gives position of index
    console.log("Your country name : " + Country[data]); //gives value 
    var userData = [];
    var Sdata = StoreUserData();
    for (var _i = 0, Sdata_1 = Sdata; _i < Sdata_1.length; _i++) {
        var d = Sdata_1[_i];
        if (d.available) {
            userData.push(d.email, d.name);
            break;
        }
    }
    console.log(userData);
    return userData;
}
FetchUserRecordByCountry(Country.India);
var store = FetchUserRecordByCountry(Country.India);
store.forEach(function (val, arg) { return console.log(arg + " - " + val); }); //Call Back function used, arg gives position of the value
