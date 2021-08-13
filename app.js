const app = Vue.createApp({
    data() {
        return {
            title: 'Master Vue!',
            counter: 0,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName ;
        }
    }
});

app.mount('#user-goal');