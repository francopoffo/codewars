function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(function(x) {
      if (typeof(x) === 'number')
        return true;
      })
  }
  
  console.log(filter_list([1,'a','b',0,15]));