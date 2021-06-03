

const icons = {
    seven: 'imgs/7-symbol.jpg',
    bar: 'imgs/BAR.jpg',
    bell: 'imgs/BELL.jpg',
    cherry: 'imgs/cherry.jpg',
    coin: 'imgs/coin.jpg',
    grape: 'imgs/grapes.jpg',
    lemon: 'imgs/lemon.jpg',
}





let credits;
let bet;
let slots;
let winner;
let message;
 



const betBtn = document.getElementById('betbtn');
const spinBtn = document.getElementById('spinbtn');
const resetBtn = document.getElementById('resetbtn');

let slotEls = {
    slot1: document.querySelector("#pos1 img"),
    slot2: document.querySelector("#pos2 img"),
    slot3: document.querySelector("#pos3 img"),
    slot4: document.querySelector("#pos4 img"),
    slot5: document.querySelector("#pos5 img"),
}

const totalCredit = document.getElementById('creditbox');
const totalBet = document.getElementById('betbox');
let resMsg = document.getElementById('winlose');



betBtn.addEventListener('click', addBet);
spinBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', init);


init();

function init(){
    slots = {
        slot1: "seven",
        slot2: "seven",
        slot3: "seven",
        slot4: "seven",
        slot5: "seven",
    }
    
    credits = 500;
    bet = 0;
    resMsg.innerText = "4+ MATCHES WINS";
    spinBtn.disabled = true;

    render();
}

function render(){

    totalCredit.innerText = "CREDIT: $" + credits;
    totalBet.innerText = "BET: $" + bet;
   


    for (let slot in slots){
        slotEls[slot].src = icons[slots[slot]];
    }
}




function getRandomIcon(){
    const options = ['seven', 'bar', 'bell', 'cherry', 'coin', 'lemon'];
    const randomIndex = Math.floor(Math.random() * 6)

    return options[randomIndex]
   
};

function startGame(){
    slots.slot1 = getRandomIcon();
    slots.slot2 = getRandomIcon();
    slots.slot3 = getRandomIcon();
    slots.slot4 = getRandomIcon();
    slots.slot5 = getRandomIcon();

    if ( bet <= 0){
        spinBtn.disabled = true;
    } else {
        spinBtn.disabled = false;
    }
    


    if ((slots.slot1 === slots.slot2) && (slots.slot2 === slots.slot3) && (slots.slot3 === slots.slot4)) {
        winner = true;
    } else if ((slots.slot2 === slots.slot3) && (slots.slot3 === slots.slot4) && (slots.slot4 === slots.slot5)) {
        winner = true;
    } else if ((slots.slot1 === slots.slot3) && (slots.slot3 === slots.slot4) && (slots.slot4 === slots.slot5)) {
        winner = true;
    } else if ((slots.slot1 === slots.slot2) && (slots.slot2 === slots.slot4) && (slots.slot4 === slots.slot5)) {
        winner = true;
    } else if ((slots.slot1 == slots.slot2) && (slots.slot2 === slots.slot3) && (slots.slot3 === slots.slot5)) {
        winner = true;
    } else if ((slots.slot1 === slots.slot2) && (slots.slot2 === slots.slot3) && (slots.slot3 === slots.slot4) && (slots.slot4 === slots.slot5)){
        winner = true;
    } else {
        winner = false;
    }

    if (winner === true) {
        credits = credits + (bet *2);
        resMsg.innerText = "YOU WON X2!!";
    } else {
        credits = credits;
        resMsg.innerText = 'YOU LOST! ADD BET TO PLAY AGAIN';
    }

    bet = 0;

    render();

}

function addBet() {
    if(credits > 0){
        bet = bet + 20;
        totalBet.textContent = "BET: $" + bet;
        spinBtn.disabled = false;
        credits = credits - 20;
        totalCredit.textContent = "CREDITS: $" + credits;
    } else if ((credits <= 0) && (bet === 0)){
        resMsg.innerText = "YOU HAVE NO MORE MONEY:( RESET TO TRY AGAIN!";
    }

    render();

} 
