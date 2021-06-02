

const icons = {
    seven: 'imgs/7-symbol.jpg',
    bar: 'imgs/BAR.jpg',
    bell: 'imgs/BELL.jpg',
    cherry: 'imgs/cherry.jpg',
    coin: 'imgs/coin.jpg',
    grape: 'imgs/grapes.jpg',
    lemon: 'imgs/lemon.jpg',
}





let credits = 500;
let bet = 0;
let res;
let winner;
 



const betBtn = document.getElementById('betbtn');
const spinBtn = document.getElementById('spinbtn');
const resetBtn = document.getElementById('resetbtn');

const slotEls = {
    slot1: document.querySelector("#pos1 img"),
    slot2: document.querySelector("#pos2 img"),
    slot3: document.querySelector("#pos3 img"),
    slot4: document.querySelector("#pos4 img"),
    slot5: document.querySelector("#pos5 img"),
}

const totalCredit = document.getElementById('creditbox');
const totalBet = document.getElementById('betbox');
const winMsg = document.getElementById('winlose');





betBtn.addEventListener('click', addBet);
spinBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', init);











function getRandomIcon(){
    const options = ['seven', 'bar', 'bell', 'cherry', 'coin', 'grape', 'lemon'];
    const randomIndex = Math.floor(Math.random() * 7)

    return options[randomIndex]
   
};

function startGame(){
    res.slot1 = getRandomIcon();
    res.slot2 = getRandomIcon();
    res.slot3 = getRandomIcon();
    res.slot4 = getRandomIcon();
    res.slot5 = getRandomIcon();

    // if()  - changed from 7 to 5 slots to make logic for if/else statement less complex 
    if ((res.slot1 === res.slot2) && (res.slot2 === res.slot3) && (res.slot3 === res.slot4)) {
        winner = true;
    } else if ((res.slot2 === res.slot3) && (res.slot3 === res.slot4) && (res.slot4 === res.slot5)) {
        winner = true;
    } else if ((res.slot1 === res.slot3) && (res.slot3 === res.slot4) && (res.slot4 === res.slot5)) {
        winner = true;
    } else if ((res.slot1 === res.slot2) && (res.slot2 === res.slot4) && (res.slot4 === res.slot5)) {
        winner = true;
    } else if ((res.slot1 == res.slot2) && (res.slot2 === res.slot3) && (res.slot3 === res.slot5)) {
        winner = true;
    } else if ((res.slot1 === res.slot2) && (res.slot2 === res.slot3) && (res.slot3 === res.slot4) && (res.slot4 === res.slot5)){
        winner = true;
    } else {
        winner = false;
    }

    if (winner === true) {
        credits = credits + bet * 2;
        winMsg = "YOU WON!!"
    } else {
        credits = credits + bet / 2;
        winMsg = 'YOU LOST!'
    }

    render();

}