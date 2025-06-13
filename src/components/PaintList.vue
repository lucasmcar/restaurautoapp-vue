<template>
  <div class="card shadow-sm">
    <div class="card-header bg-white border-bottom">
      <h5 class="mb-0">Lista de Tintas</h5>
    </div>
    <div class="card-body">
      <input v-model="search" placeholder="Buscar por código, nome ou marca" class="form-control mb-4" />
      <ul class="list-group">
        <li v-for="paint in filteredPaints" :key="paint.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{{ paint.codigo }}</strong> - {{ paint.nome }}<br>
            <small class="text-muted">{{ paint.marca }} • {{ paint.ano }}</small>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const paints = ref([]);
const search = ref('');

const filteredPaints = computed(() => {
  const s = search.value.toLowerCase();
  return paints.value.filter(p =>
    p.codigo.toLowerCase().includes(s) ||
    p.nome.toLowerCase().includes(s) ||
    p.marca.toLowerCase().includes(s)
  );
});

onMounted(async () => {
  const snapshot = await getDocs(collection(db, 'tintas'));
  paints.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});
</script>