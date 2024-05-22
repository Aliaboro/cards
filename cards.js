const textOne = document.querySelector("h1");
const textTwo = document.querySelector("h2");
const image = document.querySelector("#myImage");

//console.log(textOne, textTwo, image);

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonFive = document.querySelector("#five");

//console.log(buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive);

buttonOne.addEventListener("click", pageOne);
buttonFive.addEventListener("click", pageLast);

function pageOne() {
    image.setAttribute ("src", "valet.jpg");
    textOne.innerHTML = "Гадание на суженого";
    textTwo.innerHTML = "Проведите несколько минут в тихом и спокойном месте и интуитивно выберите карту, которая привлекает вас больше всего и узнайте свое предсказание..."

    buttonOne.innerHTML = "Валет Пик";

    buttonTwo.innerHTML = "Валет Треф";
    buttonTwo.style = "display: block";

    buttonThree.innerHTML = "Валет Бубн";
    buttonThree.style = "display: block";

    buttonFour.innerHTML = "Валет Червь";
    buttonFour.style = "display: block";

    buttonFive.style = "display: none";

    buttonOne.addEventListener("click", jackSpades);
    buttonTwo.addEventListener("click", jackClubs);
    buttonThree.addEventListener("click", jackDiamonds);
    buttonFour.addEventListener("click", jackHearts);
}

function pageLast() {
    image.setAttribute ("src", "last.jpg");
    textOne.innerHTML = "Спасибо за внимание";
    textTwo.innerHTML = "Удачи вам на каждый случай, удачи для любых дел!"
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
    buttonFive.style = "display: none";
}

function jackSpades() {
    image.setAttribute ("src", "val1.jpg");
    textOne.innerHTML = "Валет Пик";
    textTwo.innerHTML = "Значение карты -  военный, чиновник. Мужчина строгий и властный. Средних лет и старше. Пиковая масть - это характер, уровень его конфликтности, сдержанность характера, склонность драматизировать, ссориться, спорить и ревновать."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageTwo);
    buttonFive.addEventListener("click", pageLast);
}

function jackClubs() {
    image.setAttribute ("src", "val2.jpg");
    textOne.innerHTML = "Валет Треф";
    textTwo.innerHTML = "Значение карты - брюнет или мужчина средних лет. Трефовая масть - финансовое обеспечение, деловые возможности, умение заработать деньги, возможность содержать свою семью, щедрость, великодушие."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageTwo);
    buttonTwo.addEventListener("click", pageLast);
}

function jackDiamonds() {
    image.setAttribute ("src", "val3.jpg");
    textOne.innerHTML = "Валет Бубн";
    textTwo.innerHTML = "Значение карты -  это блондин или молодой человек, юноша. Бубновая масть - семьянин и отец. Ваш избранник будет заботливым отцом."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageTwo);
    buttonTwo.addEventListener("click", pageLast);
}

function jackHearts() {
    image.setAttribute ("src", "val4.jpg");
    textOne.innerHTML = "Валет Червь";
    textTwo.innerHTML = "Значение карты - мужчина со светлыми волосами, шатен или молодой мужчина. Червовая масть - романтичность мужчины, его способность любить и проявлять свои чувства, ухаживать и заботится, о его сердечности, доброте и сентиментальности. "
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageTwo);
    buttonTwo.addEventListener("click", pageLast);
}

function pageTwo() {
    image.setAttribute ("src", "dam.jpg");
    textOne.innerHTML = "Гадаем на вопрос";
    textTwo.innerHTML = "Загадайте вопрос, на который можно ответить да или нет. Интуитивно выберите карту, которая привлекает вас больше всего и узнайте свое предсказание..."

    buttonOne.innerHTML = "Дама Треф";

    buttonTwo.innerHTML = "Дама Пик";
    buttonTwo.style = "display: block";

    buttonThree.innerHTML = "Дама Червь";
    buttonThree.style = "display: block";

    buttonFour.innerHTML = "Дама Бубн";
    buttonFour.style = "display: block";

    buttonFive.style = "display: none";

    buttonOne.addEventListener("click", queenClubs);
    buttonTwo.addEventListener("click", queenSpades);
    buttonThree.addEventListener("click", queenHearts);
    buttonFour.addEventListener("click", queenDiamonds);
}


function queenClubs() {
    image.setAttribute ("src", "dam1.jpg");
    textOne.innerHTML = "Дама Треф";
    textTwo.innerHTML = "Значение карты - спроси в другой раз..."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageThree);
    buttonFive.addEventListener("click", pageLast);
}

function queenSpades() {
    image.setAttribute ("src", "dam2.jpg");
    textOne.innerHTML = "Дама Пик";
    textTwo.innerHTML = "Значение карты - нет... "

    buttonOne.innerHTML = "Гадаем дальше!";
    buttonOne.style = "display: block";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageThree);
    buttonTwo.addEventListener("click", pageLast);
}

function queenHearts() {
    image.setAttribute ("src", "dam3.jpg");
    textOne.innerHTML = "Дама Червь";
    textTwo.innerHTML = "Значение карты - точно да!"
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageThree);
    buttonTwo.addEventListener("click", pageLast);
}

function queenDiamonds() {
    image.setAttribute ("src", "dam4.jpg");
    textOne.innerHTML = "Дама Бубн";
    textTwo.innerHTML = "Значение карты - скорее всего да, но возможны сложности..."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageThree);
    buttonTwo.addEventListener("click", pageLast);
}

