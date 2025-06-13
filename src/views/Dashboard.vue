<template>
  <div class="d-flex min-vh-100">
    <!-- Sidebar -->
    <div class="bg-dark text-white p-4" style="width: 240px;">
      <h1 class="h4 mb-4">Tintas</h1>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><button class="btn btn-outline-light w-100" @click="tab = 'list'">Lista</button></li>
        <li class="nav-item mb-2"><button class="btn btn-outline-light w-100" @click="tab = 'add'">Nova</button></li>
        <li class="nav-item"><button class="btn btn-danger w-100" @click="logout">Sair</button></li>
      </ul>
    </div>

    <!-- Conteúdo -->
    <div class="flex-grow-1 p-4 bg-light">
      <component :is="tab === 'list' ? 'PaintList' : 'PaintForm'" />
    </div>
  </div>
</template>

<script>
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import PaintList from '../components/PaintList.vue';
import PaintForm from '../components/PaintForm.vue';
export default {
  components: { PaintList, PaintForm },
  data() {
    return { tab: 'list' };
  },
  methods: {
    logout() {
      signOut(auth).then(() => this.$router.push('/login'));
    }
  }
};
</script>