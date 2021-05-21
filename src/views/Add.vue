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
          right-1/4
          transform
          -translate-x-1/2 -translate-y-1/2
        "
        @click="addItem"
      />
      <div class="flex items-center mb-4">
        <label class="mr-2" :for="`name-${item.id}`">商品名稱</label>
        <input
          v-model="item.name"
          class="w-1/2 h-12 p-2 border"
          type="text"
          :id="`name-${item.id}`"
          :class="$v.list.$each[index].name.$error ? 'border-red-400' : ''"
        />
      </div>
      <div class="flex items-center mb-4">
        <label class="mr-2" :for="`logo-${item.id}`">圖示連結</label>
        <input
          v-model="item.logo"
          class="w-1/2 h-12 p-2 border"
          type="text"
          :id="`logo-${item.id}`"
          :class="$v.list.$each[index].logo.$error ? 'border-red-400' : ''"
        />
      </div>
      <div class="flex items-center mb-4">
        <label class="mr-2">訂單狀態</label>
        <select
          v-model="item.status.code"
          class="w-1/2 h-12 p-1 border"
          style="outline: none"
          :class="
            $v.list.$each[index].status.code.$error ? 'border-red-400' : ''
          "
          @change="($event) => setStatusType($event, index)"
        >
          <option disabled>請選擇</option>
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
import { required, url } from "vuelidate/lib/validators";

// components
import Button from "@/components/basic/Button.vue";
import PlusButton from "@/components/pages/add/PlusButton.vue";

// constants
import { STATUS_OPTION_LIST } from "@/constants/pages";
import { DEFAULT_VALUE } from "@/constants/pages/add";

// types
import { ItemValue } from "@/types/pages/add";

// utils
import { deepCopy } from "@/utils";

export default Vue.extend({
  name: "Add",
  components: { Button, PlusButton },
  data() {
    return {
      list: [deepCopy(DEFAULT_VALUE) as ItemValue],
      STATUS_OPTION_LIST,
    };
  },
  validations: {
    list: {
      $each: {
        name: {
          required,
        },
        logo: {
          required,
          url,
        },
        status: {
          code: {
            required,
          },
        },
      },
    },
  },
  computed: {
    statusKeys() {
      return STATUS_OPTION_LIST.reduce((acc, item) => {
        if (item.code === "") return acc;
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
        ...(deepCopy(DEFAULT_VALUE) as ItemValue),
        id: this.list[this.list.length - 1].id + 1,
      });
    },
    addList() {
      this.validateForm()
        .then(() => {
          this.addOrder(this.list);
          this.list = [
            {
              ...(deepCopy(DEFAULT_VALUE) as ItemValue),
              status: {
                code: "",
                type: "",
              },
            },
          ];
          this.$v.list.$reset();
          alert("新增成功");
        })
        .catch(() => {
          console.error("error", this.$v);
        });
    },
    validateForm(): Promise<void> {
      return new Promise((resolve, reject) => {
        this.$v.list.$touch();
        this.$v.list.$invalid
          ? reject(new Error("validation error"))
          : resolve();
      });
    },
  },
});
</script>
