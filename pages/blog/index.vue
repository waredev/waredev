<template>
  <section class="pt-32 font-nunito">
    <div class="mb-24 xl:px-20 px-10">
      <div class="font-extrabold text-md text-word text-3xl">All Articles.</div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
        <div v-for="article of articles" :key="article.slug" class="font-nunito cursor-pointer group">
          <nuxt-link :to="`blog/${article.slug}`">
            <div class="w-full h-56 border border-gray rounded-xl p-5 relative">
              <img :src="article.image.src" :alt="article.image.alt" class="group-hover:scale-110 transition-all duration-100 h-full scale-100 mx-auto object-contain"/>
            </div>
            <div class="font-bold text-md text-word mt-5">{{article.title}}</div>
            <div class="uppercase font-bold text-light mt-2">{{article.date}}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BlogPage',
  head(){
    return {
      title: 'Waredev - Our Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'og:title', content: 'Waredev - Our Blog' },
        { hid: 'description', name: 'og:description', content: 'Waredev - Our Blog' },
        { hid: 'image', name: 'og:image', content: '/assets/images/img-hero.webp' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: 'waredev, waredev website development, services, waredev digital solution, waredev.co.id' }
      ]
    }
  },
  data(){
    return {
      articles: []
    }
  },
  async fetch(){
    this.articles = await this.$content('articles').fetch();
    // const data = await this.$content('articles').fetch();
    // console.log(data[0]);
  }
}
</script>
