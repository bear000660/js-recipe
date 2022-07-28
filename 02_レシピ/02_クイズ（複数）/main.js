// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const feedback = document.getElementById("feedback")

// // choice1.onclick = function () {
// //   feedback.textContent =
// //     "残念！ゴリアテは、旧誓約書に登場するダビデに石で殺される巨人だよ。"
// // }
// // choice2.onclick = function () {
// //   feedback.textContent =
// //     "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// // }
// // choice3.onclick = function () {
// //   feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
// // }

// // // 正解を判定する
// // const choose = function(choiceString) {
// //     if (choiceString === "ゴリアテ") {
// //       feedback.textContent =
// //         "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
// //     } else if (choiceString === "ゼニガメ") {
// //       feedback.textContent =
// //         "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// //     } else if (choiceString === "ガニメデ") {
// //       feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
// //     }
// //   }

// //   choice1.onclick = function() {
// //     // ゴリアテを選択
// //     choose("ゴリアテ")
// //   }
// //   choice2.onclick = function() {
// //     // ゼニガメを選択
// //     choose("ゼニガメ")
// //   }
// //   choice3.onclick = function() {
// //     // ガニメデを選択
// //     choose("ガニメデ")
// //   }

// // // 正解を判定する
// // const choose = function (choiceString) {
// //   if (choiceString === 0) {
// //     feedback.textContent =
// //       "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
// //   } else if (choiceString === 1) {
// //     feedback.textContent =
// //       "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// //   } else {
// //     feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
// //   }
// // }

// // choice1.onclick = function () {
// //   // 0 番目の選択肢を選択
// //   choose(0)
// // }
// // choice2.onclick = function () {
// //   // 1 番目の選択肢を選択
// //   choose(1)
// // }
// // choice3.onclick = function () {
// //   // 2 番目の選択肢を選択
// //   choose(2)
// // }

// // feedback の内容
// const feedbacks = [
//   "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
//   "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
//   "正解！ガニメデは、木星の第三惑星だよ！",
// ]

// // 正解を判定する
// const choose = function (choiceNumber) {
//   feedback.textContent = feedbacks[choiceNumber]
// }

// choice1.onclick = function () {
//   // 0 番目の選択肢を選択
//   choose(0)
// }
// choice2.onclick = function () {
//   // 1 番目の選択肢を選択
//   choose(1)
// }
// choice3.onclick = function () {
//   // 2 番目の選択肢を選択
//   choose(2)
// }

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const next = document.getElementById("quiz-next")

// 何問目のクイズか数える変数。
let i

// クイズの内容
const quiz = [
  // クイズ１の内容
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
  // クイズ２の内容
  {
    text: "これは何問目でしょう？",
    image: "Two.jpeg",
    choices: [
      {
        text: "1",
        feedback: "残念！ひとつすくないよ。",
      },
      {
        text: "2",
        feedback: "正解！２でも３でもないよ。",
      },
      {
        text: "3",
        feedback: "残念！ひとつおおいよ。",
      },
    ],
  },
]

// quiz を画面に表示する関数
const reloadQuiz = function (index) {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz[index].text

  // 画像を表示
  quizImage.src = "./images/" + quiz[index].image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz[index].choices[0].text
  choice2.textContent = quiz[index].choices[1].text
  choice3.textContent = quiz[index].choices[2].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz[i].choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}

// 次へボタンを押したときの動作
next.onclick = function () {
  i += 1
  reloadQuiz(i)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz(i)
