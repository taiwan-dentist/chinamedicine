var questions = [
    
    { question: "定喘湯", answers: ["麻黃", "杏仁", "白果", "黃芩", "桑白皮", "蘇子", "款冬花", "半夏", "甘草"] },
    { question: "蘇子降氣湯", answers: ["半夏", "前胡", "厚朴", "陳皮", "生薑", "肉桂", "當歸", "甘草", "紫蘇子"] },
    { question: "三子養親湯", answers: ["白芥子", "紫蘇子", "萊菔子"] }
    
];
var currentQuestion = null;
var timeoutId = null;

function loadQuestion() {
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
    }
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').innerText = currentQuestion.question;
    var answerInputs = '';
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        answerInputs += '<input type="text" id="answer' + i + '"><br>';
    }
    document.getElementById('answer-inputs').innerHTML = answerInputs;
    document.getElementById('response').innerText = '';
}

function submitAnswers() {
    var userAnswers = [];
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        userAnswers.push(document.getElementById('answer' + i).value);
    }
    var correctAnswers = currentQuestion.answers.slice();
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var inputElement = document.getElementById('answer' + i);
        if (correctAnswers.includes(userAnswers[i])) {
            inputElement.style.backgroundColor = "white";
            correctAnswers.splice(correctAnswers.indexOf(userAnswers[i]), 1);
        } else {
            inputElement.style.backgroundColor = "#feff9c";
            inputElement.style.borderWidth = "2px";
        }
    }
    if (correctAnswers.length === 0) {
        document.getElementById('response').innerText = "回答正確";
        timeoutId = setTimeout(loadQuestion, 2000);
    } else {
        document.getElementById('response').innerText = "回答錯誤，正確答案應該是" + currentQuestion.answers.join(",");
        timeoutId = setTimeout(loadQuestion, 40000);
    }
}

loadQuestion();
