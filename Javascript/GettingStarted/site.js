
'use strict';

const SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
const FACES = ["Ace", "Two", "Three", 
                "Four", "Five", "Six", 
                "Seven", "Eight", "Nine", 
                "Ten", "Jack", "Queen", 
                "King"];

let numberOfDecks = 3; 
let playerNames = ["Player One", "Player Two", "Player Three"];
let deck = generateDecks();
let players = generatePlayers();



//converts a 0 to 51 into a string from the array
function cardToString(cardNumber){
    
    //get the value of the array
    let valueIndex = cardNumber % 13;

    //get the suit
    let suitIndex = Math.floor(cardNumber / numberOfDecks / 13);
   
    return(`${CARDVALUE[valueIndex]} of ${SUITS[suitIndex]} `);
}

//create an array of players including the dealer
function generatePlayers(){
    let players = [];
    createPlayerObject(players, "Dealer", []);

    for(let i = 0; i < playerNames.length; i++){
        players.push({name: playerNames[i]});
    }
    newGame(players);
    return players;
}

//creates a player in the players array of name and 
function createPlayerObject(players, name){
    players.push({
        name: name
    });
}

//makes an array with 0 to 51 integers in it and return array
function generateDecks(){
    let decks = [];

    for(let deck = 0; deck < numberOfDecks; deck++){
        for(let suit = 0; suit < SUITS.length; suit++){
            for(let face = 0; face < FACES.length; face++){
                decks.push({
                    suit: SUITS[suit],
                    face: FACES[face]
                });
            }
        }
    }
    return decks;
}

//shuffel the deck
function shuffelArray(array){
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.trunc(Math.random()* i);
        
        //swap the two cards in the cards array
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//console log the whole deck
function cardsToString(cards){
    let output = "[";
    cards.forEach(card => {
        output += `${card.face} of ${card.suit},\n`;
    });
    output += "]";
    return output;
}

//player discard
function playerDiscards(players, playerNumber){
    players[playerNumber].cards = [];
}

//reset for New game
function newGame(players){
    players.forEach(player => player['cards'] = []);
}

//calculates the value for the given hand
function calculateHand(cards){

    
}


shuffelArray(deck);
console.log(cardsToString(deck));



//shuffelCards(deck);



//add cards
// playerCards.push(deck.pop());
// playerCards.push(deck.pop());

console.log("Welcome to Blackjack!");
console.log("You are dealt:");

