const palidrome = (input)=>{
    input = input.toString()
    const reverse = reverseInp(input)
    if(input == reverse) console.log(`It's palidrome`);
    else console.log(`It's not`)
}

const reverseInp = (input)=>{
    let reverse = ''
    for(let i=input.length-1;i>=0;i--){
        reverse +=input[i]
    }
    return reverse
}
palidrome('101')