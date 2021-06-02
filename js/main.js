

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
    slot6: document.querySelector("#pos6 img"),
    slot7: document.querySelector("#pos7 img"),
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
    res.slot6 = getRandomIcon();
    res.slot7 = getRandomIcon();

    // if()  - had to pause cause I was stuck trying to figure out the if/else statement to determine the winner 


}