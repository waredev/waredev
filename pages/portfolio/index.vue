<template>
  <section class="pt-32 xl:px-20 px-10 font-nunito mb-32">
    <div class="mb-8">
      <div class="font-bold text-md text-word text-3xl">Portfolio</div>
      <div class="text-md text-light mt-4">
        We have worked on several portfolios and case studies for various clients,
        <br />
        including companies, institutions, and organizations.
      </div>
    </div>
    <div class="w-4/5">
      <div class="flex flex-auto items-center flex-wrap gap-5">
        <div @click="activeCategory = category.id" v-for="(category, index) of categories" :key="index" :class="activeCategory === category.id ? 'border-primary' : 'border-gray' " class="cursor-pointer group transition-all duration-300 hover:border-primary border h-10 min-w-min rounded-lg flex items-center px-5 justify-center">
          <div :class="activeCategory === category.id ? 'text-primary' : 'text-word' " class="text-[0.875rem] font-semibold group-hover:text-primary transition-all duration-300">{{category.label}}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'PortfolioPage',
  data(){
    return {
      activeCategory: 0,
      categories: [
        {id: 0, type: 'all', label: 'All'},
        {id: 1, type: 'web-development', label: 'Website Application'},
        {id: 2, type: 'mobile-development', label: 'Mobile Application'},
        {id: 3, type: 'internet-of-things', label: 'Internet of Things (iOT)'},
        {id: 4, type: 'ui-ux-design', label: 'UI/UX Design'},
      ]
    }
  },
  // 'All', 'Web Application', 'Mobile Application', 'Internet of Things', 'UI/UX Design'
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
