<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div class="card p-4 shadow" style="max-width: 400px; width: 100%;">
      <h2 class="card-title text-center mb-4">Welcome Back 👋</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label fw-semibold">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="you@example.com"
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label fw-semibold">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" class="btn btn-primary w-100 fw-bold">
          Login
        </button>
      </form>

      <p class="text-center mt-3 text-muted small">
        Don't have an account?
        <a href="#" class="text-primary text-decoration-none">Register</a>
      </p>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/lib/supabase'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
    methods: {
        async handleLogin() {
            if (!this.email || !this.password) {
            alert('Please enter email and password!')
            return
            }
            const { error } = await supabase.auth.signInWithPassword({
            email: this.email,
            password: this.password
            })
            if (error) {
            alert(error.message)
            } else {
            alert('Login successful!')

            }
        }
    }

}
</script>
