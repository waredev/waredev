<template>
  <section class="pt-32 pb-10 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20 font-nunito">
    <div class="mb-10">
      <div class="font-extrabold text-[#1a2e44] text-4xl lg:text-left text-center">Blogs</div>
      <div class="text-lg text-light mt-2 lg:text-left text-center">
        Stay updated with our latest insights, tips, and trends in the digital world.
      </div>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <div v-for="article in articles" :key="article.slug" class="font-nunito cursor-pointer group">
        <nuxt-link :to="`/blog/${article.slug}`">
          <div class="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img :src="article.image.src" :alt="article.image.alt"
              class="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"/>
          </div>
          <div class="font-bold text-lg text-[#1a2e44] mt-5 group-hover:text-primary transition-all duration-300">
            {{ article.title }}
          </div>
          <div class="uppercase text-sm font-bold text-light mt-2">
            {{$dayjs(article.gitCreatedAt).format('DD, MMM YYYY')}}
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPage',
  head() {
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
    };
  },
  data() {
    return {
      articles: []
    };
  },
  async fetch() {
    const data = await this.$content('articles').fetch();
    this.articles = data.sort((a, b) => new Date(b.gitCreatedAt) - new Date(a.gitCreatedAt));
  }
};
</script>
