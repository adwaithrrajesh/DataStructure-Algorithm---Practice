function uniqueNumbers(){
    const array = [12,1,2,1,4,13,4,1];
    const uniqueArray = []
    for(let i=0;i<array.length;i++){
        let unique = true;
        for(let j=0;j<uniqueArray.length;j++){
            if(uniqueArray[j] == array[i]){
                unique = false;
                break
            }
        }
        if(unique){ 
            uniqueArray[uniqueArray.length] = array[i]
        }
    }
    console.log(uniqueArray)
}

uniqueNumbers()