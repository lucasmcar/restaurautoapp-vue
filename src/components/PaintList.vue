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

<script>
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
export default {
  data: () => ({ paints: [], search: '' }),
  computed: {
    filteredPaints() {
      const s = this.search.toLowerCase();
      return this.paints.filter(p =>
        p.codigo.toLowerCase().includes(s) ||
        p.nome.toLowerCase().includes(s) ||
        p.marca.toLowerCase().includes(s)
      );
    }
  },
  async created() {
    const snapshot = await getDocs(collection(db, 'tintas'));
    this.paints = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};
</script>