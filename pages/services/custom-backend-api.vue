<template>
  <div class="pb-32 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
    <div class="pt-32 font-nunito">
      <div class="font-extrabold text-[#1a2e44] text-4xl lg:text-left text-center">Custom Software <span class="text-[#FF914D]">Development</span></div>
      <div class="text-lg text-light mt-2 lg:text-left text-center">
        Tailored backend and APIs for your unique needs. <br> Powering your digital vision.
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-10 mt-16">
      <nuxt-img src="/Developer activity-bro.svg" class="w-full max-w-[40rem] object-contain -mt-10" />
      <div class="font-nunito mt-10">
        <div class="font-bold text-[#1a2e44] text-3xl lg:text-left text-center">What we offer?</div>
        <div class="mt-5 text-[#888888] text-justify">
          Custom Software Development is a technology solution built to meet your business needs. Built with the latest technology and personalized to your requirements, the backend and API solutions we develop can help you improve operational efficiency, enhance user experience, and accelerate application development.
        </div>
        <div class="mt-5 text-[#888888] text-justify">
          With our Custom Software Development solution, you can have full control over the features and functionality of your application, as well as access data easily and securely. Our expert team will help you develop strong, secure, and reliable backend and API solutions for your business.
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-32">
      <div class="font-nunito text-center">
        <img src="~assets/images/group-610.png" class="w-24 object-contain mx-auto">
        <div class="font-bold text-[#1a2e44] text-lg mt-5">Performance</div>
        <div class="text-[#888888] mt-5 lg:px-20">
          Get a tailored API solution that fits your business needs, with a focus on security, scalability, and top performance.
        </div>
      </div>
      <div class="font-nunito text-center">
        <img src="~assets/images/group-611.png" class="w-24 object-contain mx-auto">
        <div class="font-bold text-[#1a2e44] text-lg mt-5">Integrated</div>
        <div class="text-[#888888] mt-5 lg:px-20">
          Enhance user experience and customer satisfaction with an easy-to-use and integrated API solution for your applications.
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-16">
      <div class="font-nunito text-center">
        <img src="~assets/images/group-612.png" class="w-24 object-contain mx-auto">
        <div class="font-bold text-[#1a2e44] text-lg mt-5">Fast</div>
        <div class="text-[#888888] mt-5 lg:px-20">
          Get easy and fast access to the data you need with an API solution that seamlessly integrates with your system.
        </div>
      </div>
      <div class="font-nunito text-center">
        <img src="~assets/images/group-613.png" class="w-24 object-contain mx-auto">
        <div class="font-bold text-[#1a2e44] text-lg mt-5">Customizable</div>
        <div class="text-[#888888] mt-5 lg:px-20">
          Accelerate your application development with a fast and customizable API solution designed to maximize your business efficiency and productivity.
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
        <div class="font-nunito text-3xl text-white font-bold text-center lg:text-left">
          Work Together With Us.
        </div>
        <div class="font-nunito text-lg text-white mt-2 text-center lg:text-left">
          Optimize Your Digital Business.
        </div>
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
  name: 'CustomBackendAPIPage',
  head() {
    return {
      title: 'Waredev - Custom Software Development',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'og:title', content: 'Waredev - Custom Software Development' },
        { hid: 'description', name: 'og:description', content: 'Tailored backend and APIs for your unique needs. Powering your digital vision' },
        { hid: 'image', name: 'og:image', content: '/assets/images/custom-backend.webp' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: 'waredev, waredev custom backend api, services, waredev digital solution, waredev.co.id' }
      ]
    };
  },
  data() {
    return {
      technologies: [
        { image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
        { image: 'https://cdn.worldvectorlogo.com/logos/lumen-1.svg' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { image: 'https://static.djangoproject.com/img/logos/django-logo-positive.png' },
        { image: 'https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png' },
        { image: 'https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png' }
      ]
    };
  }
};
</script>
