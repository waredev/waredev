<template>
  <div>
    <the-hero />
    <div class="bg-wave-group h-96 bg-contain bg-no-repeat -mt-20 z-10 relative lg:flex hidden" />
    <services />
    <visions />
    <articles :articles="articles" />
    <div class="lg:absolute z-20 lg:-mt-[4rem] lg:mb-0 mb-10 lg:px-20 px-10 font-nunito">
      <div class="bg-[#6d5b98] lg:h-44 h-auto lg:rounded-[2.5rem] rounded-xl flex lg:flex-row flex-col lg:py-0 py-10 lg:text-left text-center items-center px-14">
        <div>
          <div class="font-bold text-3xl text-white">Let's make something creative</div>
          <div class="text-white mt-1 text-xl lg:pr-24">Reach out to us and we will help you organize the right action for your business needs.</div>
        </div>
        <div class="bg-white text-word w-72 h-16 cursor-pointer hover:bg-primary hover:text-white duration-150 lg:mt-0 mt-10 flex items-center justify-center font-bold text-2xl rounded-full">Hire Developers</div>
      </div>
    </div>
    <reviews />
    <form-modal v-show="showModal" @close-modal="handleCloseModal"/>
  </div>
</template>

<script>
import FormModal from '../components/FormModal.vue'
export default {
  components: { FormModal },
  name: 'IndexPage',
  head(){
    return {
      title: 'Waredev Digital Solution | Custom Software Development',
      meta: [
        { charset: 'utf-8' },
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
  async fetch(){
    this.articles = await this.$content('articles').limit(3).sortBy('gitCreatedAt', 'desc').fetch();
  }
}
</script>
