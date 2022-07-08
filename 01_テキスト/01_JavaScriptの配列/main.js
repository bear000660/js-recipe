const karappo = []
console.log(karappo) // => []

const taiikuSeiseki = [1, 3, 5]
console.log(taiikuSeiseki) // => [1, 3, 5]

const barabara = ["とーや", 3, "やすなり"]
console.log(barabara) // => ["とーや", 3, "やすなり"]

const toyaBijutsu = 1
const ryotaBijutsu = 3
const yasunariBijutsu = 5

const bijutsuSeiseki = [toyaBijutsu, ryotaBijutsu, yasunariBijutsu]
console.log(bijutsuSeiseki) // => [ 1, 3, 5 ]

const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]

console.log(seisekibo.length) // => 3

// 配列の要素の数だけループする
for (let i = 0; i < seisekibo.length; i++) {
  console.log(i + "番目の要素は ", seisekibo[i])
}

const countries = ["Japan", "South Korea", "China"]

// 'Taiwan' を 'South Korea' と 'China' の間に追加する
countries.splice(2, 0, "Taiwan") // 位置2から要素を0つ削除して、'Taiwan' を追加する

console.log(countries) // => ['Japan', 'South Korea', 'China', 'Taiwan']

const keihanna = [{ city: "奈良" }, { city: "京都" }, { city: "大阪" }]

// `city`プロパティが"大阪"のオブジェクトのインデックスを取得する
const indexOfOsaka = keihanna.findIndex(function (obj) {
  // obj には、keihannaの要素が順番に入る。
  // obj.city が '大阪' だったら `true` それ以外は false がreturnされる
  return obj.city === "大阪"
})

console.log(indexOfOsaka) // => 2
console.log(keihanna[indexOfOsaka]) // => { city: "大阪" }

const irohaIchinodan = ["い", "ろ", "は", "に", "ほ", "へ", "と"]
const irohaNinodan = ["ち", "り", "ぬ", "る", "を"]

const ichinodanToNinodan = [...irohaIchinodan, ...irohaNinodan]

console.log(ichinodanToNinodan) // => ['い','ろ','は','に','ほ','へ','と','ち','り','ぬ','る','を']

seisekibo.forEach(function (seito) {
  console.log(seito)
})

//練習問題
const undoudekiruSeito = seisekibo.filter((seito) => {
  return seito.taiiku >= 3
})

console.log(undoudekiruSeito)
