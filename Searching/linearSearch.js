function linearSearch(userInp){
    const array = [1,2,4,3,2,4]
    for(let i=0;i<array.length;i++){
        if(array[i] == userInp){
            return console.log(`Value found at array postion ${i}`);
        }
    }
    return console.log('unable to find the value')
}

// Time Complexity BIG O Linear

linearSearch(2)