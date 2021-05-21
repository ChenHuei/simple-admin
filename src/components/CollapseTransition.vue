<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

// utils
import { addClass, removeClass } from "@/utils/dom";

export default Vue.extend({
  methods: {
    beforeEnter(el: HTMLElement): void {
      addClass(el, "collapse-transition");

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    },
    enter(el: HTMLElement): void {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.paddingTop = el.dataset.oldPaddingTop ?? "0";
        el.style.paddingBottom = el.dataset.oldPaddingBottom ?? "0";
      } else {
        el.style.height = "";
        el.style.paddingTop = el.dataset.oldPaddingTop ?? "0";
        el.style.paddingBottom = el.dataset.oldPaddingBottom ?? "0";
      }

      el.style.overflow = "hidden";
    },
    afterEnter(el: HTMLElement): void {
      // for safari: remove class then reset height is necessary
      removeClass(el, "collapse-transition");
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow ?? "inherit";
    },

    beforeLeave(el: HTMLElement): void {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },
    leave(el: HTMLElement): void {
      if (el.scrollHeight !== 0) {
        // for safari: add class after set height, or it will jump to zero height suddenly, weired
        addClass(el, "collapse-transition");
        el.style.height = "0";
        el.style.paddingTop = "0";
        el.style.paddingBottom = "0";
      }
    },
    afterLeave(el: HTMLElement): void {
      removeClass(el, "collapse-transition");
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow ?? "inherit";
      el.style.paddingTop = el.dataset.oldPaddingTop ?? "0";
      el.style.paddingBottom = el.dataset.oldPaddingBottom ?? "0";
    },
  },
});
</script>
