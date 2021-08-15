const app = Vue.createApp({
    data() {
        return {
            title: 'Master Stephen',
            userInput: '',
            confirmInput: '',
        };
    },
    methods: {
        showAlert() {
            alert(this.title);
          },
          saveText(event) {
            this.userInput = event.target.value;
          },
          confirmedSaveText(event) {
            this.confirmInput = event.target.value;
          }
    }
});

app.mount('#app');