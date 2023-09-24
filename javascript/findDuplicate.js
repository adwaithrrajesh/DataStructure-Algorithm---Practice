function findDuplicate() {
    const array = [1, 2, 4,2,321, 4,12,3, 5,123,2,12];
    const dup = [];
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j] && !dup.includes(array[i])) {
          dup.push(array[i]);
        }
      }
    }
  
    console.log(dup);
  }
  
findDuplicate()