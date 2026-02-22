// document.getElementById("btn").addEventListener("click",

// function(){
//     alert("helooo")
// }


// )
// var x=45
// console.log(x,typeof(x));

// var y="moza"
// console.log(x,typeof(y));
// var z=true
// console.log(x,typeof(z));

// var i
// console.log(i);

// var fname= prompt("Enter first name")
// var Lname= prompt("Enter Lname")
// var Age= prompt("Enter Age")
// console.log(`hello my first name is ${fname} and my last name is ${Lname} and my Age is ${Age}`);

// var num1= +prompt("Enter any number")
// var num2= +prompt("Enter any number")
// console.log(num1+num2);
// var user={
//     name:"yahia",
//     ID:1825,
//     city:"Swiq",
//     Child:{
//         name:"Lalya",
//         gender:"Female",
//         Dob:"15-15-15",
//         skill:{
//             sport:"football",subject:"English"


//         }
//     }
// }
// //dot notation
// //index notation
// console.log(user.Child.skill.sport);
// var user1={
//     id:1825,
//     name:"Yahia",
//     Child:{
//         name:"fahad",
//         gender:"male",
//         skill:{
//             sport:"football",
//             writting:{
//                 story:"child"
//             }
//         }
//     }
// }
// console.log(user1["Child"]);
// var Flowers=["red", "blue", "gray",5433, "yellow"]
// console.log(Flowers[0]);
// console.log(Flowers[1]);
// console.log(Flowers[2]);
// console.log(Flowers[3]);
// console.log(Flowers[4]);
// var BigArray = [
// [[1,2,3],[1,2,3]],
// [[1,2,3],[1,2,3],["Talaal","Yousef"]],
// [["Ahemd","Eid","Saieed"],[1,2,3]],
// [["Mahmoud","Hassan","Soliman"],[1,2,3]],
// [[1,2,3],[1,2,3],[{name:"Monsef",id:[45,45,45,["SARA"]]}]],
// ]
// console.log(BigArray[3][0][2]);




// var x= Number(prompt("Enter Number"));
// var prime="false"

// for ( var i=2; i<x; i+=1) {
//     if(x % i== 0){
//         prime="true"
//         break;
//     }
// }
// if(prime=="false")

//       console.log("the number is primary");

//        else                                                                                                                
//         console.log("enter the valid number");



// sum=0;
// average=0;
// for(var i=1 ; i<=5 ; i+=1){
//     var mark = +(prompt("please Enter your mark"+i));

// console.log(" student "+i + " mark "+mark);
// if (mark>=50)
//         console.log(" student "+i +" pass ");
//     else
//     console.log(" student "+i +" fail ");}
// sum=sum+mark;
// average=sum/5;
// console.log(" total " + sum);
// console.log(" average " + average)

// for( var i=1 ; i<=100 ; i+=1){
//     if (i%3==0 && i%5==0){
//         console.log("fizzbuzz")}
//     else if(i%3==0){
//         console.log(" fizz")
//     }
//     else if(i%5==0){
//         console.log(" buzz")
//     }
//     else console.log(i)

// }
// for(var i=2 ; i<3 ; i++)
// {

//     console.log(i);

// }
//    for(  ;  ;   ){

//         var x = + (prompt("Enter number"))
//         if ( x==10 ) 
//              break

//         else{
//            console.log(x);
//             continue

//            } 

//     }


// var random =Math.floor(Math.random()*10 )
// console.log(random);


// var random =Math.floor(Math.random()*10 )
// for( ;  ; ){
// var x = + prompt("Enter number")
// if (x> random)
//     console.log("too cold")

// else if (x < random)
//     console.log("too hot")


// else{
// console.log("well done")

// break
// }

// }

// var userEmail = prompt("please Enter your Email")
// var userpass = prompt("please Enter your password")

// Hamoz=0

// while(userEmail != "Ahmed@gmail" || userpass!="12345A"){
// // alert("Invalid Email or password")
// Hamoz++

// if(Hamoz<=3){
//   userEmail = prompt("please Enter your Email")
//  userpass = prompt("please Enter your password")
// }
// else break


// }


// var userEmail = prompt("please Enter your Email")
// var userpass = prompt("please Enter your password")

// Hamoz=0

// while(userEmail != "Ahmed@gmail" || userpass!="12345A"){
// alert("invalid email or password")
// Hamoz++

// if(Hamoz<=3){
//   userEmail = prompt("please Enter your Email")
//  userpass = prompt("please Enter your password")
// }
// else {
//     alert("Try next time");
// break
// }

// if(Hamoz==3){
//     setTimeout(function (){
//         userEmail= prompt("please enter your Email again");
//         userpass= prompt("please enter your password again");
//     },5000);
//     }
// }


