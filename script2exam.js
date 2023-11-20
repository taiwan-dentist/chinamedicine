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
    { "type": "填空題", "text": "四磨湯", "answers": ["烏藥", "人參", "檳榔", "沉香"] },
    { "type": "填空題", "text": "五磨飲子", "answers": ["烏藥", "檳榔", "沉香", "枳實", "木香", "白酒"] },
    { "type": "填空題", "text": "六磨飲子", "answers": ["檳榔", "沉香", "木香", "烏藥", "大黃", "枳殼"] },
    { "type": "填空題", "text": "沉香四磨湯", "answers": ["沉香", "木香", "檳榔", "烏藥"] },
    { "type": "填空題", "text": "栝蔞薤白白酒湯", "answers": ["栝蔞實", "薤白", "白酒"] },
    { "type": "填空題", "text": "橘皮枳實生薑湯", "answers": ["橘皮", "枳實", "生薑"] },
    { "type": "填空題", "text": "天台烏藥散", "answers": ["烏藥", "木香", "茴香", "青皮", "檳榔", "高良薑", "川楝子", "巴豆"] },
    { "type": "填空題", "text": "導氣湯", "answers": ["川楝子", "木香", "茴香", "吳茱萸"] },
    { "type": "填空題", "text": "橘核丸", "answers": ["橘核", "海藻", "昆布", "海帶", "川楝子", "桃仁", "厚朴", "木通", "枳實", "延胡索", "肉桂心", "木香"] },
    { "type": "填空題", "text": "金鈴子散", "answers": ["金鈴子", "延胡索"] },
    { "type": "填空題", "text": "延胡索散", "answers": ["延胡索", "當歸", "蒲黃", "赤芍", "肉桂", "片子薑黃", "乳香", "沒藥", "木香", "炙甘草"] },
    { "type": "填空題", "text": "暖肝煎", "answers": ["當歸", "枸杞", "肉桂", "小茴香", "烏藥", "沉香", "茯苓"] },
    { "type": "填空題", "text": "旋覆代赭湯", "answers": ["旋覆花", "代赭石", "半夏", "生薑", "人參", "大棗", "甘草"] },
    { "type": "填空題", "text": "橘皮竹茹湯", "answers": ["橘皮", "竹茹", "生薑", "人參", "大棗", "甘草"] },
    { "type": "填空題", "text": "濟生橘皮竹茹湯", "answers": ["赤茯苓", "橘皮", "枇杷葉", "麥門冬", "竹茹", "半夏", "人參", "甘草"] },
    { "type": "填空題", "text": "新制橘皮竹茹湯", "answers": ["橘皮", "竹茹", "柿蒂", "薑汁"] },
    { "type": "填空題", "text": "丁香柿蒂湯", "answers": ["丁香", "柿蒂", "生薑", "人參"] },
    { "type": "填空題", "text": "奔豚湯", "answers": ["甘李根白皮", "半夏", "黃芩", "生葛", "當歸", "芍藥", "川芎", "生薑", "甘草"] },
    { "type": "填空題", "text": "會厭逐瘀湯", "answers": ["桃仁", "紅花", "生地", "當歸", "赤芍", "柴胡", "甘草", "枳殼", "玄參", "桔梗"] },
    { "type": "填空題", "text": "旋覆花湯", "answers": ["旋覆花", "蔥白", "茜草"] },

    
    { "type": "選擇題", "text": "越鞠丸", "answers": ["六鬱所致胸膈痞悶，脘腹脹痛，吞酸嘔吐，飲食不化。"] },
    { "type": "選擇題", "text": "半夏厚朴湯", "answers": ["七情之氣結成痰涎，痰氣逆結，肺胃失宣降，梅核氣。"] },
    { "type": "選擇題", "text": "二陳湯", "answers": ["脾失健運，濕聚成痰，上犯於肺。"] },
    { "type": "選擇題", "text": "平胃散", "answers": ["脾胃濕阻證。"] },
    { "type": "選擇題", "text": "七氣湯", "answers": ["七情氣鬱，痰涎結聚，咯不出，嚥不下，胸滿喘急；或咳或嘔，攻衝作痛。"] },
    { "type": "選擇題", "text": "四七湯", "answers": ["七情氣鬱，痰涎結聚，虛冷上氣，心腹絞痛；或心腹絞痛；或膨脹喘急。"] },
    { "type": "選擇題", "text": "四逆散", "answers": ["傷寒少陰證，陽邪入裏，陽氣內鬱的四肢厥逆，或咳或悸，小便不利，或腹中痛，泄利不重。"] },
    { "type": "選擇題", "text": "柴胡疏肝散", "answers": ["因怒氣鬱而脅痛，寒熱往來，痛而脹悶，不得俯仰，喜太息，脈弦。"] },
    { "type": "選擇題", "text": "四磨湯", "answers": ["治七情氣逆，上氣喘急，煩悶不食。用於正氣素虛，肝氣橫逆，上犯肺胃所致氣逆喘息，胸膈不舒，煩悶不食。"] },
    { "type": "選擇題", "text": "五磨飲子", "answers": ["治暴怒卒死，名曰氣厥。"] },
    { "type": "選擇題", "text": "六磨飲子", "answers": ["氣滯腹痛，大便秘澀而有熱者。"] },
    { "type": "選擇題", "text": "沉香四磨湯", "answers": ["冷氣攻心，心腹痛；脾胃素弱，食飲易傷，嘔逆冷痰，精神不清。"] },
    { "type": "選擇題", "text": "栝蔞薤白白酒湯", "answers": ["胸陽不振，氣滯痰阻之胸痹。喘息咳唾，胸背痛，短氣，寸口脈沈而遲，關上小緊數。"] },
    { "type": "選擇題", "text": "橘皮枳實生薑湯", "answers": ["胸痹，胸中氣寒，短氣。"] },
    { "type": "選擇題", "text": "天台烏藥散", "answers": ["肝經寒凝氣滯；婦人瘕聚、痛經等。"] },
    { "type": "選擇題", "text": "導氣湯", "answers": ["寒疝疼痛，痛引睪丸、陰囊結硬或腫痛難消。以疝氣痛引睪丸為其主症。"] },
    { "type": "選擇題", "text": "橘核丸", "answers": ["寒濕癲疝。"] },
    { "type": "選擇題", "text": "金鈴子散", "answers": ["熱厥心下痛。肝氣鬱熱之胃脘，胸脅痛，疝氣疼痛。婦女經行腹痛時發時止，口苦舌紅苔黃，脈弦數。"] },
    { "type": "選擇題", "text": "延胡索散", "answers": ["婦人室女，七情傷感，遂使氣與血並，腹作痛，或連腰脅，上下攻刺，經候不調，一切血氣疼痛。"] },
    { "type": "選擇題", "text": "暖肝煎", "answers": ["肝腎陰寒，小腹疼痛，疝氣。"] },
    { "type": "選擇題", "text": "旋覆代赭湯", "answers": ["胃虛氣逆證，心下痞硬，噫氣頻作，反胃嘔吐，吐涎，舌苔白滑，脈弦而虛。"] },
    { "type": "選擇題", "text": "橘皮竹茹湯", "answers": ["傷寒病後虛羸，呃逆不已，或吐利後，胃虛膈熱;呃逆，或產後呃逆，或四時傷風咳逆。"] },
    { "type": "選擇題", "text": "濟生橘皮竹茹湯", "answers": ["胃熱多渴，嘔噦不食。"] },
    { "type": "選擇題", "text": "新制橘皮竹茹湯", "answers": ["胃熱呃逆，胃氣上虛者。"] },
    { "type": "選擇題", "text": "丁香柿蒂湯", "answers": ["胃寒呃逆，脈遲者。"] },
    { "type": "選擇題", "text": "奔豚湯", "answers": ["驚恐惱怒肝鬱，肝胃不和，奔豚氣上沖胸，脅痛，噫氣呃逆。"] },
    { "type": "選擇題", "text": "會厭逐瘀湯", "answers": ["瘀血凝滯之呃逆。"] },
    { "type": "選擇題", "text": "旋覆花湯", "answers": ["肝著，肝經氣血鬱滯而屬寒凝之證。"] },

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
