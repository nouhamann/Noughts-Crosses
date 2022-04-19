"use strict"


document.addEventListener("DOMContentLoaded", ()=>{
    const squares= document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#currentPlayer')
    let currentPlayer= 1
    

    const winningCondition=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    function checkGame(){
        for(let j=0; j<winningCondition.length; j++){
            const squares1 = squares[winningCondition[j][0]]
            const squares2 = squares[winningCondition[j][1]]
            const squares3 = squares[winningCondition[j][2]]
        
        if(
            squares1.classList.contains('cross') &&
            squares2.classList.contains('cross') &&
            squares3.classList.contains('cross')
        ){
            result.innerHTML="Player One Wins!"
        }
        if(
            squares1.classList.contains('nought') &&
            squares2.classList.contains('nought') &&
            squares3.classList.contains('nought')
        ){
            result.innerHTML="Player Two Wins!"
        } 
    } 
}


    for(let i=0; i<squares.length; i++){
        squares[i].onclick = () =>{
            if(currentPlayer == 1){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('cross')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML= currentPlayer
            } 
            if(squares[i].classList.contains('nought')){
                    squares[i].classList.remove('cross')
            }
            if(squares[i].classList.contains('cross')){
                squares[i].classList.remove('nought')
            }
            else if(currentPlayer == 2){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('nought')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
            }
            checkGame();
        };
    } 
})

function playAgain(){
    document.location.reload() 
}
