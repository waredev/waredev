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
  name: 'Blog Page',
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
