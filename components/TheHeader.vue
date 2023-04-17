<template>
  <div class="w-full h-20 xl:px-20 px-10 fixed z-50" :class="getBackground()">
    <div class="w-full h-full flex items-center justify-between">
      <img src="~assets/images/logo.png" class="w-[4.063rem] h-[2.375rem]" />
      <div class="hidden xl:flex items-center space-x-10 font-nunito">
        <div class="cursor-pointer">Home</div>
        <div class="cursor-pointer">Services</div>
        <div class="cursor-pointer">Portfolio</div>
        <div class="cursor-pointer">About Us</div>
        <div class="cursor-pointer">Blog</div>
        <button class="bg-primary px-5 py-2 rounded-md text-white font-semibold">
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
      let background = this.scrollPostion > 80 ? 'backdrop-blur-xl bg-white/30' : 'bg-transparent'
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
