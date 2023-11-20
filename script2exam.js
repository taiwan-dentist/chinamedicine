let currentQuestion = null;

const questions = [
    { "type": "填空題", "text": "越鞠丸", "answers": ["香附", "川芎", "蒼朮", "梔子", "神麯"] },
    { "type": "填空題", "text": "半夏厚朴湯", "answers": ["半夏", "厚朴", "茯苓", "生薑", "蘇葉"] },
    { "type": "填空題", "text": "二陳湯", "answers": ["半夏", "陳皮", "茯苓", "生薑", "甘草"] },
    { "type": "填空題", "text": "平胃散", "answers": ["蒼朮", "厚朴", "陳皮", "甘草", "生薑", "大棗"] },
    { "type": "填空題", "text": "七氣湯", "answers": ["半夏", "厚朴", "茯苓", "紫蘇"] },
    { "type": "填空題", "text": "四七湯", "answers": ["官桂", "人參", "半夏", "甘草"] },
    { "type": "填空題", "text": "四逆散", "answers": ["柴胡", "枳實", "芍藥", "甘草"] },
    { "type": "填空題", "text": "柴胡疏肝散", "answers": ["柴胡", "陳皮", "川芎", "芍藥", "枳殼", "甘草", "香附"] },
    
    { "type": "選擇題", "text": "越鞠丸", "answers": ["六鬱所致胸膈痞悶，脘腹脹痛，吞酸嘔吐，飲食不化。"] },
    { "type": "選擇題", "text": "半夏厚朴湯", "answers": ["七情之氣結成痰涎，痰氣逆結，肺胃失宣降，梅核氣。"] },
    { "type": "選擇題", "text": "二陳湯", "answers": ["脾失健運，濕聚成痰，上犯於肺。"] },
    { "type": "選擇題", "text": "平胃散", "answers": ["脾胃濕阻證。"] },
    { "type": "選擇題", "text": "七氣湯", "answers": ["七情氣鬱，痰涎結聚，咯不出，嚥不下，胸滿喘急；或咳或嘔，攻衝作痛。"] },
    { "type": "選擇題", "text": "四七湯", "answers": ["七情氣鬱，痰涎結聚，虛冷上氣，心腹絞痛；或心腹絞痛；或膨脹喘急。"] },
    { "type": "選擇題", "text": "四逆散", "answers": ["傷寒少陰證，陽邪入裏，陽氣內鬱的四肢厥逆，或咳或悸，小便不利，或腹中痛，泄利不重。"] },
    { "type": "選擇題", "text": "柴胡疏肝散", "answers": ["因怒氣鬱而脅痛，寒熱往來，痛而脹悶，不得俯仰，喜太息，脈弦。"] }
    
];

function randomQuestion() {
    const index = Math.floor(Math.random() * questions.length);
    return questions[index];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.text;

    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';


    if (question.type === '填空題') {
        for (let i = 0; i < question.answers.length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            choicesElement.appendChild(input);
        }
    } else if (question.type === '選擇題') {
        const choices = ['A', 'B', 'C', 'D'];
        let answers = [];
        answers.push(question.answers[0]);
        while (answers.length < 4) {
            const randomAnswer = questions.filter(q => q.type === '選擇題')[Math.floor(Math.random() * questions.filter(q => q.type === '選擇題').length)].answers[0];
            if (!answers.includes(randomAnswer)) {
                answers.push(randomAnswer);
            }
        }
        shuffleArray(answers);
        for (let i = 0; i < choices.length; i++) {
            
            const cold = document.createElement('section');
            cold.className="coldclass";
            choicesElement.appendChild(cold);

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'choice';
            radio.id = choices[i] + "selection";
            radio.value = answers[i];
            cold.appendChild(radio);

            const label = document.createElement('label');
            label.textContent = choices[i] + '. ' + answers[i];
            label.htmlFor = choices[i] + "selection";
            cold.appendChild(label);

            const br = document.createElement('br');
            cold.appendChild(br);
        }
    }
}

function checkAnswer() {
    const feedbackElement = document.getElementById('feedback');
    const choicesElement = document.getElementById('choices');

    if (currentQuestion.type === '填空題') {
        const inputs = choicesElement.getElementsByTagName('input');
        let userAnswers = [];
        for (let i = 0; i < inputs.length; i++) {
            userAnswers.push(inputs[i].value);
        }
        let correct = true;
        for (let i = 0; i < userAnswers.length; i++) {
            if (currentQuestion.answers.includes(userAnswers[i])) {
                inputs[i].style.backgroundColor = 'white';
            } else {
                correct = false;
                inputs[i].style.backgroundColor = 'yellow';
            }
        }
        if (correct) {
            feedbackElement.textContent = '回答正確';
        } else {
            feedbackElement.textContent = '回答錯誤，正確答案應該是' + currentQuestion.answers.join('、');
        }
    } else if (currentQuestion.type === '選擇題') {
        const radios = choicesElement.getElementsByTagName('input');
        let correct = false;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked && radios[i].value === currentQuestion.answers[0]) {
                correct = true;
            }
        }
        if (correct) {
            feedbackElement.textContent = '回答正確';
        } else {
            feedbackElement.textContent = '回答錯誤';
        }
    }
}

function nextQuestion() {
    currentQuestion = randomQuestion();
    displayQuestion(currentQuestion);
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = '';
}

window.onload = function() {
    const submitButton = document.getElementById('submit');
    submitButton.onclick = checkAnswer;

    const nextButton = document.getElementById('next');
    nextButton.onclick = nextQuestion;

    nextQuestion();
};
