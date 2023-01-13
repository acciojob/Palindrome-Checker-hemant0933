// complete the given function

function palindrome(str){
let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
	
}
module.exports = palindrome
