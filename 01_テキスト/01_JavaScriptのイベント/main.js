// button 要素と click イベント
//イベントが発生する要素を取得する
const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

//関数を登録
button.onclick = alertMessage //アラートが表示される

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

//練習問題2
const display = function (e) {
  console.log(e.key)
}

document.onkeydown = display
