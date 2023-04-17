<template>
  <div>
    <the-header />
    <Nuxt />
  </div>
</template>

<style></style>
<script>
import TheFooter from '~/components/TheFooter'
import TheHeader from '~/components/TheHeader'
import TheServices from '../components/TheServices.vue';
export default {
  components: { TheFooter, TheHeader, TheServices },
}
</script>
