//function that takes in a string, however long, and 
// 1-changes all .'s to !'s
// 2-AND changes all ?'s to ?!'s (we thought this was more gramatically correct than replacing ? with !)
//we jokingly call it 'manual' enthusiasticator because it took more lines than another option, below - see 'NOTE A'
function manualEnthusiasticator( sentence ){
    // make the sentence enthusiastic by adding a "!"

    for (let i = 0; i < sentence.length; i++){
      if (sentence.charAt(i) === "."){  //if the character at sentence at index i is a . 
        //turn the string into an array (["h", "e", "l"...])
        sentence = sentence.split('');
        //now that it's an array, we can swap out one item for another
        //change the thing at i to a !
        sentence[i] = '!';
        //turn the array back into a string
        sentence = sentence.join('');
      } 
      else if (sentence.charAt(i) === "?") { //if the character at sentence at index i is a ?
        //turn the string into an array (["h", "e", "l"...])
        sentence = sentence.split('');
        //now that it's an array, we can swap out one item for another
        //change the thing at i to a ?!
        sentence[i] = '?!';
        //turn the array back into a string
        sentence = sentence.join('');
      }

    } 
    return sentence;
} 
console.log(manualEnthusiasticator(`Hello, anyone there? I hope you're doing great. Fine weather we're having today. Isn't it? Yes. It truly is.`));

//NOTE A - after we got the above working, we scanned the documentation for strings in javascript
//and found String.replace() - which seemed to solve all of our problems in one line of code!!! 
//So we made this 2nd function, called 'automatic' because it's so easy.
//however, we then realized that String.replace() ONLY MODIFIES THE FIRST INSTANCE! 
//So in this case manual was better anyway *shrug*
function automaticEnthusiasticator( sentence ) { 
  let newSentence = sentence.replace(".", "!");
  return newSentence;
}
console.log(automaticEnthusiasticator(`I can get pretty excited. But only at first. Then it's all downsville, USA. Population: me.`));







//create an array of tarot cards
let tarot = [`The Moon`, `The Hermit`, `The Devil`, `Death`, `The Chariot`, `Judgement`, 'The World'];
console.log ( `At start, tarot is:`, tarot );
   
//create a function that randomly shuffles the cards in the array
function shuffleCards(thingToShuffle){
    //declare a new empty array, which will hold the shuffled cards.
    let shuffleArray=[];

    for (let i=thingToShuffle.length; i>0; i--){ //why decrement from end? see 'NOTE B' below, Pete is clever.
        //get a random number, with the help of some built in functions, between 0 and the length of our array.
        let randomNumber = Math.floor(Math.random() * thingToShuffle.length);

        //splice out the card at that random number and store it
        let splicedCard = thingToShuffle.splice(randomNumber, 1);

        //push the stored card back into the new, shuffled array.
        shuffleArray.push(splicedCard[0]);
    } //(repeat until all cards are gone from the original array)
    return shuffleArray;
}
console.log (shuffleCards(tarot));

//NOTE B: Pete & Miriam discovered that if you run the for loop the usual way, 
//  for (i = 0; i<thingtoThuffle.length; i++), 
//it will only run four times - this is because inside the loop, we're shortening
//thingToShuffle 's length. So Pete's idea was to start at the end of the array and
//decrememnt, so we are always 'outrunning' the shortening effect that takes place inside
// and we're able to finish looping through the whole array even as we shorten it. 

//another solution is to store the original length of the array first, 
//then use that number when setting up the for loop:
//  let originalLength = thingToShuffle.length;
//  for (let i=0; i<originalLength; i++)
//this also works because originalLength is never modified.

