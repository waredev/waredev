<template>
  <div class="pb-32 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
    <div class="pt-32 font-nunito">
      <div class="font-extrabold text-[#1a2e44] text-4xl lg:text-left text-center">Mobile Application <span class="text-[#FF914D]">Development</span></div>
      <div class="text-lg text-light mt-2 lg:text-left text-center">
        With proven process and our commitment to quality, we build <br> stable and optimized Android & iOS Apps.
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-10 mt-20">
      <nuxt-img src="/Mobile-development.svg" class="w-full max-w-[40rem] object-contain" />
      <div class="font-nunito  mt-10">
        <div class="font-bold text-[#1a2e44] text-3xl lg:text-left text-center">What we offer?</div>
        <div class="mt-5 text-[#888888] text-justify">
          In today's digital era, the use of mobile applications has become an increasingly important requirement for businesses. Mobile applications can help expand your business reach, increase customer loyalty, and provide a better user experience.
        </div>
        <div class="mt-5 text-[#888888] text-justify">
          We are here to help your business develop mobile applications that suit your business needs. Our team of experts will work with you to ensure that the mobile application we develop can provide the best solution for your business. Contact us now to get the best offer and start strengthening your business with reliable and professional mobile applications.
        </div>
      </div>
    </div>

    <div class="font-nunito mt-20">
      <div class="font-bold text-[#1a2e44] text-3xl lg:text-left text-center lg:max-w-3xl">Efficiently develop your app with our proven methodology and industry best practices.</div>
      <div class="h-1 w-10 mt-3 bg-orange rounded-full"></div>
      <div class="mt-5 text-[#888888] text-justify">
        Mobile app development is not a one-time effort, but an ongoing process of constant iteration to continuously improve your product. As mobile devices and technologies evolve, so do your users' needs and behavior. It's crucial to have the right tools and battle-tested methodologies to face these challenges head-on.
      </div>
      <div class="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-14 lg:px-20">
        <div v-for="(step, index) in steps" :key="index" class="text-center">
          <div class="flex lg:flex-row flex-col lg:items-center items-start gap-5">
            <div class="font-extrabold text-[#1a2e44] text-4xl">{{ step.number }}</div>
            <img v-if="index !== steps.length - 1" src="~assets/images/arrow.webp" class="w-14 lg:rotate-0 rotate-90 lg:mt-0 mt-5">
          </div>
          <img :src="step.image" class="w-20 object-contain my-4 mx-auto">
          <div class="font-bold text-[#1a2e44] text-lg">{{ step.title }}</div>
        </div>
      </div>
    </div>

    <div class="font-nunito mt-32">
      <div class="font-bold text-center text-[#1a2e44] text-3xl">Technology we use</div>
      <div class="text-center text-[#1a2e44] lg:max-w-3xl mx-auto mt-5">
        Choosing the right tools, tech stack, and processes helped us build a product that is scalable and able to onboard new users.
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 lg:px-32 gap-6 mt-10">
        <div v-for="(tech, index) in technologies" :key="index" class="flex items-center justify-center">
          <img :src="tech.image" class="w-16 object-contain">
        </div>
      </div>
    </div>

    <div class="bg-cooperation bg-no-repeat bg-cover w-full bg-top rounded-xl mt-24">
      <div class="w-full h-full bg-primary bg-opacity-50 py-10 lg:py-14 px-5 lg:px-32 rounded-xl flex flex-col justify-center items-center lg:items-start">
        <div class="font-nunito text-3xl text-white font-bold text-center lg:text-left">Work Together With Us.</div>
        <div class="font-nunito text-lg text-white mt-2 text-center lg:text-left">Optimize Your Digital Business.</div>
        <div class="mt-10">
          <a href="https://wa.me/6287713763012?text=Halo%2C%0ASaya%20tertarik%20untuk%20membuat%20janji%20konsultasi%20dengan%20Waredev%20Digital%20Solution.%0ATerima%20kasih.">
            <button class="bg-white h-12 px-5 rounded-lg font-nunito font-semibold text-[#1a2e44] text-lg hover:bg-[#FF914D] hover:text-white hover:border-[#FF914D] transition-transform duration-150 hover:scale-105">
              Contact Us Now
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileDevelopmentPage',
  head() {
    return {
      title: 'Waredev - Mobile Development Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'og:title', content: 'Waredev - Mobile Development Service' },
        { hid: 'description', name: 'og:description', content: 'With proven process and our commitment to quality, we build stable and optimized Android & iOS Apps' },
        { hid: 'image', name: 'og:image', content: '/assets/images/mobile-app-development-isometric.webp' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: 'waredev, waredev mobile development, services, waredev digital solution, waredev.co.id' }
      ]
    };
  },
  data() {
    return {
      steps: [
      { number: '01', title: 'Analysis', image: require('@/assets/images/fluctuation.png') },
      { number: '02', title: 'Planning', image: require('@/assets/images/task.png') },
      { number: '03', title: 'Development', image: require('@/assets/images/developing.png') },
      { number: '04', title: 'Maintenance', image: require('@/assets/images/maintenance.png') }
    ],
      technologies: [
        { image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { image: 'https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png' },
        { image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
        { image: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png' }
      ]
    };
  }
};
</script>
