<template>
  <div class="d-flex flex-column flex-lg-row min-vh-100">
    <div class="bg-dark text-white p-3" style="width: 100%; max-width: 240px;">
      <h4 class="mb-4">Tintas</h4>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <button class="btn btn-outline-light w-100" @click="tab.value = 'list'">Lista</button>
        </li>
        <li class="nav-item mb-2">
          <button class="btn btn-outline-light w-100" @click="tab.value = 'add'">Nova</button>
        </li>
        <li class="nav-item">
          <button class="btn btn-danger w-100" @click="logout">Sair</button>
        </li>
      </ul>
    </div>

    <div class="flex-grow-1 p-4 bg-light">
      <component :is="tab.value === 'list' ? 'PaintList' : 'PaintForm'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import PaintList from '../components/PaintList.vue';
import PaintForm from '../components/PaintForm.vue';

const tab = ref('list');
const router = useRouter();

const logout = () => {
  signOut(auth).then(() => router.push('/login'));
};
</script>