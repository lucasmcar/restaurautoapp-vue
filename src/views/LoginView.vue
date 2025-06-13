<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100 bg-gradient" style="background: linear-gradient(to right, #6a11cb, #2575fc);">
    <div class="card p-4 shadow-lg w-100 text-center" style="max-width: 400px;">
      <div class="mb-4">
        <h2 class="h4">Bem-vindo ao Sistema</h2>
        <p class="text-muted small">Gerencie suas tintas automotivas facilmente</p>
      </div>
      <button @click="loginWithGoogle" class="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2">
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Entrar com Google
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