// var userEmail = prompt("Enter Email")
// var userPassword = prompt("Enter Password")
// var number_of_tries = 0
// while (userEmail != "aaaa" || userPassword != "45") {
//     number_of_tries++
//     if (number_of_tries < 3) {
//         userEmail = prompt("Enter Email")
//         userPassword = prompt("Enter Password")
//     }
//     else {
//         alert("Tiy tried too many times")
//         break
//     }
// }
// if (userEmail == "aaaa" && userPassword == "45") {
//     alert("Successfully logged in")
//     var number_of_questions = +prompt("Please Enter Your Number of Questions")
//     var operators = ["+", "-", "*", "/", "%"]
//     var score = 0
// }
// for (var i = 1; i <= number_of_questions; i++) {
//     var num1 = Math.floor(Math.random() * 10)
//     var num2 = Math.floor(Math.random() * 10)
//     var operation = operators[Math.floor(Math.random() * operators.length)]
//     var userAnswer =+ prompt(`${ i }  ${ num1 } ${ operation } ${ num2 }=`);
// }


// var correctAnswer;

// if (operation === "+") {
//     correctAnswer = num1 + num2;
// } else if (operation === "-") {
//     correctAnswer = num1 - num2;
// } else if (operation === "*") {
//     correctAnswer = num1 * num2;
// } else if (operation === "**") {
//     correctAnswer = num1 ** num2;
// } else if (operation === "/") {

//     correctAnswer = num1 / num2;
// } else if (operation === "%") {
//     correctAnswer = num1 % num2;
// }



// if (userAnswer == correctAnswer) {
//     score++;
// }
// {

// alert("Your total score is: " + score + " out of " + number_of_questions);
// }

// function calcsum(num1,num2){

//     var final_sum =num1+num2
//     return final_sum

// }

// console.log(calcsum(3,6));

// var num1= +prompt("enter number1")
// var num2= +prompt("enter number2")

// var operation= +prompt("enter operation")

// function calcunum(num1 ,num2){

//     if (operation === "-")



// var num1 = +prompt("Enter number 1");
// var num2 = +prompt("Enter number 2");

// var operation = prompt("Enter operation (+)")

// function calcunum(num1, num2, operation) {
//     if (operation === "+") {
//         return num1 + num2;

//     }
// }

// onsole.log(calcunum(num1, num2, operation));


// var num1 = +prompt("Enter number 1");
// var num2 = +prompt("Enter number 2");

// var operation = prompt("Enter operation (+, -, *, /)");

// function calcunum(num1, num2, operation) {
//     if (operation === "+") {
//         return num1 + num2;
//     } else if (operation === "-") {
//         return num1 - num2;
//     } else if (operation === "*") {
//         return num1 * num2;
//     } else if (operation === "/") {
//         return num1 / num2;
//     }
// }

// console.log(calcunum(num1, num2, operation))

// function sayHI(num1, num2) {

//     console.log("num1=" , num1 ,"num2=",num2);
// }
// sayHI(undefined, 15);

// (function(){
//     var x=30

//     console.log(x);
// })();

// (function(){
//     var x=30

//     console.log(x);
// })()

// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");
// let num3=+ prompt("Enter number3");

// let sum=(num1,num2,num3)=> (num1+num2+num3)/3


// console.log(sum(num1,num2,num3));


// var name01 = prompt("please Enter name")
// document.getElementById("main").innerText= "Hello  " +name01

// let fname= prompt("Enter fname")
// let lname= prompt("Enter lname")
// let age= + prompt("Enter age")
// let child = document.getElementById("child")
// document.getElementById("main").innerText=`my fname is${fname} and my lname is ${lname} and my age is ${age}`

// age>= 18 ? child.classList.add("old"):  child.classList.add("young")

// age>=18? child.innerText="I am old": child.innerText="I am young"


// let btn=document.querySelector("#btn")


// btn.addEventListener("mousemove", function(){


// console.log("mouse Entered");
// })

// btn.addEventListener("mousemove", function(){


// console.log("mouse left");
// })

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "red";
// });


// btn.addEventListener("click", function() {
//     if (btn.style.backgroundColor === "red") {
//         btn.style.backgroundColor = "yellow";
//     } 
//     else {
//         btn.style.backgroundColor = "red";
//     }
// });

// let btn=document.querySelector("#btn")
// document.addEventListener("click", function(e) {
//     console.log(e.target)
// })


// let Email= document.querySelector("#Email")
// let password= document.querySelector("#password")
// let logbtn= document.querySelector("#logbtn")

// logbtn.addEventListener("click", (e)=>{
//     console.log(Email.value ,password.value)
// })






// let email = document.querySelector("#Email");
// let pass = document.querySelector("#Password");
// let logbtn = document.querySelector("#logbtn");

// let number_of_tries = 0;

// logbtn.addEventListener("click", function () {

//     if (email.value == "aaaa" && pass.value == "45") {

//         alert("successfully logged in");

//         let number_of_questions = +document.getElementById("numberOfQuestions").value;
//     let operations = ["+", "-", "*", "/"];
//     let score = 0;

//         for (let i = 1; i <= number_of_questions; i++) {

//             let num1 = Math.floor(Math.random() * 10);
//             let num2 = Math.floor(Math.random() * 10) + 1;

//             let operation = operations[Math.floor(Math.random() * operations.length)];

//             let correctAnswer;

//             if (operation == "+") {
//                 correctAnswer = num1 + num2;
//             }
//             else if (operation == "-") {
//                 correctAnswer = num1 - num2;
//             }
//             else if (operation == "*") {
//                 correctAnswer = num1 * num2;
//             }
//             else {
//                 correctAnswer = num1 / num2;
//             }

