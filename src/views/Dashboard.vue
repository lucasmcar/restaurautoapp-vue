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

<template>
  <div class="d-flex flex-column flex-lg-row min-vh-100">
    <div class="bg-primary text-white p-4 shadow-sm" style="width: 100%; max-width: 260px;">
      <h4 class="mb-4 text-center">🎨 Tintas</h4>
      <ul class="nav flex-column gap-2">
        <li class="nav-item">
          <button class="btn btn-light w-100" @click="tab = 'list'">📄 Lista</button>
        </li>
        <li class="nav-item">
          <button class="btn btn-light w-100" @click="tab = 'add'">➕ Nova</button>
        </li>
        <li class="nav-item mt-4">
          <button class="btn btn-outline-light w-100" @click="logout">🚪 Sair</button>
        </li>
      </ul>
    </div>

    <div class="flex-grow-1 p-5 bg-light">
      <component :is="tab === 'list' ? PaintList : PaintForm" />
    </div>
  </div>
</template>