<template>
  <div class="flex">
    <nav class="w-40 h-screen p-4 border">
      <div
        v-for="item in MENU_LIST"
        :key="item.link"
        @click="toggleMenu(item.link)"
      >
        <h2 class="mb-4">{{ item.title }}</h2>
        <CollapseTransition>
          <div
            v-show="current === item.link"
            class="w-full flex flex-col pl-4 transition-all"
          >
            <router-link
              v-for="element in item.children"
              :key="element.link"
              :to="element.link"
              class="mb-4"
              @click.native="$event.stopPropagation()"
            >
              {{ element.title }}
            </router-link>
          </div>
        </CollapseTransition>
      </div>
    </nav>
    <router-view class="flex-1 p-4"></router-view>
    <div class="w-12 h-screen p-2">
      <img :src="require('@/assets/images/user.svg')" alt="user" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// components
import CollapseTransition from "@/components/CollapseTransition.vue";

// constants
import { MENU_LIST } from "@/constants/layout/default";

export default Vue.extend({
  name: "Default",
  components: { CollapseTransition },
  data() {
    return {
      current: "",
      MENU_LIST,
    };
  },
  methods: {
    toggleMenu(current: string) {
      this.current = this.current === current ? "" : current;
    },
  },
});
</script>
