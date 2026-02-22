
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




























