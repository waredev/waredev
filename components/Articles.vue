<template>
    <section class="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div class="container p-4 mx-auto space-y-8 space-x-2">
        <div class="space-y-2 text-center">
          <h3 class="text-3xl font-bold">Recomended Reading</h3>
          <p class="font-serif text-sm dark:text-gray-400">----------</p>
        </div>
        <!-- <div class="swiper-container">
          <div class="swiper-wrapper"> -->
            <div class="grid gap-y-4 md:grid-cols-2 lg:grid-cols-2">
              <div v-for="article in articles" :key="article.id">
                <article class="flex flex-col mx-auto dark:bg-gray-900 border-[#ADADAD] border rounded" style="width: 487px; height: 354px;">
                  <a rel="noopener noreferrer" href="#" class="text-xs tracking-wider uppercase hover:underline dark:text-violet-400 mx-6 mt-6">News & Article</a>
                  <h3 class="flex text-xl font-bold leading-snug px-6 py-2 text-[#333333]">{{ article.title }}</h3>
                  <a rel="noopener noreferrer" :href="article.url" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" class="px-1.5 object-cover w-full h-52 dark:bg-gray-500 rounded" :src="article.image">
                  </a>
                  <div class="flex flex-col flex-1 mx-6 pt-2 text-[#333333]">
                    <a rel="noopener noreferrer" :href="article.url" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <span>posted by: {{ article.author }}</span>
                    <div class="flex flex-wrap justify-between space-x-2 text-xs dark:text-gray-400">
                      <span>{{ article.date }}</span>
                      <a :href="article.url">read more..</a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <!-- <div class="swiper-pagination"></div>
        </div>
      </div> -->
    </section>
  </template>
  
<script>
// import Swiper from 'swiper';
// import 'swiper/css';

export default {
  // mounted() {
  //   const swiper = new Swiper('.swiper-container', {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //   });
  //   return swiper
  // },
  
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Te nulla oportere reprimique his dolorum",
          image: "https://source.unsplash.com/200x200/?fashion?1",
          author: "waredev",
          date: "June 1, 2020",
          url: "#"
        },
        {
          id: 2,
          title: "Te nulla oportere reprimique his dolorum",
          image: "https://source.unsplash.com/200x200/?fashion?2",
          author: "waredev",
          date: "June 1, 2020",
          url: "#"
        },
      ]
    };
  }
};
</script>