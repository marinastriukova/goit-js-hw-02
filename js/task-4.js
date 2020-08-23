function formatString (string, maxLength = 40) {
    // Write code under this line
  const strLength = string.split('');
   
    if(strLength.length > maxLength){
      strLength.length = maxLength;
        return strLength.join('') + ('...');
    } 
    else if(strLength.length < maxLength){
      return strLength.join('');
    }
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'