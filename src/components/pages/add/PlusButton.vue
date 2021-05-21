<template>
  <div
    class="
      absolute
      top-1/2
      right-1/2
      transform
      -translate-x-1/2 -translate-y-1/2
    "
  >
    <div
      class="
        w-20
        h-20
        flex
        justify-center
        items-center
        bg-green-500
        text-white text-2xl
        rounded-full
        cursor-pointer
        transition
        hover:opacity-60
      "
    >
      +
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PlusButton",
});
</script>
