<template>
  <div>
    <button type="button" @click="handlerClick">{{ count_ }}</button>
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
  data() {
    return {
      count_: null,
    };
  },
  model: {
    prop: 'count',
    event: 'increment',
  },

  watch: {
    count_: {
      deep: true,
      handler(newValue) {
        if (newValue !== this.count) {
          this.$emit('increment', newValue);
        }
      },
    },
    count: {
      deep: true,
      immediate: true,
      handler(newValue) {
        this.count_ = newValue;
      },
    },
  },
  methods: {
    handlerClick() {
      this.count_ = this.count_ + 1;
    },
  },
};
</script>

<style scoped></style>
