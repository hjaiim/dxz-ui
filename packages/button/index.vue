<template>
  <button
    class="dxz-button"
    :disabled="isDisabled"
    @click="handleClick"
    :class="['dxz-button_'+type,'dxz-button_normal']"
  >
    <span class="dxz-button__icon"></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "dxzButton",
  created() {},
  mounted() {},
  data() {
    return {
      isDisabled: !!this.disabled
    };
  },
  components: {},
  props: {
    // 类型
    type: {
      validator(t) {
        return ["default", "primary", "danger", "warn"].indexOf(t) > -1;
      },
      default: "default",
      required: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.$emit("click", e);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.dxz-button {
  display: inline-block;
  margin-right: 10px;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  font-weight: 400;
  border: 1px solid;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  border-color: #606266;
  &_normal {
    height: 38px;
    padding: 0 18px;
    line-height: 38px;
    font-size: 14px;
  }
  &_default {
    border: 1px solid;
    background-color: #fff;
    border-color: #606266;
    color: #000;
    cursor: pointer;
    &:hover {
      background-color: #ebedf0;
    }
  }
  &_danger {
    background-color: #ff5722;
  }
  &_warn {
    background-color: #ffb802;
  }
  &_primary {
    background-color: #39c;
  }
}
</style>