// complete the given function

function palindrome(str){
function isPalindrome(string) {
    // Convert the string to lowercase
    string = string.toLowerCase();
    // Reverse the string
    let reversedString = string.split('').reverse().join('');
    // Compare the reversed string to the original string
    if (string === reversedString) {
        return true;
    } else {
        return false;
    }
}

}
module.exports = palindrome