//             let userAnswer = +prompt(num1 + " " + operation + " " + num2 + " = ?");

//             if (userAnswer == correctAnswer) {
//                 alert("Correct ");
//                 score++;
//             }
//             else {
//                 alert("Wrong correct answer is: " + correctAnswer);
//             }
//         }


//         alert("Your score is: " + score + " out of " + number_of_questions);
//     }
//     else {

//         number_of_tries++;

//         if (number_of_tries < 3) {
//             alert("Wrong email or password");
//         }
//         else {
//             alert("you tried many times");

//         }
//     }

// });


// let email = document.querySelector("#Fname");
// let pass = document.querySelector("#Lname");
// let logbtn = document.querySelector("#btn");

// let number_of_tries = 0;

// let number_of_questions;
// let operations = ["+", "-", "*", "/"];
// let score = 0;
// let currentQuestion = 0;
// let correctAnswer;

// logbtn.addEventListener("click", function () {

//     if (email.value == "aaaa" && pass.value == "45") {

//         alert("successfully logged in");

//         number_of_questions = +document.getElementById("number_of_Questions").value;
//         score = 0;
//         currentQuestion = 0;

//         nextQuestion();
//     }
//     else {

//         number_of_tries++;

//         if (number_of_tries < 3) {
//             alert("Wrong email or password");
//         }
//         else {
//             alert("you tried many times");
//         }
//     }
// });

// function nextQuestion() {

//     if (currentQuestion <= number_of_Questions) {
//         alert("Your score is: " + score + " out of " + number_of_Questions);
//         return;
//     }

//     let num1 = Math.floor(Math.random() * 10) + 1;
//     let num2 = Math.floor(Math.random() * 10) + 1;

//     let operation = operations[Math.floor(Math.random() * operations.length)];

//     if (operation == "+") {
//         correctAnswer = num1 + num2;
//     }
//     else if (operation == "-") {
//         correctAnswer = num1 - num2;
//     }
//     else if (operation == "*") {
//         correctAnswer = num1 * num2;
//     }
//     else {
//         correctAnswer = (num1 / num2).toFixed(2);
//     }

//     document.getElementById("Questions").innerHTML =
//         `Question ${currentQuestion + 1}: ${num1} ${operation} ${num2} = ?`;
// }

// function checkAnswer() {

//     let userAnswer = document.getElementById("userAnswer").value;

//     if (userAnswer == correctAnswer) {
//         alert("Correct");
//         score++;
//     }
//     else {
//         alert("Wrong, correct answer is: " + correctAnswer);
//     }

//     currentQuestion++;
//     nextQuestion();
// }

let userEmail = document.querySelector("#useremail")
let userPass = document.querySelector("#userpass")
let logbtn = document.querySelector("#logbtn")
let errMess = document.querySelector("#errMess")
let succMess = document.querySelector("#succMess")
let form = document.querySelector("form")
let QuestionsNum = document.querySelector("#questionsNum")
let strTestBtn = document.querySelector("#strTestBtn")
let testScreen = document.querySelector("#testScreen")
let testSection = document.querySelector("#test")
let cartona = ''
let logoutBtn = document.querySelector("#logoutBtn")
// local storage 

if (localStorage.getItem("Islogin") === "True") {
    GoToTestPage();
}


logbtn.addEventListener("click", (e) => {
    e.preventDefault()
     
    console.log(userEmail.value, userPass.value);



    if (userEmail.value !== "aa@" || userPass.value !== "1234") {
        errMess.classList.replace("d-none", "d-block")
    }
    else {
        errMess.classList.replace("d-block", "d-none")

        succMess.classList.replace("d-none", "d-block")

        localStorage.setItem("Islogin","True")
        setTimeout(GoToTestPage,
            1000
        )
    }


})

function GoToTestPage() {
   testSection.classList.replace("d-none","d-block")
   form.classList.add("d-none")
}

strTestBtn.addEventListener("click", (e) => {
    e.preventDefault()
     cartona = "";
     correctAnswers = [];
    let num = QuestionsNum.value
    for (let i = 1; i <= num; i++) {
        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        let result = num1 + num2;
        correctAnswers.push(result); 
        
cartona += `
        <div class="mb-3">
            ${i}) <label>${num1} + ${num2} = </label>
            <input type="number" class="form-control answer-input">
        </div>
        `;
    }

    cartona += `<button class="btn btn-success mt-3" id="submitTest">Submit</button>
    <div id="result" class="mt-3 fw-bold"></div>`;

    testScreen.innerHTML = cartona;
});

document.addEventListener("click", function (e) {

    if (e.target && e.target.id === "submitTest") {

        let inputs = document.querySelectorAll(".answer-input");
        let score = 0;

        inputs.forEach((input, index) => {
            if (Number(input.value) === correctAnswers[index]) {
                score++;
            }
        });

        document.getElementById("result").innerHTML =
            `Your Score is ${score} / ${correctAnswers.length}`;
    }
});


logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("Islogin");
    location.reload();
});


























