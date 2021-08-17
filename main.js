const app = Vue.createApp({
    data() {
        return {
            name: '',
            alertText: '',
            userInput: '',
            confirmInput: '',
        };
    },
    computed: {
        addName() {
            console.log('Running again...');
            if(this.name === '') {
                return '';
            }
            return this.name + ' ' + 'theWhiteFox';
        }
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
        resetInput() {
            this.name = '';
        },
        confirmedSaveText(event) {
            this.confirmInput = event.target.value;
        }
    }
});

app.mount('#app');