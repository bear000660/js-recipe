const Quiz = {
  data() {
    return {
      feedback: "",
      quiz: {
        text: "NiziUのこのメンバーの名前は？",
        image: "MAYA.jpg",
        choices: [
          {
            text: "マコ",
            isCorrect: false,
            feedback: "残念！マコはこの写真のメンバーより年上です。",
          },
          {
            text: "マヤ",
            isCorrect: true,
            feedback: "正解！これはマヤの写真です。",
          },
          {
            text: "ニナ",
            isCorrect: false,
            feedback: "残念！ニナはこの写真のメンバーより年下です。",
          },
          {
            text: "リマ",
            isCorrect: false,
            feedback: "残念！リマはこの写真のメンバーより年下です。",
          },
        ],
      },
    }
  },
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback

      if (choice.isCorrect) {
        // 次の問題へ
      }
    },
  },
  computed: {
    quizImagePath() {
      return "./images/" + this.quiz.image
    },
  },
}
Vue.createApp(Quiz).mount("#app")
