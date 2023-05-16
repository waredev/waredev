<template>
  <section class="pt-32 font-nunito">
    <div class="mb-24 xl:px-20 px-10">
      <div class="font-bold text-md text-word text-3xl">Portfolio</div>
      <div class="text-md text-light mt-4">
        Every product we build has a different story. We join our clients'
        <br />
        teams as a tech partner to overcome challenges and help them grow.
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'PortfolioPage',
  head(){
    return {
      title: 'Waredev - Our Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'og:title', content: 'Waredev - Our Portfolio' },
        { hid: 'description', name: 'og:description', content: 'Waredev - Our Portfolio' },
        { hid: 'image', name: 'og:image', content: '/assets/images/img-hero.webp' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: 'waredev, waredev website development, services, waredev digital solution, waredev.co.id' }
      ]
    }
  },
}
</script>
