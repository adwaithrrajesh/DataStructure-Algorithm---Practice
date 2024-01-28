const prefix = () =>{
    const array = ['flow','floor','flat']
    let prefix = array[0]
    for(let i=1;i<array.length; i++){
        let word = array[i]
        let store = ''
        for(let j=0;j<word.length && prefix.length ; j++){
            if(word[j] !== prefix[j]) break
            store += word[j]
        }
        prefix = store
        store = ''
    }
    return prefix
}

console.log(prefix())