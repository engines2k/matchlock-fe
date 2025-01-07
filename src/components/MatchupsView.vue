<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>
    <div class="container">
        <h1 class="font-bold h-60 text-center text-2xl">Matchups</h1>
    </div>
    <div class="container grid grid-cols-2">
        
        <div class="card"></div>
        <RouterLink to="/"><Button>Back to home</Button></RouterLink>
    </div>
</template>