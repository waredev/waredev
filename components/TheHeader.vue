<template>
  <div class="w-full h-20 xl:px-20 px-10 fixed z-50 custom-drop-blur" :class="getBackground()">
    <div class="w-full h-full flex items-center justify-between">
      <div class="flex items-end">
        <img src="~assets/images/logo.png" class="w-[4.063rem] h-[2.375rem]" />
        <div class="font-nunito font-extrabold text-[#333333g] text-2xl ml-2">Waredev</div>
      </div>
      <div class="hidden xl:flex items-center space-x-12 font-nunito">
        <div class="relative group cursor-pointer">
          <div class='font-nunito group-hover:text-primary'>Home</div>
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
        </div>
        <div class="relative group cursor-pointer">
          <div class='font-nunito group-hover:text-primary'>Services</div>
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
        </div>
        <div class="relative group cursor-pointer">
          <div class='font-nunito group-hover:text-primary'>Portfolio</div>
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
        </div>
        <div class="relative group cursor-pointer">
          <div class='font-nunito group-hover:text-primary'>About Us</div>
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full"></span>
        </div>
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
      scrollPostion: 0
    }
  },
  methods: {
    handleScroll() {
      this.scrollPostion = window.scrollY
      console.log(window.scrollY);
    },
    getBackground(){
      let background = this.scrollPostion > 80 ? 'backdrop-blur-3xl bg-white/30' : 'bg-transparent'
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
