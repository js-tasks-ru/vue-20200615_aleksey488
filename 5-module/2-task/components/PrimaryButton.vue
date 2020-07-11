<script>
import BaseButton from './BaseButton';
export default {
  name: 'PrimaryButton',
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
        class: 'button_primary',
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
.button_primary {
  background-color: var(--blue);
  border-color: var(--blue);
  color: var(--white);
}

.button_primary:hover {
  background-color: var(--blue-light);
  border-color: var(--blue-light);
}
</style>
