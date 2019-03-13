new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    attackLogs: []
  },
  methods: {
    attack: function() {
      const dmg = Math.floor(Math.random() * 10);
      this.monsterHealth -= dmg;
      this.attackLogs.push({
        log: "You hit the monster for: " + dmg,
        isPlayer: true
      });
      if (this.monsterHealth <= 0) {
        this.win();
      }
      this.monsterAttack();
    },
    specialAttack: function() {
      const dmg = Math.floor(Math.random() * 15);
      this.monsterHealth -= dmg;
      this.attackLogs.push({
        log: "You hit the monster for: " + dmg,
        isPlayer: true
      });
      if (this.monsterHealth <= 0) {
        this.win();
      }
      this.monsterAttack();
    },
    heal: function() {
      if (this.playerHealth < 100) {
        const healed = Math.floor(Math.random() * 10);
        this.playerHealth += healed;
        this.attackLogs.push({
          log: "You healed for: " + healed,
          isPlayer: true
        });
      } else {
        alert("Your health is full!");
      }
      this.monsterAttack();
    },
    restart: function() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.attackLogs = [];
    },
    win: function() {
      alert("You won!");
    },
    monsterAttack: function() {
      const dmg = Math.floor(Math.random() * 10);
      this.playerHealth -= dmg;
      this.attackLogs.push({
        log: "The monster attacked you back for: " + dmg,
        isPlayer: false
      });
    }
  }
});
