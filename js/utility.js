function playWithDom(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function playWithDom2(elementId2){
    const element2 = document.getElementById(elementId2);
    element2.classList.remove('hidden')
}

function setBackground(elementId){
    const addColor = document.getElementById(elementId);
    addColor.classList.add('bg-pink-400')
}

function randomAlphabets(){
    const alphabetsStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsStrings.split('');
    // const alphabets = ['a', 'b', 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z']
    console.log(alphabets)


    const randomNumbers = Math.random()*25;
    const index = Math.round(randomNumbers);
    

    const alphabetsNumber = alphabets[index]
    console.log(index, alphabetsNumber);
    return alphabetsNumber;
}