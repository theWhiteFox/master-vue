const app = Vue.createApp({
    data() {
        return {
            calNum: 0,
            warning: '',
        };
    },
    computed: {
        result() {
            if(this.calNum < 37) {
                console.log(this.calNum);
                return this.warning = 'Not there yet';
            } else if(this.calNum === 37) {
                return this.calNum;
            } else {
                return this.warning = 'Too much!';
            }
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.calNum = 0;
            }, 3000);
        }
    },
    methods: {
        addNumber(num) {
            this.calNum += num;
        }
    }
});

app.mount('#assignment');