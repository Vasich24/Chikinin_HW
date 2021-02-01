const App = {
  data() {
    return {
      title: "Cписок заміток",
      placeholderString: "Введіть назву замітки",
      inputValue: "",
      notes: ["Нотатка 1", "Нотатка 2"],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
      console.log(value);
    },
  },
};

Vue.createApp(App).mount("#app");
