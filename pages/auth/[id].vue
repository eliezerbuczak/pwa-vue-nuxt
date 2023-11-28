<script setup lang="ts">

const route = useRoute()
</script>

<template>
  <div>
    <h1>Com id</h1>

    <h1>{{route.params.id}}</h1>
  </div>
</template>

<style scoped>

</style>