<template>
  <div class="Login">
    <div class="flex items-center justify-center min-h-screen bg-gray-600">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form @submit.prevent="onCreatePost">
          <div class="mt-4">
            <div>
              <label class="block" for="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                v-model="auth.email"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                v-model="auth.password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div class="flex items-baseline justify-between">
              <button
                type="submit"
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
              <a href="#" class="text-sm text-blue-600 hover:underline"
                >Forgot password?</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login-page",
  data() {
    return {
      email: "",
      password: "",
      auth: {
        email: "sascha@example.com",
        password: "test12345",
      },
    };
  },
  methods: {
    async onCreatePost() {
      const response = await axios.post("auth/login", this.auth);
      /*    */
      localStorage.setItem("token", response.data.authToken);
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped></style>
