var questions = [
    { question: "川芎茶調散", answers: ["川芎", "薄荷", "荊芥", "白芷", "羌活", "細辛", "防風", "炙甘草", "清茶"] },
    { question: "大秦艽湯", answers: ["秦艽", "羌活", "獨活", "防風", "白芷", "細辛", "當歸", "白芍", "熟地", "川芎", "白朮", "茯苓", "生地", "石膏", "黃芩", "甘草"] },
    { question: "消風散", answers: ["荊芥", "防風", "牛蒡子", "蟬蛻", "蒼朮", "苦參", "木通", "石膏", "知母", "當歸", "生地", "胡麻仁", "甘草"] },
    { question: "小活絡丹", answers: ["川烏", "草烏", "天南星", "地龍", "乳香", "沒藥", "酒"] },
    { question: "牽正散", answers: ["白附子", "全蠍", "白殭蠶", "熱酒"] },
    { question: "玉真散", answers: ["白附子", "天南星", "羌活", "防風", "白芷", "天麻", "熱酒或童便"] },
    { question: "四物", answers: ["熟地", "當歸", "⽩芍", "川芎"] },
    { question: "鎮肝熄風湯", answers: ["懷牛膝", "白芍", "代赭石", "牡蠣", "龍骨", "龜板", "玄參", "天冬", "麥芽", "川楝子", "茵陳", "甘草"] },
    { question: "天麻鉤藤飲", answers: ["天麻", "鉤藤", "石決明", "川牛膝", "黃芩", "梔子", "益母草", "杜仲", "桑寄生", "夜交藤", "茯神"] },
    { question: "羚角鉤藤湯", answers: ["羚羊角", "鉤藤", "桑葉", "菊花", "鮮生地", "白芍", "甘草", "川貝母", "竹茹", "茯神"] },
    { question: "大定風珠", answers: ["雞子黃", "阿膠", "白芍", "麥冬", "乾地黃", "生龜板", "鱉甲", "麻仁", "生牡蠣", "五味子", "炙甘草"] },
    { question: "阿膠雞子黃湯", answers: ["雞子黃", "阿膠", "白芍", "生地黃", "生牡蠣", "甘草", "絡石藤", "石決明", "雙鉤藤", "茯神"] },
    { question: "四君子湯", answers: ["人參", "白朮", "茯苓", "炙甘草"] },
    { question: "參苓白朮散", answers: ["人參", "白朮", "茯苓", "炙甘草", "山藥", "蓮肉", "白扁豆", "薏苡仁", "砂仁", "桔梗"] },
    { question: "七味白朮散", answers: ["人參", "白朮", "茯苓", "炙甘草", "葛根", "木香", "藿香"] },
    { question: "補中益氣湯", answers: ["黃耆", "人參", "白朮", "炙甘草", "當歸身", "橘皮", "升麻", "柴胡"] },
    { question: "舉元煎", answers: ["黃耆", "人參", "白朮", "炙甘草", "升麻"] },
    { question: "升陷湯", answers: ["黃耆", "知母", "升麻", "柴胡", "桔梗"] },
    { question: "六君⼦湯", answers: ["⼈參", "炙甘草", "茯苓", "⽩朮", "陳⽪", "半夏"] },
    { question: "益氣聰明湯", answers: ["黃耆", "人參", "升麻", "葛根", "蔓荊子", "白芍", "黃柏", "炙甘草"] },
    { question: "人參蛤蚧散", answers: ["蛤蚧", "人參", "杏仁", "茯苓", "貝母", "桑白皮", "知母", "甘草"] },
    { question: "生脈散", answers: ["人參", "麥冬", "五味子"] },
    { question: "玉屏風散", answers: ["蜜炙黃耆", "白朮", "防風"] },
    { question: "四物湯", answers: ["熟地黃", "當歸", "白芍", "川芎"] },
    { question: "膠艾湯", answers: ["熟地黃", "當歸", "白芍", "川芎", "阿膠", "艾草", "甘草"] },
    { question: "桃紅四物湯", answers: ["熟地黃", "當歸", "白芍", "川芎", "桃仁", "紅花"] },
    { question: "聖愈湯", answers: ["熟地黃", "當歸", "白芍", "川芎", "人參", "黃耆"] },
    { question: "當歸補血湯", answers: ["黃耆", "當歸"] },
    { question: "歸脾湯", answers: ["黃耆", "白朮", "人參", "龍眼肉", "當歸", "炒酸棗仁", "茯神", "木香", "遠志", "炙甘草", "⽣薑", "⼤棗"] },
    { question: "八珍湯", answers: ["人參", "白朮", "茯苓", "當歸", "川芎", "白芍", "熟地黃", "炙甘草"] },
    { question: "十全大補湯", answers: ["人參", "白朮", "茯苓", "當歸", "川芎", "白芍", "熟地黃", "炙甘草", "黃耆", "肉桂"] },
    { question: "人參養榮湯", answers: ["人參", "白朮", "茯苓", "當歸", "白芍", "熟地黃", "炙甘草", "黃耆", "肉桂", "遠志", "五味子", "陳皮"] },
    { question: "泰山磐石散", answers: ["黃耆", "熟地黃", "人參", "白朮", "當歸", "川芎", "白芍", "川續斷", "糯米", "黃芩", "砂仁", "炙甘草"] },
    { question: "保產無憂散", answers: ["川芎", "當歸", "芍藥", "荊芥", "艾葉", "枳殼", "炙黃耆", "菟絲子", "羌活", "厚朴", "川貝母", "甘草"] },
    { question: "六味地黃丸", answers: ["熟地黃", "山茱萸", "山藥", "澤瀉", "牡丹皮", "茯苓"] },
    { question: "都氣丸", answers: ["熟地黃", "山茱萸", "山藥", "澤瀉", "牡丹皮", "茯苓", "五味子"] },
    { question: "知柏地黃丸", answers: ["熟地黃", "山茱萸", "山藥", "澤瀉", "牡丹皮", "茯苓", "黃柏", "知母"] },
    { question: "杞菊地黃丸", answers: ["熟地黃", "山茱萸", "山藥", "澤瀉", "牡丹皮", "茯苓", "枸杞子", "菊花"] },
    { question: "麥味地黃丸", answers: ["熟地黃", "山茱萸", "山藥", "澤瀉", "牡丹皮", "茯苓", "麥冬", "五味子"] },
    { question: "滋水清肝飲", answers: ["熟地黃", "山茱萸", "山藥", "澤瀉", "牡丹皮", "茯苓", "柴胡", "白芍", "山梔", "當歸身"] },
    { question: "左歸丸", answers: ["熟地", "山茱萸", "山藥", "枸杞子", "龜板膠", "鹿角膠", "菟絲子", "川牛膝"] },
    { question: "大補陰丸", answers: ["熟地黃", "龜板", "黃柏", "知母", "豬脊髓", "蜂蜜"] },
    { question: "一貫煎", answers: ["生地黃", "北沙參", "麥冬", "當歸身", "枸杞子", "川楝子"] },
    { question: "百合固金湯", answers: ["生地", "熟地", "百合", "麥冬", "玄參", "貝母", "桔梗", "當歸身", "白芍"] },
    { question: "補肺阿膠湯", answers: ["阿膠", "馬兜鈴", "杏仁", "牛蒡子", "炙甘草", "糯米"] },
    { question: "二至丸", answers: ["女貞子", "旱蓮草"] },
    { question: "益胃湯", answers: ["生地", "麥冬", "沙參", "玉竹", "冰糖"] },
    { question: "腎氣丸", answers: ["乾地黃", "山藥", "山茱萸", "澤瀉", "茯苓", "牡丹皮", "桂枝", "附子"] },
    { question: "加味腎氣丸", answers: ["乾地黃", "山藥", "山茱萸", "澤瀉", "茯苓", "牡丹皮", "桂枝", "附子", "車前子", "川牛膝"] },
    { question: "十補丸", answers: ["鹿茸", "炮附子", "五味子", "熟地黃", "山萸肉", "山藥", "肉桂", "牡丹皮", "白茯苓", "澤瀉"] },
    { question: "右歸丸", answers: ["附子", "肉桂", "鹿角膠", "枸杞", "熟地", "山萸肉", "山藥", "當歸", "杜仲", "菟絲子"] },
    { question: "右歸飲", answers: ["熟地黃", "炒山藥", "枸杞子", "山茱萸", "炙甘草", "肉桂", "杜仲", "制附子"] },
    { question: "地黃飲子", answers: ["熟地", "山茱萸", "肉蓯蓉", "巴戟天", "肉桂", "附子", "麥冬", "五味子", "石斛", "遠志", "茯苓", "石菖蒲", "薄荷", "生薑", "大棗"] },
    { question: "還少丹", answers: ["熟地黃", "山藥", "牛膝", "枸杞", "山萸肉", "茯苓", "杜仲", "遠志", "五味子", "楮實", "小茴香", "巴戟天", "肉蓯蓉", "石菖蒲"] },
    { question: "龜鹿二仙膠", answers: ["鹿角", "龜板", "人參", "枸杞"] },
    { question: "七寶美髯丹", answers: ["赤何首烏", "白何首烏", "赤茯苓", "白茯苓", "當歸", "枸杞子", "菟絲子", "補骨脂", "牛膝"] },
    { question: "炙甘草湯", answers: ["生地", "大棗", "人參", "麥冬", "阿膠", "麻仁", "炙甘草", "生薑", "桂枝", "清酒"] },
    { question: "加減復脈湯", answers: ["炙甘草", "乾地黃", "生白芍", "麥冬", "阿膠", "麻仁"] },
    { question: "補天大造丸", answers: ["紫河車", "人參", "龜板", "鹿角", "白朮", "山藥", "黃耆", "茯苓", "熟地", "枸杞", "當歸", "白芍", "遠志", "酸棗仁"] }

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
    document.getElementById('response').innerText = '';  // 新增的程式碼
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
        setTimeout(loadQuestion, 2000);
    } else {
        document.getElementById('response').innerText = "回答錯誤，正確答案應該是" + currentQuestion.answers.join(",");
        setTimeout(loadQuestion, 40000);
    }
}

loadQuestion();
