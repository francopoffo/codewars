const maxSequence = function(arr){
  
    let maxAteAgora = 0
    let maxAcabandoNesse = 0
      
    for (let i = 0; i < arr.length; i++)
    {
        maxAcabandoNesse = maxAcabandoNesse + arr[i]
        if (maxAteAgora < maxAcabandoNesse)
            maxAteAgora = maxAcabandoNesse
 
        if (maxAcabandoNesse < 0)
            maxAcabandoNesse = 0
    }
    return maxAteAgora
}