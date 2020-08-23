function findLongestWord (string = "") {

    const arrayWords = string.split(' ');
    let longestWord = 0;
    let longest = '';
    
    for (let i = 0; i < arrayWords.length; i += 1){
        if (arrayWords[i].length > longestWord) {
        
        longestWord = arrayWords[i].length;
        longest = arrayWords[i]
      }
    }  
    return longest;
  }
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  console.log(findLongestWord('May the force be with you'));
  // 'force'