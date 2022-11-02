function createPhoneNumber(numbers){
    let primeira = ""
    let segunda = ""
    let terceira = ""
    
    for (var i=0; i < numbers.length; i++){
      if (i < 3){
        primeira += numbers[i].toString();
      }
      else if (i >= 3 && i < 6){
        segunda += numbers[i].toString();
      }
      else if (i >= 6){
        terceira += numbers[i].toString();
      }
    }
    return `(${primeira}) ${segunda}-${terceira}`;
    
  }
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  