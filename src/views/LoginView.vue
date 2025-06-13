<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4 shadow" style="width: 20rem;">
      <h2 class="card-title mb-3">Login</h2>
      <input v-model="email" type="email" class="form-control mb-2" placeholder="Email" />
      <input v-model="password" type="password" class="form-control mb-3" placeholder="Senha" />
      <button @click="login" class="btn btn-primary w-100">Entrar</button>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
export default {
  data: () => ({ email: '', password: '' }),
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/dashboard');
      } catch (e) {
        alert('Login inválido');
      }
    }
  }
};
</script>
