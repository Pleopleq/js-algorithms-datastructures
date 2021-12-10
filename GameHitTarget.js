function solution (mtrx){
    let targetIndexes = [];
    let arrowIndexes = [];
    let arrow;
    
    for(let i = 0; i < mtrx.length; i++) {
      for(let k = 0; k < mtrx[i].length; k++) {
        if(mtrx[i][k] === 'x') {
          targetIndexes.push(i, k)
        }
        if(mtrx[i][k] !== ' ' && mtrx[i][k] !== 'x'){
          arrow = mtrx[i][k]
          arrowIndexes.push(i,k)
        }
      }
    }
    
    if(arrow === '>') {
      if(targetIndexes[0] === arrowIndexes[0 && targetIndexes[1] > arrowIndexes[1]]) {
        return true
      }
      return false
    }
    
    if(arrow === '<') {
      if(arrowIndexes[0] === targetIndexes[0] && targetIndexes[1] < arrowIndexes[1]) {
        return true
      }
      return false
    }
    
    if(arrow === 'v') {
      if(targetIndexes[1] === arrowIndexes[1] && targetIndexes[0] > arrowIndexes[0]){
        return true
      }
      return false
    }
    
    if(arrow === '^') {
      if(targetIndexes[1] === arrowIndexes[1] && targetIndexes[0] < arrowIndexes[0]){
        return true
      }
      return false
    }

  }
  