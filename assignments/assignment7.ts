let sentence : string = "Java programming is fun and challenging";
// Splitting the sentence on the basis of ' ' which will give string array = [Java,programming,is,fun,and,challenging]
let words : string[] = sentence.split(' ');
// 1. Count the total number of words in the sentence.
let wordsLength : number = words.length;
console.log('Total number of words in the sentence is: ' +wordsLength);

// 2. Print the sentence words in reverse order.
let reverse : string = "";
for(let i:number =wordsLength-1;i>=0;i--){
    reverse = reverse + words[i] + " ";
}
console.log(reverse);

// 3. Convert the first character of each word to uppercase and print original sentence
for(let i:number =0 ;i<wordsLength;i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);    
}
console.log('Original Sentence : '+words.join(' '));

