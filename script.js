//Defining variables
let item;
let newList;
let ageList;
let ages;
let kids;
let names;
let nameList;
let nameCounter;
//Exercise 1 

//Initializing the list for the first exercise
item = ["John", "Paul", "George", "Pete"];

//Print Pete's name to the console log
console.log(item[3]);

//Change Pete to Ringo in the list;
item[3] = "Ringo";

//Show the new value in index 3
console.log(item);

//Adding Yoko to the list via push function
item.push("Yoko;")

//Print the new list to the console
console.log(item);


// //Exercise 2 
// //Create an empty list for ages
// ageList = []

// //Ask the user how many kids they have
// kids =parseInt(prompt("How kids do have?"));


// //create a loop which and ask their age
// for (let index = 0; index < kids ; index++) {
//     const element = kids;
//     ages = prompt("What are their age?")
//     ageList.push(ages)
// }

// //Print the list to the console log
// console.log(ageList);

// //Deleting the third element
// ageList.splice(2,1);

// //Verifying that the third element did get removed
// console.log(ageList);

// //Changing the second element
// ageList[1] = '100'
// console.log(ageList);

//Exercise 3 

//Create an empty list
nameList = [];

//Ask the user how many names they have
nameCounter = prompt("How many names do you have?");

//Compensating for not being able to  ignore Kenn and do first, second, third, etc..
for (let index = 0; index < nameCounter; index++) {
    const element = nameCounter;
    names =prompt("What is their name?");
    while (names =="Kenn" || names == "kenn"){
        alert("Choose another name")
        names = prompt("What is another name?");
    }
    nameList.push(names);
    

    

    
}
//Print to the console log the resulting list
console.log(nameList);
