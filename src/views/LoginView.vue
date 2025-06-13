<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card p-4 shadow w-100" style="max-width: 400px;">
      <div class="text-center mb-4">
        <h2 class="h5">Login com Google</h2>
        <p class="text-muted small">Acesse o sistema com sua conta Google</p>
      </div>
      <button @click="loginWithGoogle" class="btn btn-outline-danger w-100">
        <i class="bi bi-google"></i> Entrar com Google
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

const router = useRouter();

const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    router.push('/dashboard');
  } catch (error) {
    console.error(error);
    alert('Erro ao fazer login com o Google.');
  }
};
</script>