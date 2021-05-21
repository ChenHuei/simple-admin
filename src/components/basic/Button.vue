<template>
  <button
    class="
      px-4
      py-2
      border
      rounded-xl
      transition
      hover:bg-green-200
      hover:border-green-200
    "
    style="outline: none"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BasicButton",
  inheritAttrs: false,
});
</script>
