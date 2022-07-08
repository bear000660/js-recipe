const fruits = ["りんご", "みかん", "パイナップル"]

localStorage.fruits = JSON.stringify(fruits)

console.log(JSON.parse(localStorage.fruits))
