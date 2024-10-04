<template>
  <div>
    <h1>Detail</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const {id} = route.params;
</script>

<style>

</style>