// complete the given function

function palindrome(str){
let a = str.toLowerCase();

let ans = "";
for(let i=a.length;i>=0;i--){
	ans+=a.charAt(i);
}
if(a === ans){
    return true;
}
return false;
}
module.exports = palindrome
