const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10
let hitPositionOld
let timerId = null

function start() {

function randomSquare() {

  do {
    squares.forEach(square => {
      square.classList.remove('mole')
    })
  
      let randomSquare = squares[Math.floor(Math.random() * 9)]
      
      
      hitPosition = randomSquare.id
      randomSquare.classList.add('mole')
  } while (hitPositionOld == hitPosition);
  
  hitPositionOld = hitPosition
  
  
}

//   let randomSquare = squares[Math.floor(Math.random() * 9)]
//   randomSquare.classList.add('mole')

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      // score.textContent = result
    //   hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('STAR PLATINA, ZA SCORU DA: ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)


}