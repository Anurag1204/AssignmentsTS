function verifyPalindrome(words : string): boolean {
    let filteredInput : string = words.toLowerCase();
    let input : string = filteredInput.replace(/[^a-zA-Z0-9]/g,"");
    let rev : string = "";
    for(let i:number =input.length-1;i>=0;i--){
       rev = rev + input.charAt(i);
    }

    if (rev === input){
        return true;
    }
    return false;
}

console.log('this sentence is palindrome ?: ' + verifyPalindrome("A man, a plan, a canal: Panama"));

console.log('this sentence is palindrome ?: ' + verifyPalindrome("race a car"));