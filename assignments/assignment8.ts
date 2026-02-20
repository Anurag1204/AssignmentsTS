let paragraph : string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let words : string[] = paragraph.split(' ');
let javaCount : number = 0;
for(let i:number =0 ; i<words.length;i++){
    if(words[i] === 'Java'){
        javaCount++;
        console.log('Index of java word is: '+i);
    }
}
console.log('Total number of java in this sentence is: ' +javaCount);