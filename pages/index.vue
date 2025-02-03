<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
router.replace('/landing')
</script>

// Potential Issue: Duplicate home (index) components if both views/ and pages/ define one.

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
