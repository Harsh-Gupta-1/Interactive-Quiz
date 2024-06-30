let heading = document.querySelector(".heading");
let choices = document.querySelectorAll(".choicebox");
let startTime, currentTime;
let score = 0;
let timeClock = null;
function playGame() {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".container").classList.add("hidden");
    startTime = Date.now();
    startTime += 60000;
    document.querySelector(".question").classList.remove("hidden");
    document.querySelector(".clock").classList.remove("hidden")
    timeClock = setInterval(update, 1000);

}

function update() {
    currentTime = startTime - Date.now();
    let seconds = Math.floor(currentTime / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = String(seconds).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    document.querySelector(".time").textContent = `${minutes}:${seconds}`
    if (currentTime < 10 * 1000) {
        document.querySelector(".time").style.color = "red";
    }
    if (currentTime < 1000 || prev > 4) {
        clearInterval(timeClock);
        prev =0;
        document.querySelector(".question").classList.add("hidden");
        document.querySelector(".clock").classList.add("hidden")
        document.querySelector(".main").classList.add("hidden");
        document.querySelector(".end").classList.remove("hidden");
        document.querySelector(".time").textContent = "00:59";
        document.querySelector(".progress").style.width = "20%";
    }
}

let questions = [
    {
        question: 'Which is the tallest animal in the world?',
        choice1: 'Girrafe',
        choice2: 'Elephant',
        choice3: 'Kangaroo',
        choice4: 'Lion',
        answer: 1,
    },
    {
        question:
            "How many legs does a octopus have?",
        choice1: "Two",
        choice2: "Four",
        choice3: "Eight",
        choice4: "Six",
        answer: 3,
    },
    {
        question: "Which is the fastest animal?",
        choice1: "Rabbit",
        choice2: "Deer",
        choice3: "Lion",
        choice4: "Cheetah",
        answer: 4,
    },
    {
        question: "Which bird lays the largest egg?",
        choice1: "Emu",
        choice2: "Ostrich",
        choice3: "Penguin",
        choice4: "Eagle",
        answer: 2,
    },
    {
        question: "Which is the largest mammal?",
        choice1: "Rhinoceros",
        choice2: "Elephant",
        choice3: "Whale",
        choice4: "Girrafe",
        answer: 3,
    }
];
let prev = 0;
heading.textContent = questions[prev].question;


for (let i = 0; i < 4; i++) {
    if (prev < 5) {
        choices[i].lastElementChild.textContent = questions[prev][`choice${i + 1}`];
    }
    choices[i].addEventListener("click", () => {
        if (prev < 5) {
            if (i + 1 == questions[prev].answer) {
                choices[i].style.backgroundColor = "green";
                score+=10;
            }
            else {
                choices[i].style.backgroundColor = "red";
            }
        }
        prev++;
        document.querySelector(".score").textContent = score;
        setTimeout(() => {

            if (prev < 5) {
                heading.textContent = questions[prev].question;
                document.querySelector(".qno").textContent = `Question: ${prev + 1}/5`
                let width = (prev + 1) * 100 / 5;
                document.querySelector(".progress").style.width = `${width}%`
                for (let i = 0; i < 4; i++) {
                    choices[i].lastElementChild.textContent = questions[prev][`choice${i + 1}`];
                    choices[i].style.backgroundColor = "white";
                }
            }
            else {
                prev =0;
                document.querySelector(".main").classList.add("hidden");
                document.querySelector(".end").classList.remove("hidden");
                document.querySelector(".question").classList.add("hidden");
                document.querySelector(".clock").classList.add("hidden");
                
                
            }
            console.log(prev);
            console.log(score);
        }, 500);

    })
}

function goHome() {
    score = 0;
    prev =0;
    heading.textContent = questions[prev].question;
    for(let i=0;i<4;i++){
        choices[i].lastElementChild.textContent = questions[prev][`choice${i+1}`];
        choices[i].style.backgroundColor = "white";
    }
    console.log(prev);
    document.querySelector(".end").classList.add("hidden");
    document.querySelector(".container").classList.remove("hidden");
    
}
