/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
const string1 = "rail safety";
function isAnagram(str1, str2) {

    if(str1.length == str2.length){
        str1 = str1.toLowerCase().split("");
        str2 = str2.toLowerCase().split("");

        str1.sort();
        str2.sort();
        
        // console.log(str1,str2)
        let length = str1.length;
        
        for(let i = 0; i < length; i++){
            if(str1[i] != str2[i]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }

}

if (isAnagram('abc!', '!bac')) {
    console.log("String is anagram");
}else {
    console.log("String is not anagram");
}


module.exports = isAnagram;
