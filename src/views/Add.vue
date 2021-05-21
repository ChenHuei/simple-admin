<template>
  <section>
    <div
      v-for="(item, index) in list"
      :key="item.id"
      class="relative p-4 pb-0 mb-2 border"
    >
      <PlusButton
        v-if="index === list.length - 1"
        class="
          absolute
          top-1/2
          right-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
        "
        @click="addItem"
      />
      <div class="flex items-center mb-4">
        <label class="mr-2" :for="`name-${item.id}`">商品名稱</label>
        <input
          v-model="item.name"
          class="w-40 h-12 p-2 border"
          type="text"
          :id="`name-${item.id}`"
        />
      </div>
      <div class="flex items-center mb-4">
        <label class="mr-2" :for="`logo-${item.id}`">圖示連結</label>
        <input
          v-model="item.logo"
          class="w-40 h-12 p-2 border"
          type="text"
          :id="`logo-${item.id}`"
        />
      </div>
      <div class="flex items-center mb-4">
        <label class="mr-2">訂單狀態</label>
        <select
          v-model="item.status.code"
          class="w-40 h-12 p-1 border"
          style="outline: none"
          @change="($event) => setStatusType($event, index)"
        >
          <option
            v-for="option in STATUS_OPTION_LIST"
            :key="option.code"
            :value="option.code"
          >
            {{ option.type }}
          </option>
        </select>
      </div>
    </div>
    <div class="w-full flex justify-end items-center">
      <Button @click="addList">Add</Button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

// components
import Button from "@/components/basic/Button.vue";
import PlusButton from "@/components/pages/add/PlusButton.vue";

// constants
import { STATUS_OPTION_LIST } from "@/constants/pages";

// types
import { ListItem } from "@/types/pages";

export default Vue.extend({
  name: "Add",
  components: { Button, PlusButton },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "",
          logo: "",
          status: {
            code: 0,
            type: "",
          },
          date: "108/3/02",
        },
      ] as (ListItem & { id: number })[],
      STATUS_OPTION_LIST,
    };
  },
  computed: {
    statusKeys() {
      return STATUS_OPTION_LIST.reduce((acc, item) => {
        acc[item.code] = item.type;
        return acc;
      }, {} as { [key: number]: string });
    },
  },
  methods: {
    ...mapActions({
      addOrder: "addOrder",
    }),
    setStatusType(event: Event, index: number): void {
      const key = (event.target as unknown as HTMLInputElement).value;

      this.$set(
        this.list[index].status,
        "type",
        this.statusKeys[parseInt(key)]
      );
    },
    addItem() {
      this.list.push({
        id: this.list[this.list.length - 1].id + 1,
        name: "",
        logo: "",
        status: {
          code: 0,
          type: "",
        },
        date: "108/3/02",
      });
    },
    addList() {
      this.addOrder(this.list);
    },
  },
});
</script>
