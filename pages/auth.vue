<template>
  <div class="h-screen flex items-center justify-center">
    <div class="max-w-md">
      <form @submit.prevent="login">
        <div>
          <input v-model="user.email" type="text" placeholder="email" />
        </div>
        <div>
          <input
            v-model="user.password"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <button class="w-full" @click="login">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),

  methods: {
    async login() {
      try {
        const { data } = await this.$auth.loginWith('local', {
          data: this.user
        })

        this.$auth.setUser(data.user)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
