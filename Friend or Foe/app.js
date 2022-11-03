function friend(friends){
    let meusAmigos = []
    let amigoString = ""
    
    for(i = 0; i < friends.length; i++){
      
      amigoString = friends[i].toString()
      
      if(amigoString.length == 4){
        meusAmigos.push(amigoString)
      }
         
    }
    return meusAmigos
  }
  