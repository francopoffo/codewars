function solution(str){
    let resultado = []
    
    if(str.length % 2 !== 0){
      str += ('_')
    }
    
    for(let i = 0; i < str.length; i = i + 2){
      resultado.push(str[i] + str[i+1])
      
    }
    return resultado   
  }