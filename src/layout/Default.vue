<template>
  <main class="flex default">
    <nav class="w-40 h-screen p-4 border">
      <div
        v-for="item in menuList"
        :key="item.link"
        @click="setToggle(item.link)"
      >
        <h2 class="mb-4">{{ item.title }}</h2>
        <CollapseTransition>
          <div
            v-show="item.isToggle"
            class="w-full flex flex-col pl-4 transition-all"
          >
            <Link
              v-for="element in item.children"
              :key="element.link"
              :currentPath="currentPath"
              v-bind="element"
              @click.native="$event.stopPropagation()"
            />
          </div>
        </CollapseTransition>
      </div>
    </nav>
    <router-view class="flex-1 p-4"></router-view>
    <div class="w-12 h-screen p-2">
      <img :src="require('@/assets/images/user.svg')" alt="user" />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

// components
import CollapseTransition from "@/components/basic/CollapseTransition.vue";
import Link from "@/components/layout/Link.vue";

// constants
import { MENU_LIST } from "@/constants/layout/default";

export default Vue.extend({
  name: "Default",
  components: { CollapseTransition, Link },
  data() {
    return {
      menuList: MENU_LIST,
    };
  },
  computed: {
    currentPath: {
      get() {
        return this.$route.path;
      },
      set(val) {
        console.log(val);
      },
    },
  },
  methods: {
    setToggle(link: string): void {
      this.menuList = this.menuList.map((item) => {
        return {
          ...item,
          isToggle: item.isToggle ? false : item.link === link,
        };
      });
    },
  },
});
</script>
