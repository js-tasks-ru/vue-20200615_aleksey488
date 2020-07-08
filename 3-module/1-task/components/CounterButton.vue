<template>
  <div>
    <button type="button" @click="handlerClick">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
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
</script>

<style scoped></style>
