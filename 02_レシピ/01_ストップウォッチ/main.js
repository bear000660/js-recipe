const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 1
  //console.log(count)
  display.textContent = count / 100
}

button.onclick = function () {
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    //stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
