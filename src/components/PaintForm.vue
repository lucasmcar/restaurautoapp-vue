<template>
  <form @submit.prevent="addPaint" class="card p-4 shadow-sm">
    <input v-model="paint.codigo" placeholder="Código" class="form-control mb-2" />
    <input v-model="paint.nome" placeholder="Nome da Cor" class="form-control mb-2" />
    <input v-model="paint.marca" placeholder="Marca" class="form-control mb-2" />
    <input v-model="paint.ano" placeholder="Ano" class="form-control mb-3" type="number" />
    <button type="submit" class="btn btn-success">Salvar</button>
  </form>
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