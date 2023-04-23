<template>
  <section class="lg:h-screen h-auto xl:px-0 px-10 sm:py-12 dark:bg-gray-800 dark:text-gray-100 font-nunito">
    <div class="container px-5 py-5 mx-auto">
      <div class="space-y-2 flex flex-col items-center mb-10">
        <h3 class="text-4xl font-extrabold text-[#0a1060] uppercase text-center">Recommended Reading</h3>
        <div class="flex items-center space-x-1">
          <div class="w-10 h-2 bg-[#0a1060] rounded-full"></div>
          <div class="w-5 h-2 bg-[#0a1060] rounded-full"></div>
          <div class="w-12 h-2 bg-[#0a1060] rounded-full"></div>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-5 mt-10">
        <!--start here-->
        <div v-for="article in articles" :key="article.id" class="lg:p-5 w-full">
          <div class="h-full custom-shadow rounded-lg overflow-hidden">
            <!-- <div class="w-full">
              <div class="w-full flex p-2">
                <div class="p-2 ">
                  <img
                  :src="article.image"
                    alt="author" class="w-10 h-10 rounded-full overflow-hidden" />
                </div>
                <div class="pl-2 pt-2 ">
                  <p class="font-bold">{{article.author}}</p>
                  <p class="text-xs">{{article.date}}</p>
                </div>
              </div>
            </div> -->
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="article.image" alt="blog cover" />

            <div class="p-4">
              <h2 class="text-xs title-font font-bold text-green-400 mb-1 uppercase ">Web development</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">This is a blog template</h1>
              <div class="flex items-center flex-wrap ">
                <a href="/" class="text-green-800  md:mb-2 lg:mb-0">
                  <p class="inline-flex items-center">Read More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--End here-->
      </div>
    </div>
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
        {
          id: 3,
          title: "Te nulla oportere reprimique his dolorum",
          image: "https://source.unsplash.com/200x200/?fashion?3",
          author: "waredev",
          date: "June 1, 2020",
          url: "#"
        },
      ]
    };
  }
};
</script>
