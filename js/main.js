/*----- constants -----*/

const icons = {
    seven: 'imgs/7-symbol.jpg',
    bar: 'imgs/BAR.jpg',
    bell: 'imgs/BELL.jpg',
    cherry: 'imgs/cherry.jpg',
    coin: 'imgs/coin.jpg',
    grape: 'imgs/grapes.jpg',
    lemon: 'imgs/lemon.jpg',
    plum: 'imgs/plum.jpg',
}




/*----- app's state (variables) -----*/

let credits = 500;
let bet = 0;
let slots;
let winner = "";
 

/*----- cached element references -----*/

let betBtn = document.getElementById('betbtn');
let spinBtn = document.getElementById('spinbtn');
let resetBtn = document.getElementById('resetbtn');

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



/*----- event listeners -----*/

betBtn.addEventListener('click', addBet);
spinBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', init);





/*----- functions -----*/





function randomIcon(){
    const icons = ['seven', 'bar', 'bell', 'cherry', 'coin', 'grape', 'lemon', 'plum'];
    const randomIndex = Math.floor(Math.random() * 8)

    return icons[randomIndex]
   
}