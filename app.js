//1)
//დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
//მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

//answer:
let firstName = "rati";
let lastName = "archuadze";
let age = 16;
let job = "none";
let skills = "html-css";
let address = "tbilisi - temqa"

let user = `hello my name is ${firstName} my lastname is ${lastName} I'm ${age} years old \n my job is ${job} 
and this is my skills ${skills} my addres is ${address} `
console.log(user);


//2)
//დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
//იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// ყველა ინფივიდულაურად დაწერეს წესით!!

//answer:
let birthYear = 2007;
let curentAge = 16;
let birhtmonth = 11;
let birhtday = 10;
 
let curentmonth = 1;
let curentday = 11;

if(curentmonth < birhtmonth && curentday > birhtday){

     let curantYear = birthYear + curentAge + 1;
     console.log(curantYear)
}



//3)ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// console-ში მეორე console-ში კი decrement!!
let x = 10;
let increment = x++;
let decrement = x--;
console.log(x)

//4)
// let a = 10;
// let b = 12;
//
// let andOperator = a < 9 && b >= 11; //result --> false: 
// let orOperator = a > 11 0 || b < 10; //result --> false :
// let notOperator = !(a > 10); //result --> true:

