<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const count = ref(0)
</script>

<template>
  <div class="container grid grid-cols-2">
    <div>
      <h2 class="h-60 text-center uppercase">Featured Hero</h2>
      <Button class="float-right">Matchups</Button>
    </div>
    <div>
      <h2 class="h-60 text-center uppercase">Featured Items</h2>
      <Button class="float-right">All Items</Button>
    </div>
  </div>
  <div class="card">
    <Button @click="count++">Click me</Button>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <Button><RouterLink to="/matchups">Matchups page</RouterLink></Button>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
<script lang="ts">
export default {};
</script>