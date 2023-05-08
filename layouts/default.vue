<template>
  <div>
    <SeoKit />
    <the-header />
    <Nuxt />
    <the-footer />
  </div>
</template>

<style></style>
<script>
import TheFooter from '~/components/TheFooter'
import TheHeader from '~/components/TheHeader'
export default {
  components: { TheFooter, TheHeader },
}
</script>
