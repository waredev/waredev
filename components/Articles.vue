<template>
  <section class="h-auto mb-20 xl:px-0 px-5 font-nunito">
    <div class="container px-5 py-20 mx-auto">
      <div class="space-y-2 flex flex-col items-center mb-10">
        <h3 class="text-4xl font-extrabold text-[#0a1060] text-center">Recommended Reading</h3>
        <div class="flex items-center space-x-1">
          <div class="w-10 h-2 bg-[#0a1060] rounded-full"></div>
          <div class="w-5 h-2 bg-[#0a1060] rounded-full"></div>
          <div class="w-12 h-2 bg-[#0a1060] rounded-full"></div>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-5 mt-10">
        <!--start here-->
        <div v-for="article in articles" :key="article.slug" class="lg:p-5 w-full">
          <div class="h-72 custom-shadow rounded-lg overflow-hidden">
            <img class="lg:h-32 h-32 w-full object-cover object-center" :src="article.image.src" :alt="article.image.alt" />
            <div class="py-3 px-4 h-full relative">
              <div class="font-bold text-md">{{article.title}}</div>
              <nuxt-link :to="`/blog/${article.slug}`">
                <div class="absolute bottom-36 flex items-center">
                  <div class="hover:text-word">Read More</div>
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
        <!--End here-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'articles'
  ]
  // data() {
  //   return {
  //     articles: [
  //       {
  //         id: 1,
  //         title: "Te nulla oportere reprimique his dolorum",
  //         image: "https://source.unsplash.com/200x200/?fashion?1",
  //         author: "waredev",
  //         date: "June 1, 2020",
  //         url: "#"
  //       },
  //       {
  //         id: 2,
  //         title: "Te nulla oportere reprimique his dolorum",
  //         image: "https://source.unsplash.com/200x200/?fashion?2",
  //         author: "waredev",
  //         date: "June 1, 2020",
  //         url: "#"
  //       },
  //       {
  //         id: 3,
  //         title: "Te nulla oportere reprimique his dolorum",
  //         image: "https://source.unsplash.com/200x200/?fashion?3",
  //         author: "waredev",
  //         date: "June 1, 2020",
  //         url: "#"
  //       },
  //     ]
  //   };
  // }
};
</script>
