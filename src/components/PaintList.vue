<template>
  <div>
    <input v-model="search" placeholder="Buscar por código, nome ou marca" class="form-control mb-3" />
    <ul class="list-group">
      <li v-for="paint in filteredPaints" :key="paint.id" class="list-group-item">
        <strong>{{ paint.codigo }}</strong> - {{ paint.nome }} ({{ paint.marca }}, {{ paint.ano }})
      </li>
    </ul>
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