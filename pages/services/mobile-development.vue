<template>
  <div class="pb-32 xl:px-20 px-10">
    <div class="pt-32 font-nunito">
      <div class="font-extrabold text-md text-word text-5xl">Mobile Development</div>
      <div class="text-md text-light mt-2">With proven process and our commitment to quality, we build <br> stable and optimized Android & iOS App</div>
    </div>
    <div class="grid lg:grid-cols-2 gap-5 mt-20">
      <nuxt-img src="/mobile-app-development-isometric.webp" class="w-[44rem] object-contain" placeholder />
      <div class="font-nunito lg:pr-20 mt-14">
        <div class="font-bold text-word text-4xl lg:text-left text-center">What we offer?</div>
        <div class="mt-5 text-[#888888] lg:text-left text-center">In today's digital era, the use of mobile applications has become an increasingly important requirement for businesses. Mobile applications can help expand your business reach, increase customer loyalty, and provide a better user experience.</div>
        <div class="mt-5 text-[#888888] lg:text-left text-center">We are here to help your business develop mobile applications that suit your business needs. Our team of experts will work with you to ensure that the mobile application we develop can provide the best solution for your business. Contact us now to get the best offer and start strengthening your business with reliable and professional mobile applications.</div>
      </div>
    </div>
    <div class="font-nunito mt-32">
      <div class="font-bold text-word text-3xl lg:text-left text-center lg:pr-[35rem]">Efficiently develop your app with our proven methodology and industry best practices</div>
      <div class="h-1 w-10 mt-3 bg-orange rounded-full"></div>
      <div class="mt-5 text-[#888888] lg:text-left text-center lg:pr-[35rem]">Mobile app development is not a one-time effort, but an ongoing process of constant iteration to continuously improve your product. As mobile devices and technologies evolve, so do your users' needs and behavior. It's crucial to have the right tools and battle-tested methodologies to face these challenges head-on. At our company, we believe in never stopping the process, constantly pushing for excellence, and delivering a mobile app that exceeds your expectations. Let's work together to create a powerful and engaging mobile experience for your users.</div>
      <div class="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-14 lg:mx-32 mx-24">
        <div class="relative">
          <div class="flex lg:flex-row flex-col lg:items-center items-start gap-5">
            <div class="font-extrabold text-word text-4xl">01</div>
            <img src="~assets/images/arrow.webp" class="w-14 lg:rotate-0 rotate-90 lg:mt-0 mt-5">
          </div>
          <img src="~assets/images/fluctuation.png" class="w-20 object-contain my-4 mx-auto">
          <div class="font-bold text-word text-lg text-center">Analysis</div>
        </div>
        <div class="relative">
          <div class="flex lg:flex-row flex-col lg:items-center items-start gap-5">
            <div class="font-extrabold text-word text-4xl">02</div>
            <img src="~assets/images/arrow.webp" class="w-14 lg:rotate-0 rotate-90 lg:mt-0 mt-5">
          </div>
          <img src="~assets/images/task.png" class="w-20 object-contain my-4 mx-auto">
          <div class="font-bold text-word text-lg text-center">Planning</div>
        </div>
        <div class="relative">
          <div class="flex lg:flex-row flex-col lg:items-center items-start gap-5">
            <div class="font-extrabold text-word text-4xl">03</div>
            <img src="~assets/images/arrow.webp" class="w-14 lg:rotate-0 rotate-90 lg:mt-0 mt-5">
          </div>
          <img src="~assets/images/developing.png" class="w-20 object-contain my-4 mx-auto">
          <div class="font-bold text-word text-lg text-center">Development</div>
        </div>
        <div class="relative">
          <div class="flex lg:flex-row flex-col lg:items-center items-start gap-5">
            <div class="font-extrabold text-word text-4xl">04</div>
          </div>
          <img src="~assets/images/maintenance.png" class="w-20 object-contain my-4 mx-auto">
          <div class="font-bold text-word text-lg text-center">Maintenance</div>
        </div>
      </div>
    </div>
    <div class="font-nunito mt-32">
      <div class="font-bold text-center text-word text-3xl">Technology we use</div>
      <div class="text-center text-word lg:mx-[23rem] mt-5">Choosing the right tools, tech stack and processes helped us build a product that is scalable and able to onboard new users</div>
      <div class="grid grid-cols-4 lg:px-72 gap-5 mt-10">
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" class="w-20 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png" class="w-20 object-contain">
        </div>
      </div>
    </div>
    <div class="bg-cooperation bg-no-repeat bg-cover w-full bg-top rounded-xl mt-24">
      <div class="w-full h-full bg-primary bg-opacity-50 py-14 rounded-xl flex flex-col justify-center px-24">
        <div class="font-nunito text-4xl text-white font-bold">Work Together With Us.</div>
        <div class="font-nunito text-xl text-white mt-1">Optimize Your Digital Business.</div>
        <button class="bg-white font-nunito text-word mt-3 font-bold px-5 py-2 w-44 rounded-md">Contact Us Now</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Mobile Development'
}
</script>
