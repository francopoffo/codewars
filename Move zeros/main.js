function moveZeros(arr) {  

    let zeros = []; 
    let outros = [];
    let res;
    
    for (let i = 0; i < arr.length; i++) {
    if   (arr[i] ===  0) {
     zeros.push(Number(arr[i]));
     } else {
          outros.push(Number(arr[i]));
     }
    }
    res = outros.concat(zeros)

    return res
}