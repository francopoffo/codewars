function sumTwoSmallestNumbers(numbers) {  
    var array = numbers
    var res = array.sort((a,b) => a - b).slice(0, 2)
    var sum
    
    sum = Number(res[0]) + Number(res[1])
    
    return sum    
    
  }
  sumTwoSmallestNumbers([5, 8, 12, 19, 22])