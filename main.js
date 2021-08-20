const app = Vue.createApp({
    data() {
        return {
            enteredItemVal: '',
            items: []
        };
    },
    methods: {
        addItem() {
            this.items.push(this.enteredItemVal);
        },
        removeItem(i) {
            this.items.splice(i, 1);
        }
    },
});

app.mount('#todo');