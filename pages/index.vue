<template>
  <div>
    <the-hero />
    <svg  id="visual" class="bg-no-repeat object-contain relative lg:-mt-[29rem] 2xl:-mt-[40rem] -translate-y-14 lg:flex hidden" viewBox="0 0 1446 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 482L48.2 466.7C96.3 451.3 192.7 420.7 289 426C385.3 431.3 481.7 472.7 578.2 489.3C674.7 506 771.3 498 867.8 478.2C964.3 458.3 1060.7 426.7 1157 408.7C1253.3 390.7 1349.7 386.3 1397.8 384.2L1446 382L1446 701L1397.8 701C1349.7 701 1253.3 701 1157 701C1060.7 701 964.3 701 867.8 701C771.3 701 674.7 701 578.2 701C481.7 701 385.3 701 289 701C192.7 701 96.3 701 48.2 701L0 701Z" fill="#1a2e44"></path><path d="M0 603L48.2 588.5C96.3 574 192.7 545 289 527C385.3 509 481.7 502 578.2 511C674.7 520 771.3 545 867.8 546.8C964.3 548.7 1060.7 527.3 1157 511.3C1253.3 495.3 1349.7 484.7 1397.8 479.3L1446 474L1446 701L1397.8 701C1349.7 701 1253.3 701 1157 701C1060.7 701 964.3 701 867.8 701C771.3 701 674.7 701 578.2 701C481.7 701 385.3 701 289 701C192.7 701 96.3 701 48.2 701L0 701Z" fill="#626d7d"></path><path d="M0 535L48.2 531.7C96.3 528.3 192.7 521.7 289 530.5C385.3 539.3 481.7 563.7 578.2 570C674.7 576.3 771.3 564.7 867.8 568.2C964.3 571.7 1060.7 590.3 1157 595.3C1253.3 600.3 1349.7 591.7 1397.8 587.3L1446 583L1446 701L1397.8 701C1349.7 701 1253.3 701 1157 701C1060.7 701 964.3 701 867.8 701C771.3 701 674.7 701 578.2 701C481.7 701 385.3 701 289 701C192.7 701 96.3 701 48.2 701L0 701Z" fill="#aeb3bc"></path><path d="M0 595L48.2 599.5C96.3 604 192.7 613 289 627.3C385.3 641.7 481.7 661.3 578.2 655.5C674.7 649.7 771.3 618.3 867.8 605.2C964.3 592 1060.7 597 1157 604.7C1253.3 612.3 1349.7 622.7 1397.8 627.8L1446 633L1446 701L1397.8 701C1349.7 701 1253.3 701 1157 701C1060.7 701 964.3 701 867.8 701C771.3 701 674.7 701 578.2 701C481.7 701 385.3 701 289 701C192.7 701 96.3 701 48.2 701L0 701Z" fill="#ffffff"></path></svg>
    <services />
    <articles :articles="articles" />
    <div class="relative lg:max-w-6xl mx-auto py-14 -mt-5 px-5 md:px-12 lg:px-20 z-20 2xl:mb-2 lg:mb-2 mb-24">
    <div class="absolute inset-0 lg:mt-10 lg:mx-auto lg:px-20 px-5">
      <div class="bg-gradient-to-r from-custom-dark-blue to-custom-dark-gray lg:h-44 h-auto lg:rounded-2xl flex lg:flex-row flex-col items-center justify-between lg:py-8 py-10 px-10 shadow-lg">
        <div class="text-center lg:text-left">
          <h3 class="font-bold text-2xl text-white">Let's make something creative</h3>
          <p class="text-white mt-2 text-sm">
            Reach out to us and we will help you organize the right action for your business needs.
          </p>
        </div>
        <a
          rel="noopener noreferrer"
          href="https://wa.me/6287713763012?text=Halo%2C%0ASaya%20tertarik%20untuk%20membuat%20janji%20konsultasi%20dengan%20Waredev%20Digital%20Solution.%0ATerima%20kasih."
          class="bg-white text-[#1a2e44] w-64 h-14 cursor-pointer hover:bg-[#FF914D] hover:text-white duration-300 mt-6 lg:mt-0 flex items-center justify-center font-bold text-lg rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Hire Developers
        </a>
      </div>
    </div>
</div>


    <reviews />
    <form-modal v-show="showModal" @close-modal="handleCloseModal"/>
  </div>
</template>

<script>
import FormModal from '../components/FormModal.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default {
  components: { FormModal },
  name: 'IndexPage',
  head(){
    return {
      title: 'Waredev Digital Solution | Custom Software Development',
      meta: [
        { charset: 'utf-8' },
        { name: "google-site-verification", content:"z3aN4fct3A9jfvh8LPvdI_JPhIL51k10nucSV001o_w"},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'og:title', content: 'Waredev Digital Solution | Custom Software Development' },
        { hid: 'description', name: 'og:description', content: 'Unlock your business`s full potential with our expert IT consultancy. Our team expertise to help your business stay ahead of the curve.' },
        { hid: 'image', name: 'og:image', content: '/assets/images/img-hero.webp' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: 'waredev, waredev digital solution, waredev.co.id, waredev custom software development, custom software development, CV. Waredev Digital Solution' }
      ]
    }
  },
  data() {
    return {
      showModal: false,
      articles: []
    }
  },
  mounted(){
    AOS.init();
    setTimeout(() => {
      const isOpen = localStorage.getItem('isModalOpen');
      if(isOpen === null){
        this.showModal = true
        return
      }
      if(!isOpen){
        this.showModal = isOpen;
      }
    },1000)
  },
  methods: {
    handleCloseModal(){
      localStorage.setItem('isModalOpen', false);
      this.showModal = false;
    }
  },

  async fetch() {
  this.articles = await this.$content('articles').limit(3).sortBy('gitCreatedAt', 'desc').fetch();
  this.$nextTick(() => {
    AOS.refresh();
  });
}

}
</script>
