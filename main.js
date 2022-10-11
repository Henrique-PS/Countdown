const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')
const days = document.getElementById('days')

let sec = 0, min = 0, hour = 0, day = 1

function countdown () {

  if(sec < 10) {
    seconds.textContent = '0' + sec
  } else {
    seconds.textContent = sec
  }

  if(min < 10) {
    minutes.textContent = '0' + min
  } else {
    minutes.textContent = min
  }

  if(hour < 10) {
    hours.textContent = '0' + hour
  } else {
    hours.textContent = hour
  }

  if(min < 10) {
    minutes.textContent = '0' + min
  } else {
    minutes.textContent = min
  }

  if(day < 10) {
    days.textContent = '0' + day
  } else {
    days.textContent = day
  }

  sec--

  if(sec === -1) {
    sec = 59
    min--
  }
  
  if(min === -1) {
    min = 59
    hour--
  }
  if(hour === -1) {
    hour = 23
    day--
  }

  if(day === -1) {
    clearInterval(interval)
  }

}

// const interval = setInterval(countdown, 1000)

