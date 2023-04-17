<template>
  <div>
    <the-hero />
    <div class="bg-wave-group h-96 bg-contain bg-no-repeat -mt-20 z-10 relative" />
    <the-services />
  </div>
</template>

<script>
import TheHero from '~/components/TheHero';
export default {
  name: 'IndexPage',
  components: {TheHero}
}
</script>
