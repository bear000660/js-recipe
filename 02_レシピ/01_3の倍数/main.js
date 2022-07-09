const number = 24

// if (number % 3 === 0) {
//   console.log(number + "!!!!!!!")
// } else {
//   console.log(number)
// }

// nに入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
// for (let n = 1; n <= number; n++) {
//   if (n % 3 === 0) {
//     console.log(n + "!!!!!!!")
//   } else {
//     console.log(n)
//   }
// }

// 引数 number を受け取る関数
const genkiFunction = function (number) {
  // n を 1 から、 number まで、値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

// 発展★[FizzBuzz]
const FizzBuzzFunction = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("FizzBuzz")
      } else {
        console.log("Fizz")
      }
    }
    if (i % 3 !== 0) {
      if (i % 5 === 0) {
        console.log("Buzz")
      } else {
        console.log(i)
      }
    }
    // switch (i) {
    //   case i % 3 === 0:
    //     console.log("Fizz")
    //     break
    //   case i % 5 === 0:
    //     console.log("Buzz")
    //     break
    //   case i % 15 === 0:
    //     console.log("FizzBuzz")
    //     break
    // }
  }
}

// 発展★★[３が大好き]
const like3Function = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(`${i}!!!!!!!`)
    } else {
      var j = String(i)
      if (j.includes(3)) {
        console.log(`${i}!!!!!!!`)
      } else {
        console.log(i)
      }
    }
  }
}

// 発展★★★[元気な秒針]
// プログラム (1)
let n = 1
const genkiFunction1 = function () {
  if (n % 3 === 0) {
    console.log(`${n}!!!!!!!`)
  } else {
    console.log(n)
  }
  n += 1
}
const interval = function () {
  setInterval(genkiFunction1, 1000)
}
// プログラム (2)
document.onload = interval()
