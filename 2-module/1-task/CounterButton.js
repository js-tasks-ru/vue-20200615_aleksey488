export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="handlerClick">{{ count }}</button>',

  // Компонент должен иметь пропс
  props: {
    count: {
      type: Number,
      default: () => 0,
    },
  },
  // Компонент должен иметь модель
  model: {
    prop: 'count',
    event: 'increment',
  },

  // Шаблон лучше иметь максимально простым, а логику выносить в методы
  methods: {
    handlerClick() {
      let count = this.count + 1;
      this.$emit('increment', count);
    },
  },
};
