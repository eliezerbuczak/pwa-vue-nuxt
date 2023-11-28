<script setup lang="ts">

import { userAuth } from '@/stores/store'
const user = userAuth()


</script>

<template>
  <div>
    <h1>Index</h1>

    <h1>{{user.user}}</h1>
  </div>
</template>
