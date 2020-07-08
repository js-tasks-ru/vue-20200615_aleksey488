export const CounterButton = {
  template: '<button type="button" @click="handlerClick">{{ count }}</button>',

  props: {
    count: {
      type: Number,
      default: () => 0,
    },
  },
  model: {
    prop: 'count',
    event: 'increment',
  },

  methods: {
    handlerClick() {
      let count = this.count + 1;
      this.$emit('increment', count);
    },
  },
};
