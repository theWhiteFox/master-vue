function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            kingsHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        kingBarStyle() {
            if (this.kingsHealth < 0 ) {
                return { width: '0%'};
            }
            return { width: this.kingsHealth + '%' };
        },
        playerBarStyle() {
            if (this.playerHealth < 0 ) {
                return { width: '0%'};
            }
            return { width: this.playerHealth + '%' };
        },
        sneakAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        kingsHealth(value) {
            if ( value <= 0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // king lost 
                this.winner = 'player';
            }
        },
        playerHealth(value) {
            if ( value <= 0 && this.kingsHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // player lost 
                this.winner = 'king';
            }
        }
    },
    methods: {
        startGame() {
            this.kingsHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackKing() {
            this.currentRound++;
            const attackVal = getRandomValue(5, 12);
            this.kingsHealth -= attackVal;
            this.addLogMessage('player', 'attack', attackVal);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackVal = getRandomValue(8, 15);
            this.playerHealth -= attackVal;
            this.addLogMessage('king', 'attack', attackVal);
        },
        sneakAttackKing() {
            this.currentRound++;
            const attackVal = getRandomValue(10, 25);
            this.kingsHealth -= attackVal;
            this.addLogMessage('player', 'attack', attackVal);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if(this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'king';
        },
        addLogMessage(who, what, val) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionVal: val
            });
        }
    },
});

app.mount('#game');