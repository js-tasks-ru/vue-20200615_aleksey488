<script>
import BaseButton from './BaseButton';
export default {
  name: 'SecondaryButton',
  components: { BaseButton },
  props: {
    block: Boolean,
    tag: {
      type: String,
      default: 'button',
      validator: (tag) => {
        return ['button', 'a', 'router-link'].includes(tag);
      },
    },
  },
  render(createElement) {
    return createElement(
      'base-button',
      {
        props: this.$props,
        class: 'button_secondary',
        on: {
          click: () => {
            this.$emit('click');
          },
        },
      },
      this.$slots.default,
    );
  },
};
</script>

<style scoped>
.button_secondary {
  background-color: var(--white);
  border-color: var(--blue);
  color: var(--blue);
}

.button_secondary:hover {
  border-color: var(--blue-light);
}
</style>
