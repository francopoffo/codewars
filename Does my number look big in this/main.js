function narcissistic(value) {
    const string = value.toString();
    let sum = 0;
    
    console.log(string.length);
    
    for(let i = 0; i <= string.length; i++){
      sum += ((Number(string.charAt(i))) ** string.length);
    }  
    
    if(sum == value){
      return true
    }else{
      return false
    }
}