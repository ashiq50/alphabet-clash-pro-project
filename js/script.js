// function play () {
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden')

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }
function startTheGame(){
    const getRandomAlphabet = randomAlphabets();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = getRandomAlphabet;
    setBackground(getRandomAlphabet)
}


function play (){
    playWithDom('home-section');
    playWithDom2('play-ground')
    startTheGame()
}