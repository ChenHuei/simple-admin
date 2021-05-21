<template>
  <router-link
    class="mb-4"
    :to="link"
    :class="link === currentPath ? 'text-green-200' : ''"
    v-on="$listeners"
  >
    {{ title }}
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Link",
  props: {
    link: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    currentPath: {
      type: String,
      default: "",
    },
  },
});
</script>
