<template>
  <div class="default">
    <h1>default</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Default",
});
</script>
