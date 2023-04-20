<template>
    <section class="py-10 lg:h-screen h-auto xl:px-0 px-10 sm:py-12 dark:bg-gray-800 dark:text-gray-100 font-nunito">
      <div class="p-4 mx-auto space-y-8">
        <div class="space-y-2 flex flex-col items-center mb-10">
          <h3 class="text-4xl font-extrabold text-[#0a1060] uppercase">Recomended Reading</h3>
          <div class="flex items-center space-x-1">
            <div class="w-10 h-2 bg-[#888888] rounded-full"></div>
            <div class="w-5 h-2 bg-[#888888] rounded-full"></div>
            <div class="w-12 h-2 bg-[#888888] rounded-full"></div>
          </div>
        </div>

        <div class="grid xl:grid-cols-6 gap-4">
          <div class="lg:col-start-2 lg:col-span-4 w-full">
            <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div v-for="article in articles" :key="article.id" class="border-[#ADADAD] border rounded max-h-[22.125rem] py-3">
                <div class="px-5">
                  <div class="font-semibold text-word">News & Article</div>
                  <div class="font-bold text-2xl text-word">{{article.title}}</div>
                </div>
                <div class="my-5 px-1">
                  <img :src="article.image" alt="" class="w-full h-36 object-cover">
                </div>
                <div class="px-5">
                  <div class="flex items-center justify-between">
                    <div><span class="font-bold text-word">Posted By:</span> {{article.author}}</div>
                    <div class="cursor-pointer text-word">Read More</div>
                  </div>
                  <div class="text-sm text-[#888888] mt-1">{{article.date}}</div>
                </div>
              </div>
            </div>
          </div>
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
      ]
    };
  }
};
</script>
