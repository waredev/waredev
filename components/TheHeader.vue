<template>
  <div class="w-full h-20 xl:px-20 px-10 fixed z-50" :class="getBackground()">
    <div class="w-full h-full flex items-center justify-between">
      <nuxt-link to="/">
        <div class="flex items-end">
          <img src="~assets/images/logo.png" class="w-[4.063rem] h-[2.375rem]" />
          <div class="font-nunito font-extrabold text-[#333333g] text-2xl ml-2">Waredev</div>
        </div>
      </nuxt-link>
      <div class="hidden xl:flex items-center space-x-12 font-nunito">
        <div class="relative group cursor-pointer">
          <div class='font-nunito group-hover:text-primary'>Home</div>
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
        </div>
        <div class="relative group cursor-pointer">
          <div class='font-nunito group-hover:text-primary flex items-center'>
            <div>Services</div>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
          <div class="absolute bg-transparent transition-all scale-0 group-hover:scale-100">
            <div class="w-64 bg-white custom-shadow mt-2.5 rounded-md py-3">
              <nuxt-link v-for="service in services" :key="service.slug" :to="'/services/'+service.slug">
                <div class="font-nunito hover:bg-light-blue py-3 px-5">{{service.label}}</div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="relative group cursor-pointer">
          <div class='font-nunito group-hover:text-primary'>Portfolio</div>
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
        </div>
        <nuxt-link to="/about-us">
          <div class="relative group cursor-pointer">
            <div class='font-nunito group-hover:text-primary'>About Us</div>
            <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
          </div>
        </nuxt-link>
        <div class="relative group cursor-pointer">
          <div class='font-nunito group-hover:text-primary'>Blog</div>
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
        </div>
        <button class="bg-primary px-5 py-1.5 rounded-md text-white font-semibold border-[2px] border-primary hover:bg-transparent hover:text-primary duration-150">
          Let's Talk
        </button>
      </div>
      <button class="xl:hidden flex bg-primary bg-opacity-10 w-12 h-12 items-center justify-center rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-10 h-10 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheHeader",
  data(){
    return {
      scrollPostion: 0,
      services: [
        {
          slug: 'website-development',
          label: 'Website Development'
        },
        {
          slug: 'mobile-development',
          label: 'Mobile Development'
        },
        {
          slug: 'custom-backend-api',
          label: 'Custom Backend/API'
        },
        {
          slug: 'internet-of-things',
          label: 'Internet of Things (iOT)'
        },
        {
          slug: 'ui-ux-design',
          label: 'UI/UX Design'
        },
        {
          slug: 'support-and-maintenance',
          label: 'Support and Maintenance'
        }
      ]
    }
  },
  methods: {
    handleScroll() {
      this.scrollPostion = window.scrollY
    },
    getBackground(){
      let background = this.scrollPostion > 80 ? 'backdrop-blur-3xl bg-white/30 custom-drop-blur' : 'bg-transparent'
      return background;
    }

  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
};
</script>
<style scoped>
.custom-drop-blur{
  backdrop-filter: blur(20px);
}
</style>
