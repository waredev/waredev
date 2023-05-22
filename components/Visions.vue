<template>
  <section class="lg:h-screen h-auto lg:py-0 py-10 bg-[#6d5b98] xl:px-20 px-10 font-nunito flex items-center">
    <div class="flex space-x-5">
      <img src="~/assets/images/asset-phone.png" alt="" class="lg:flex hidden object-contain w-60 mb-20">
      <div class="w-full">
        <div class="grid lg:grid-cols-3 grid-cols-none gap-4">
          <div class="">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-white flex items-center justify-center rounded-full">
                <img src="~/assets/images/asset-icon.png" class="w-10 h-10">
              </div>
              <div class="font-bold text-white text-xl">Our Expertise</div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="font-bold text-3xl text-white">With great dedication, comes great expertise</div>
            <div class="text-white text-md mt-7">Some of our expertises include: UI/UX Design, UX Research, Responsive Website Design and Development, Microsite Campaign, Content Management System (CMS) Development, eCommerce Platform Development, Custom Web Application Development, as well as Mobile Application Development.</div>
            <div class="w-full h-0.5 bg-white mt-10"></div>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 grid-cols-none gap-4 mt-10">
          <div class="">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-white flex items-center justify-center rounded-full">
                <img src="~/assets/images/asset-icon.png" class="w-10 h-10">
              </div>
              <div class="font-bold text-white text-xl">Our Process</div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="font-bold text-3xl text-white">We listen to your goals and deliver what you want</div>
            <div class="text-white text-md mt-7">We are proud of our ability to understand our client. We listen to your goals and deliver what you want. With our individualized strategy, we will formulate the right strategy just for you. Not to mention, our conscientious team will make sure to maintain the services to infinity and beyond!</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Visions",
};
</script>
