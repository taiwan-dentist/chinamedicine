var questions = [
    { question: "川芎茶調散", answers: ["川芎", "薄荷", "荊芥", "白芷", "羌活", "細辛", "防風", "炙甘草", "清茶"] },
    { question: "大秦艽湯", answers: ["秦艽", "羌活", "獨活", "防風", "白芷", "細辛", "當歸", "白芍", "熟地", "川芎", "白朮", "茯苓", "生地", "石膏", "黃芩", "甘草"] },
    { question: "消風散", answers: ["荊芥", "防風", "牛蒡子", "蟬蛻", "蒼朮", "苦參", "木通", "石膏", "知母", "當歸", "生地", "胡麻仁", "甘草"] },
    { question: "小活絡丹", answers: ["炮川烏", "炮草烏", "炮天南星", "地龍", "乳香", "沒藥", "酒"] },
    { question: "牽正散", answers: ["白附子", "全蠍", "白殭蠶", "熱酒"] },
    { question: "玉真散", answers: ["白附子", "天南星", "羌活", "防風", "白芷", "天麻", "熱酒或童便"] },
    { question: "四物", answers: ["熟地", "當歸", "⽩芍", "川芎"] },
    { question: "鎮肝熄風湯", answers: ["懷牛膝", "白芍", "代赭石", "牡蠣", "龍骨", "龜板", "玄參", "天冬", "麥芽", "川楝子", "茵陳", "甘草"] },
    { question: "天麻鉤藤飲", answers: ["天麻", "鉤藤", "石決明", "川牛膝", "黃芩", "梔子", "益母草", "杜仲", "桑寄生", "夜交藤", "茯神"] },
    { question: "羚角鉤藤湯", answers: ["羚羊角", "鉤藤", "桑葉", "菊花", "鮮生地", "生白芍", "生甘草", "川貝母", "竹茹", "茯神"] },
    { question: "大定風珠", answers: ["雞子黃", "阿膠", "白芍", "麥冬", "乾地黃", "生龜板", "鱉甲", "麻仁", "生牡蠣", "五味子", "炙甘草"] },
    { question: "阿膠雞子黃湯", answers: ["雞子黃", "阿膠", "白芍", "生地黃", "生牡蠣", "甘草", "絡石藤", "石決明", "雙鉤藤", "茯神"] },
    { question: "四君子湯", answers: ["人參", "白朮", "茯苓", "炙甘草"] },
    { question: "參苓白朮散", answers: ["人參", "白朮", "茯苓", "炙甘草", "山藥", "蓮肉", "白扁豆", "薏苡仁", "砂仁", "桔梗"] },
    { question: "七味白朮散", answers: ["人參", "白朮", "茯苓", "炙甘草", "葛根", "木香", "藿香"] },
    { question: "補中益氣湯", answers: ["黃耆", "人參", "白朮", "炙甘草", "當歸身", "橘皮", "升麻", "柴胡"] },
    { question: "舉元煎", answers: ["黃耆", "人參", "白朮", "炙甘草", "升麻"] },
    { question: "升陷湯", answers: ["黃耆", "知母", "升麻", "柴胡", "桔梗"] },
    { question: "升陽益胃湯", answers: ["黃耆", "⼈參", "炙甘草", "茯苓", "⽩朮", "陳⽪", "半夏", "芍藥", "羌活", "獨活", "防風", "柴胡", "澤瀉", "黃連"] },
    { question: "六君⼦湯", answers: ["⼈參", "炙甘草", "茯苓", "⽩朮", "陳⽪", "半夏"] },
];
var currentQuestion = null;

function loadQuestion() {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').innerText = currentQuestion.question;
    var answerInputs = '';
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        answerInputs += '<input type="text" id="answer' + i + '"><br>';
    }
    document.getElementById('answer-inputs').innerHTML = answerInputs;
}

function submitAnswers() {
    var userAnswers = [];
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        userAnswers.push(document.getElementById('answer' + i).value);
    }
    userAnswers.sort();
    var correctAnswers = currentQuestion.answers.slice().sort();
    if (JSON.stringify(userAnswers) === JSON.stringify(correctAnswers)) {
        document.getElementById('response').innerText = "回答正確";
        setTimeout(loadQuestion, 2000);
    } else {
        document.getElementById('response').innerText = "回答錯誤，正確答案應該是" + correctAnswers.join(",");
        setTimeout(loadQuestion, 10000);
    }
}

loadQuestion();
