<template>

  <section class="pt-32 font-nunito">
    <div v-if="article" class="mb-24 xl:px-64 px-10">
      <div class="font-extrabold text-3xl font-word">{{article.title}}</div>
      <div class="font-bold text-light mt-1.5 uppercase">{{article.date}}</div>
      <div class="flex lg:flex-row flex-col items-start justify-between mt-10">
        <div>
          <div class="font-bold text-light uppercase">Penulis</div>
          <div class="flex items-center space-x-3 mt-2">
            <img :src="article.avatar" class="w-10 h-10 rounded-full">
            <div class="font-bold text-word text-md uppercase">{{article.author}}</div>
          </div>
        </div>
        <div class="lg:mt-0 mt-5">
          <div class="font-bold text-light uppercase lg:text-right text-left">Bagikan Artikel Ini</div>
          <div class="flex items-center space-x-5 mt-2">
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6de7b37993cd5b90df_u_facebook.svg" class="w-7 h-7">
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6ec38dd13e4ec0b978_u_linkedin.svg" class="w-7 h-7">
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6db520dfca935bc578_u_twitter.svg" class="w-7 h-7">
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6d93d67da1c0f5ac17_u_whatsapp-alt.svg" class="w-7 h-7">
            <div class="h-4 w-0.5 bg-[#cacdd5] rounded-full"></div>
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6dcfaef2b5a6fed096_u_link-h.svg" class="w-7 h-7">
          </div>
        </div>
      </div>
      <img :src="article.image.src" :alt="article.image.alt" class="w-2/3 mx-auto object-contain">
      <div class="mt-10">
        <nuxt-content :document="article" class="font-nunito text-word nuxt-contentx" />
      </div>
      <div class="flex lg:flex-row flex-col items-start justify-between mt-24">
        <div>
          <div class="font-bold text-light uppercase">Penulis</div>
          <div class="flex items-center space-x-3 mt-2">
            <img :src="article.avatar" class="w-10 h-10 rounded-full">
            <div class="font-bold text-word text-md uppercase">{{article.author}}</div>
          </div>
        </div>
        <div class="lg:mt-0 mt-5">
          <div class="font-bold text-light uppercase lg:text-right text-left">Bagikan Artikel Ini</div>
          <div class="flex items-center space-x-5 mt-2">
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6de7b37993cd5b90df_u_facebook.svg" class="w-7 h-7">
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6ec38dd13e4ec0b978_u_linkedin.svg" class="w-7 h-7">
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6db520dfca935bc578_u_twitter.svg" class="w-7 h-7">
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6d93d67da1c0f5ac17_u_whatsapp-alt.svg" class="w-7 h-7">
            <div class="h-4 w-0.5 bg-[#cacdd5] rounded-full"></div>
            <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6dcfaef2b5a6fed096_u_link-h.svg" class="w-7 h-7">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch();
      return { article }
    }
  }
</script>
<style scoped>
/* .nuxt-contentx h1 {
  font-weight: bold;
  font-size: 2.188rem;
}
.nuxt-contentx h2 {
  font-weight: bold;
  font-size: 1.75rem;
}
.nuxt-contentx h3 {
  font-weight: bold;
  font-size: 1.5rem;
} */
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.icon.icon-link {
  background-image: url('~assets/images/u_link.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-right: 5px;
}
</style>
