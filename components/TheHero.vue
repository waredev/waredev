<template>
  <div class="h-screen relative bg-light-blue">
    <img src="~/assets/images/bg-pattern.png" class="w-[45.25rem] h-[40rem] absolute z-0">
    <div class="z-10 pt-40 flex items-center xl:px-20 px-10">
      <div class="xl:pr-20 pr-0">
        <div class="text-5xl font-nunito font-bold text-[#333333] mb-8 leading-tight">Transform your Business with our Software Solutions</div>
        <div class="font-nunito font-regular text-[#888888]">Unlock your business's full potential with our expert IT consultancy. Our team expertise to help your business stay ahead of the curve.</div>
        <div class="flex xl:flex-row flex-col xl:space-x-5 space-x-0 items-center xl:space-y-0 space-y-3 mt-14">
          <button class="bg-primary h-16 px-5 rounded-lg font-nunito font-semibold text-white">Explore Our Services</button>
          <button class="bg-transparent border-[1.5px] border-primary text-primary h-16 px-5 rounded-md font-nunito font-bold">Schedule a Consultation</button>
        </div>
      </div>
      <div class="hidden xl:flex">
        <img src="~/assets/images/img-hero.png" class=" w-[63rem]">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheHero'
}
</script>
