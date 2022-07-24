const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

// addButton.onclick = function () {
//   let memo = memoInput.value
//   const card = document.createElement("div")
//   card.textContent = memo
//   memoContainer.append(card)
//   memoInput.value = ""
//   const deleteButton = document.createElement("button")
//   deleteButton.onclick = function () {
//     card.remove()
//     deleteButton.remove()
//   }
//   deleteButton.textContent = "削除"
//   memoContainer.append(deleteButton)
// }

// カードを作る
const createCard = function () {
  let memo = memoInput.value
  const card = document.createElement("div")
  card.textContent = memo
  memoContainer.append(card)
  //card.id = "card"

  // 削除ボタンを作る
  const createDeleteButton = function () {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "削除"
    memoContainer.append(deleteButton)
    //deleteButton.id = "delete-button"

    // 削除ボタンを押したときの処理
    const implementDeleteButton = function () {
      card.remove()
      deleteButton.remove()
    }
    deleteButton.onclick = implementDeleteButton
  }
  createDeleteButton()
}

// 入力欄を空欄にする
const blank = function () {
  memoInput.value = ""
}

addButton.onclick = function () {
  createCard()
  blank()
  //   //const card = document.getElementById("card")
  //   blank()
  //   createDeleteButton()
  //   //const deleteButton = document.getElementById("delete-button")
  //   deleteButton.onclick = implementDeleteButton
}
