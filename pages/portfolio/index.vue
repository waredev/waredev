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
    <div class="lg:w-4/5 w-full">
      <div class="flex flex-auto items-center flex-wrap gap-5">
        <div @click="handleSetCategory(category.id)" v-for="(category, index) of categories" :key="index" :class="activeCategory === category.id ? 'border-primary' : 'border-gray' " class="cursor-pointer group transition-all duration-300 hover:border-primary border h-10 min-w-min rounded-lg flex items-center px-5 justify-center">
          <div :class="activeCategory === category.id ? 'text-primary' : 'text-word' " class="text-[0.875rem] font-semibold group-hover:text-primary transition-all duration-300">{{category.label}}</div>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
        <div v-for="(item, index) in portfolios" :key="index" class="border border-gray rounded-lg">
          <nuxt-img :src="item.image" class="w-full h-56 object-contain" :alt="item.name" />
          <div class="px-4 py-4">
            <div class="flex mb-1.5 space-x-2">
              <div v-for="(category, idx) in item.category" :key="idx" class="bg-primary py-1 px-3 rounded-md text-xs text-white">{{category.name}}</div>
            </div>
            <div class="font-bold text-word">{{item.name}}</div>
            <div class="text-light text-sm mt-2">{{item.description.length > 50 ? item.description.substring(0, 50) + '...' : item.description}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import data from './data';
export default {
  name: 'PortfolioPage',
  data(){
    return {
      portfolios: data,
      activeCategory: 0,
      categories: [
        {id: 0, type: 'all', label: 'All'},
        {id: 1, type: 'web-app', label: 'Website Application'},
        {id: 2, type: 'mobile-app', label: 'Mobile Application'},
        {id: 3, type: 'iot', label: 'Internet of Things (iOT)'},
        {id: 4, type: 'ui-ux', label: 'UI/UX Design'},
      ]
    }
  },
  methods: {
    handleSetCategory(categoryId){
      const category = this.categories.find(v => v.id === categoryId);
      if(category.type === 'all'){
        this.portfolios = data;
        this.activeCategory = categoryId;
        return;
      }
      let newData = [];
      data.forEach((item) => {
        item.category.forEach(el => {
          if(el.value === category.type){
            newData.push(item);
          }
        });
      })
      this.portfolios = newData;
      this.activeCategory = categoryId;
    }
  },
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
