const app = Vue.createApp({
  data() {
    return {
      userEnteredValue: '',
      goals: [],
      editEnteredValue: [],
      editOptionValue: []
    };
  },
  computed: {
    goalsLength() {
      if (this.goals.length === 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    addGoal() {
      if (this.userEnteredValue != '') {
        this.goals.push([this.userEnteredValue, false]);
        this.userEnteredValue = '';
        this.editEnteredValue.push('');
        this.editOptionValue.push(false);
      }
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
      this.editEnteredValue.splice(idx, 1);
      this.editOptionValue.splice(idx, 1);
    },
    doneGoal(idx) {
      this.goals[idx][1] = !this.goals[idx][1];
    },
    editGoal(idx) {
      if (this.editEnteredValue[idx] != '') {
        this.goals[idx][0] = this.editEnteredValue[idx];
        this.editEnteredValue[idx] = '';
      }
    },
    editOption(idx) {
      this.editOptionValue[idx] = !this.editOptionValue[idx];
    }
  },
});

app.mount('#user-goals');
