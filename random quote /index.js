const quoteElement = document.getElementById("quote");
const quotes = [
    "“The difference between a novice and a master is that a master has failed more times than a novice had tried.” Koro-Sensei from Assassination Classroom",
    "“I hate perfection. To be perfect is to be unable to improve any further.” Kurotsuchi Mayuri from Bleach",
    "“The best way to predict the future is to create it.” ",
    "“If you don’t like the hand that fate’s dealt you with, fight for a new one.” Naruto Uzumaki from Naruto",
    "“Hurt me with the truth. But never comfort me with a lie.” Erza Scarlet from Fairy Tail",
  "“Every journey begins with a single step. We just have to have patience.” Milly Thompson from Trigun",
  "“You’ve got two legs and a heartbeat. What’s stopping you?” Inuyasha from Inuyasha",
  "“If you don’t take risks, you can’t create a future.”  Monkey D. Luffy from One Piece",
  "“Learn to treasure your life because unfortunately, it can be taken away from you anytime.” L Lawliet from Death Note",
  "“It’s more important to master the cards you’re holding than to complain about the ones your opponent was dealt.” Grimsley from Pokémon",
  "“Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!” Shintaro Midorima from Kuroko no Basuke",
  "“No amount of talent trumps hard work.” Rin Matsuoka from Free!",
  " “Life is not a game of luck. If you wanna win, work hard.”  Sora from No Game No Life",
];
// const usedIndex = new set();

function generateQuote() {

// if (usedIndex.size >= quotes.length) {
//     usedIndex.clear();
// }


//   while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    // if (usedIndex.has(randomIdx)) continue;
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    // usedIndex.add(randomIdx);   
    // break;
//   }
}
