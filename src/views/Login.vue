<template>
  <div class="h-full w-full flex justify-center items-center bg-green-400">
    <div class="w-96 bg-white rounded-xl overflow-hidden">
      <div class="px-6 py-4 text-white bg-green-500">登入</div>
      <div class="flex flex-col px-12 py-8">
        <input
          v-model="form.account"
          class="h-8 p-2 mb-4 border"
          type="text"
          placeholder="輸入帳號"
          :class="isError ? 'border-red-400' : ''"
          @input="resetError"
        />
        <input
          v-model="form.password"
          class="h-8 p-2 mb-4 border"
          type="password"
          placeholder="輸入密碼"
          :class="isError ? 'border-red-400' : ''"
          @input="resetError"
          @keyup.enter="login"
        />
        <div class="flex justify-end items-center">
          <Button @click="login"> Login</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// components
import Button from "@/components/basic/Button.vue";

// utils
import { isNumber, isUrl } from "@/utils/regexp";

export default Vue.extend({
  name: "Login",
  components: { Button },
  data() {
    return {
      isError: false,
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.validateForm()
        .then(() => {
          localStorage.setItem("isAuthorization", "true");
          this.$router.push({ path: "/" });
        })
        .catch(() => {
          this.isError = true;
        });
    },
    validateForm(): Promise<void> {
      return new Promise((resolve, reject) => {
        const { account, password } = this.form;

        if (isUrl(account) && isNumber(password)) {
          account === "aaa830714@gmail.com" && password === "123456"
            ? resolve()
            : reject(new Error("api error"));
        } else {
          reject(new Error("validation error"));
        }
      });
    },
    resetError() {
      this.isError = false;
    },
  },
});
</script>
