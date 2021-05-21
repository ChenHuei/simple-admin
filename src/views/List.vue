<template>
  <section class="w-full">
    <div class="mb-2">
      <label>訂單狀態：</label>
      <select v-model="status" class="w-40 h-18 border" style="outline: none">
        <option value="all">全部</option>
        <option v-for="item in statusList" :key="item.key" :value="item.key">
          {{ item.status }}
        </option>
      </select>
    </div>
    <div v-for="item in filterData" :key="item.key">
      <div class="p-4 bg-gray-200">{{ item.status }}</div>
      <div
        v-for="element in item.list"
        :key="element.name"
        class="flex p-4 border"
      >
        <img class="w-20 h-20 mr-4" :src="element.logo" :alt="element.name" />
        <div class="flex flex-col flex-1">
          <div class="w-full flex justify-between items-center mb-2">
            <p :class="item.key === 'inProgress' ? 'text-green-500' : ''">
              {{ element.status.type }}
            </p>
            <p v-if="item.key === 'inProgress'">預計出貨：{{ element.date }}</p>
          </div>
          <p>{{ element.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

// types
import { ListItem } from "@/types/pages";
import { ListStatus, Status } from "@/types/pages/list";

export default Vue.extend({
  name: "List",
  data() {
    return {
      status: "all",
      statusList: [
        {
          status: "進行中",
          key: "inProgress",
          value: [1, 2],
        },
        {
          status: "已完成",
          key: "completed",
          value: [3, 4],
        },
      ] as Status[],
      data: [] as ListStatus[],
    };
  },
  computed: {
    ...mapGetters({
      orders: "orders",
    }),
    filterData(): ListStatus[] {
      return this.status === "all"
        ? this.data
        : this.data.filter((item) => item.key === this.status);
    },
  },
  mounted() {
    this.data = this.statusList.map((status) => {
      return {
        ...status,
        list: (this.orders as ListItem[])
          .filter((item) => status.value.includes(item.status.code))
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          ),
      };
    });
  },
});
</script>
