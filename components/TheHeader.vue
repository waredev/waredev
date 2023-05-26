<template>
  <div>
    <div class="w-full h-20 xl:px-20 px-8 fixed z-50" :class="getBackground()">
      <div class="w-full h-full flex items-center justify-between">
        <nuxt-link to="/">
          <div class="flex items-end">
            <img src="~assets/images/logo.png" class="w-[4.063rem] h-[2.375rem]" />
            <div class="font-nunito font-extrabold text-word text-2xl ml-2">Waredev</div>
          </div>
        </nuxt-link>
        <div class="hidden xl:flex items-center space-x-12 font-nunito">
          <div class="relative group cursor-pointer">
            <div class='font-nunito group-hover:text-primary flex items-center'>
              <div>Services</div>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 ml-1 transition-all duration-100 rotate-0 group-hover:rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
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
          <nuxt-link to="/portfolio">
            <div class="relative group cursor-pointer">
              <div class='font-nunito group-hover:text-primary'>Portfolio</div>
              <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
            </div>
          </nuxt-link>
          <nuxt-link to="/about-us">
            <div class="relative group cursor-pointer">
              <div class='font-nunito group-hover:text-primary'>About Us</div>
              <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
            </div>
          </nuxt-link>
          <nuxt-link to="/blog">
            <div class="relative group cursor-pointer">
              <div class='font-nunito group-hover:text-primary'>Blog</div>
              <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
            </div>
          </nuxt-link>
          <nuxt-link to="/contact">
            <button class="bg-primary px-5 py-1.5 rounded-md text-white font-semibold border-[2px] border-primary hover:bg-transparent hover:text-primary duration-150">
              Let's Talk
            </button>
          </nuxt-link>
        </div>
        <button @click="showMenu = !showMenu" class="xl:hidden flex bg-primary bg-opacity-10 w-12 h-12 items-center justify-center rounded-md">

          <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

        </button>
      </div>
    </div>
    <div :class="showMenu ? 'w-screen h-screen bg-white px-8 fixed z-20 transition-all' : 'hidden'">
      <div class="font-nunito font-bold mt-32">
        <div class="my-4 cursor-pointer" @click="showSubMenu = !showSubMenu">
          <div class='font-nunito group-hover:text-primary flex items-center'>
            <div>Services</div>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" :class="!showSubMenu ? 'w-5 h-5 ml-1 transition-all duration-100 rotate-0' : 'w-5 h-5 ml-1 transition-all duration-100 rotate-180' "><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div v-if="showSubMenu" class="pl-5">
            <nuxt-link v-for="service in services" :key="service.slug" :to="'/services/'+service.slug">
              <div @click="closeMenu()" class="my-4">{{service.label}}</div>
            </nuxt-link>
          </div>
        </div>
        <nuxt-link to="/portfolio">
          <div @click="closeMenu()" class="my-4">Portfolio</div>
        </nuxt-link>
        <nuxt-link to="/about-us">
          <div @click="closeMenu()" class="my-4">About Us</div>
        </nuxt-link>
        <nuxt-link to="/blog">
          <div @click="closeMenu()" class="my-4">Blog</div>
        </nuxt-link>
        <nuxt-link to="/contact">
          <div @click="closeMenu()" class="text-center my-4 bg-primary px-5 py-1.5 rounded-md text-white font-semibold border-[2px] border-primary hover:bg-transparent hover:text-primary duration-150">Let's Talk</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheHeader",
  data(){
    return {
      scrollPostion: 0,
      showMenu: false,
      showSubMenu: false,
      activeMenu: 0,
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
    },
    closeMenu(){
      this.showMenu = false;
      this.showSubMenu = false;
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
