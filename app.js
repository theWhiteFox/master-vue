const app = Vue.createApp({
    data() {
        return {
            myName: 'StephOC theWhiteFox!',
            yearsWorkingWithVue: 2,
            foxImg: 'https://images.fineartamerica.com/images-medium-large-5/eyes-of-a-white-fox-athena-mckinzie.jpg'
        };
    },
    methods: {
        calYearsWorkingWithVue() {
            return this.yearsWorkingWithVue + 5;
        },
        inputMyName() {
            return this.myName;
        },
        randomNo() {
            return Math.floor(Math.random() * 11);
        }
    }
});

app.mount('#user-goal');