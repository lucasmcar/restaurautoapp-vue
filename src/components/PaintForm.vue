<template>
  <div class="card shadow-sm">
    <div class="card-header bg-white border-bottom">
      <h5 class="mb-0">Adicionar nova tinta</h5>
    </div>
    <form @submit.prevent="addPaint" class="card-body">
      <div class="mb-3">
        <label class="form-label">Código</label>
        <input v-model="paint.codigo" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Nome da Cor</label>
        <input v-model="paint.nome" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Marca</label>
        <input v-model="paint.marca" class="form-control" />
      </div>
      <div class="mb-4">
        <label class="form-label">Ano</label>
        <input v-model="paint.ano" type="number" class="form-control" />
      </div>
      <button type="submit" class="btn btn-success w-100">Salvar</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const paint = reactive({ codigo: '', nome: '', marca: '', ano: '' });

const addPaint = async () => {
  await addDoc(collection(db, 'tintas'), paint);
  paint.codigo = paint.nome = paint.marca = '';
  paint.ano = '';
  alert('Tinta salva com sucesso!');
};
</script>