function pageThree() {
    image.setAttribute ("src", "korol.jpg");
    textOne.innerHTML = "Гадаем на любовь";
    textTwo.innerHTML = "Давайте с Вами погадаем на отношение мужчины к женщине. Интуитивно выберите карту, которая привлекает вас больше всего и узнайте свое предсказание..."

    buttonOne.innerHTML = "Король Пик";

    buttonTwo.innerHTML = "Король Треф";
    buttonTwo.style = "display: block";

    buttonThree.innerHTML = "Король Бубн";
    buttonThree.style = "display: block";

    buttonFour.innerHTML = "Король Червь";
    buttonFour.style = "display: block";

    buttonFive.style = "display: none";

    buttonOne.addEventListener("click", kingSpades);
    buttonTwo.addEventListener("click", kingClubs);
    buttonThree.addEventListener("click", kingDiamonds);
    buttonFour.addEventListener("click", kingHearts);
}

function kingSpades() {
    image.setAttribute ("src", "kor1.jpg");
    textOne.innerHTML = "Король Пик";
    textTwo.innerHTML = "Значение карты - военный, чиновник. Мужчина строгий и властный. Средних лет и старше. Этот мужчина хочет близости с Вами. Вы привлекаете его именно как женщина."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageFour);
    buttonFive.addEventListener("click", pageLast);
}

function kingClubs() {
    image.setAttribute ("src", "kor2.jpg");
    textOne.innerHTML = "Король Треф";
    textTwo.innerHTML = "Значение карты - брюнет или мужчина средних лет. Очень может быть, что сердце мужчины занято другой женщиной. Если даже он и одинок, у него есть женщина о которой он не может забыть."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonOne.style = "display: block";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageFour);
    buttonFive.addEventListener("click", pageLast);
}

function kingDiamonds() {
    image.setAttribute ("src", "kor3.jpg");
    textOne.innerHTML = "Король Бубн";
    textTwo.innerHTML = "Значение карты - это блондин или молодой человек, юноша. Помимо симпатии, здесь появляется особая в Вас заинтересованность. Отношения на перспективу. Мужчина рассматривает возможность серьезных и длительных отношений. Или этот мужчина видит в Вас товарища по работе, партнера по бизнесу и т.д."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageFour);
    buttonFive.addEventListener("click", pageLast);
}

function kingHearts() {
    image.setAttribute ("src", "kor4.jpg");
    textOne.innerHTML = "Король Червь";
    textTwo.innerHTML = "Значение карты - мужчина со светлыми волосами, шатен или молодой мужчина. Он очень скучает по Вам, испытывает волнение и даже страдания. Очень хочет видеть Вас. Его чувства очень сильные."
    
    buttonOne.innerHTML = "Гадаем дальше!";
    buttonFive.innerHTML = "Нет, спасибо";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonOne.addEventListener("click", pageFour);
    buttonFive.addEventListener("click", pageLast);
}

function pageFour() {
    image.setAttribute ("src", "tyz.jpg");
    textOne.innerHTML = "Гадаем на желание";
    textTwo.innerHTML = "Прежде всего, нужно загадать свое желание. Оно должно быть очень четким и однозначным. Карты скажут Вам - сбудется оно или нет..."

    buttonOne.innerHTML = "Туз Треф";

    buttonTwo.innerHTML = "Туз Пик";
    buttonTwo.style = "display: block";

    buttonThree.innerHTML = "Туз Червь";
    buttonThree.style = "display: block";

    buttonFour.innerHTML = "Туз Бубн";
    buttonFour.style = "display: block";

    buttonFive.style = "display: none";

    buttonOne.addEventListener("click", aceClubs);
    buttonTwo.addEventListener("click", aceSpades);
    buttonThree.addEventListener("click", aceHearts);
    buttonFour.addEventListener("click", aceDiamonds);
}


function aceClubs() {
    image.setAttribute ("src", "tyz1.jpg");
    textOne.innerHTML = "Туз Треф";
    textTwo.innerHTML = "Значение карты - желание обязательно сбудется!"
    
    buttonOne.style = "display: none";
    buttonFive.innerHTML = "Закончить гадание";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonFive.addEventListener("click", pageLast);
}

function aceSpades() {
    image.setAttribute ("src", "tyz2.jpg");
    textOne.innerHTML = "Туз Пик";
    textTwo.innerHTML = "Значение карты - желание просто не исполнится. Может быть, нужно пожелать что-нибудь другое..."
    
    buttonOne.style = "display: none";
    buttonFive.innerHTML = "Закончить гадание";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonFive.addEventListener("click", pageLast);
}

function aceHearts() {
    image.setAttribute ("src", "tyz3.jpg");
    textOne.innerHTML = "Туз Червь";
    textTwo.innerHTML = "Значение карты - желание, скорей всего сбудется, но возникнут сложности или на это потребуется время..."
    
    buttonOne.style = "display: none";
    buttonFive.innerHTML = "Закончить гадание";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonFive.addEventListener("click", pageLast);
}

function aceDiamonds() {
    image.setAttribute ("src", "tyz4.jpg");
    textOne.innerHTML = "Туз Бубн";
    textTwo.innerHTML = "Значение карты - желание не исполнится. Либо исполнится очень не скоро и при совершенно других обстоятельствах..."
    
    buttonOne.style = "display: none";
    buttonFive.innerHTML = "Закончить гадание";
    buttonFive.style = "display: block";

    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buttonFive.addEventListener("click", pageLast);
}