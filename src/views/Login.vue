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
          @input="resetError"
        />
        <input
          v-model="form.password"
          class="h-8 p-2 mb-4 border"
          type="password"
          placeholder="輸入密碼"
          @input="resetError"
          @keyup.enter="login"
        />
        <div class="flex justify-end items-center">
          <button
            class="
              px-4
              py-2
              border
              rounded-xl
              transition
              hover:bg-green-200
              hover:border-green-200
            "
            style="outline: none"
            @click="login"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      isError: false,
      form: {
        account: "aaa83017@gmail.com",
        password: "123456",
      },
    };
  },
  methods: {
    ...mapActions({
      setIsAuthorization: "setIsAuthorization",
    }),
    login() {
      this.validateForm()
        .then(() => {
          this.setIsAuthorization(true);
          this.$router.push({ path: "/" });
        })
        .catch(() => {
          this.isError = true;
        });
    },
    validateForm(): Promise<void> {
      return new Promise((resolve, reject) => {
        const { account, password } = this.form;

        account === "aaa83017@gmail.com" && password === "123456"
          ? resolve()
          : reject(new Error("error"));
      });
    },
    resetError() {
      this.isError = false;
    },
  },
});
</script>
