const app = Vue.createApp({
    data() {
        return {
            alertText: '',
            userInput: '',
            confirmInput: '',
        };
    },
    methods: {
        saveAlert(event) {
            this.alertText = event.target.value;
        },
        showAlert() {
            alert(this.alertText);
            this.alertText = '';
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