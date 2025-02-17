<template>
  <section class="lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex xl:space-x-24 space-x-0 xl:mt-0 ">
    <div class="font-nunito py-20">
      <div class="space-y-2 flex flex-col items-center mb-10">
        <div class="text-4xl font-extrabold text-[#1a2e44] lg:text-left text-center">Recommended Reading</div>
        <div class="flex items-center space-x-1">
          <div class="w-10 h-2 bg-[#0a1060] rounded-full"></div>
          <div class="w-5 h-2 bg-[rgb(10,16,96)] rounded-full"></div>
          <div class="w-12 h-2 bg-[#0a1060] rounded-full"></div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-6 mt-10">
        <div
          v-for="article in articles"
          :key="article.slug"
          class="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
          data-aos="zoom-in" data-aos-delay="100" data-aos-duration="3000"
        >
          <img class="lg:h-44 h-40 w-full object-cover" :src="article.image.src" :alt="article.image.alt" />

          <div class="p-5 flex flex-col justify-between h-full">
            <div>
              <h4 class="font-bold text-lg text-[#1a2e44]">{{ article.title }}</h4>
              <p class="text-sm text-gray-500 mt-2">{{ article.date }} • {{ article.author }}</p>
              <nuxt-link :to="`/blog/${article.slug}`">
                  <div class="mt-5 flex items-center">
                    <div class="hover:text-[#1a2e44]">Read More</div>
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['articles']
};
</script>
