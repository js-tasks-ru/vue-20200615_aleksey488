<template>
  <div class="input-group input-group_icon" :class="iconClass">
    <slot name="left-icon" />
    <input
      v-if="!this.multiline"
      v-model="value_"
      v-bind="$attrs"
      class="form-control"
      :class="{'form-control_sm': small, 'form-control_rounded': rounded}"
    />
    <textarea
      v-else
      v-model="value_"
      v-bind="$attrs"
      class="form-control"
      :class="{'form-control_sm': small, 'form-control_rounded': rounded}"
    />
    <slot name="right-icon" />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    small: Boolean,
    rounded: Boolean,
    multiline: Boolean,
    value: String,
  },
  data() {
    return {
      value_: this.value,
    };
  },
  computed: {
    iconClass() {
      return {'input-group_icon-left': !!this.$scopedSlots['left-icon'], 'input-group_icon-right': !!this.$scopedSlots['right-icon']};
    },
  },
  watch: {
    value_: {
      deep: true,
      handler(newValue) {
        if (newValue !== this.value) {
          this.$emit('input', newValue);
          this.$emit('change', newValue);
        }
      },
    },
    value: {
      deep: true,
      handler(newValue) {
        if (newValue !== this.value_) {
          this.value_ = newValue;
        }
      },
    },
  },
};
</script>

<style scoped>
.form-control {
  padding: 12px 16px;
  height: 52px;
  border-radius: 8px;
  border: 2px solid var(--blue-light);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  transition: 0.2s all;
  background-color: var(--white);
  outline: none;
  box-shadow: none;
}

.form-control::placeholder {
  font-weight: 400;
  color: var(--blue-2);
}

.form-control:focus {
  border-color: var(--blue);
}

textarea.form-control {
  width: 100%;
  min-height: 211px;
}

.form-control.form-control_rounded {
  border-radius: 26px;
}

.form-control.form-control_sm.form-control_rounded {
  border-radius: 22px;
}

.form-control.form-control_sm {
  padding: 8px 16px;
  height: 44px;
  border-radius: 4px;
}

.input-group {
  position: relative;
}

.input-group .form-control {
  width: 100%;
}

.input-group.input-group_icon .form-control {
  padding-left: 50px;
}

.input-group.input-group_icon .icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.input-group.input-group_icon.input-group_icon-left .icon:first-child {
  left: 16px;
}

.input-group.input-group_icon.input-group_icon-right .icon:last-child {
  right: 16px;
}
</style>
