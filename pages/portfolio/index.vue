<template>
  <section class="pt-32 pb-32 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20 font-nunito">
    <div class="mb-8">
      <div class="font-bold text-[#1a2e44] text-4xl lg:text-left text-center">Portfolio</div>
      <div class="text-lg text-light mt-2 lg:text-left text-center">
        We have worked on several portfolios and case studies for various clients,
        <br class="hidden lg:block" />
        including companies, institutions, and organizations.
      </div>
    </div>

    <div class="lg:w-4/5 w-full mx-auto">
      <div class="flex items-center flex-wrap gap-4 justify-center lg:justify-start">
        <div
          v-for="(category, index) in categories"
          :key="index"
          @click="handleSetCategory(category.id)"
          :class="activeCategory === category.id ? 'border-primary text-primary' : 'border-gray text-[#1a2e44]'"
          class="cursor-pointer group transition-all duration-300 hover:border-primary hover:text-primary border h-10 px-5 rounded-lg flex items-center justify-center text-sm font-semibold"
        >
          {{ category.label }}
        </div>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <div
          v-for="(item, index) in portfolios"
          :key="index"
          class="border border-gray rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <nuxt-img :src="item.image" class="w-full h-56 object-cover" :alt="item.name" />
          <div class="px-4 py-4">
            <div class="flex flex-wrap gap-2 mb-2">
              <div
                v-for="(category, idx) in item.category"
                :key="idx"
                class="bg-primary text-white py-1 px-3 rounded-md text-xs"
              >
                {{ category.name }}
              </div>
            </div>
            <div class="font-bold text-[#1a2e44] text-lg">{{ item.name }}</div>
            <div class="text-light text-sm mt-2">
              {{ item.description.length > 80 ? item.description.substring(0, 80) + '...' : item.description }}
            </div>
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
  data() {
    return {
      portfolios: data,
      activeCategory: 0,
      categories: [
        { id: 0, type: 'all', label: 'All' },
        { id: 1, type: 'web-app', label: 'Website Application' },
        { id: 2, type: 'mobile-app', label: 'Mobile Application' },
        { id: 3, type: 'iot', label: 'Internet of Things (IoT)' },
        { id: 4, type: 'ui-ux', label: 'UI/UX Design' },
      ],
    };
  },
  methods: {
    handleSetCategory(categoryId) {
      const category = this.categories.find(v => v.id === categoryId);
      if (category.type === 'all') {
        this.portfolios = data;
        this.activeCategory = categoryId;
        return;
      }
      this.portfolios = data.filter(item =>
        item.category.some(el => el.value === category.type)
      );
      this.activeCategory = categoryId;
    },
  },
  head() {
    return {
      title: 'Waredev - Our Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'og:title', content: 'Waredev - Our Portfolio' },
        { hid: 'description', name: 'og:description', content: 'Waredev - Our Portfolio' },
        { hid: 'image', name: 'og:image', content: '/assets/images/img-hero.webp' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: 'waredev, waredev website development, services, waredev digital solution, waredev.co.id' },
      ],
    };
  },
};
</script>
