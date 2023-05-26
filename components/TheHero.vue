<template>
  <div class="h-screen relative bg-light-blue">
    <nuxt-img src="/bg-pattern.webp" class="w-[45.25rem] h-[35.5rem] absolute z-0" />
    <div class="z-10 relative pt-40 flex items-center lg:px-20 px-10">
      <div class="lg:pr-20 pr-0">
        <div class="lg:text-5xl text-4xl font-nunito font-bold text-[#333333] mb-8 leading-tight lg:text-left text-center">Empowering Your Business with Innovative Software Solutions.</div>
        <div class="font-nunito font-regular text-[#888888] lg:text-left text-center">Unlock your business's full potential with our expert IT consultancy. Our team expertise to help your business stay ahead of the curve.</div>
        <div class="flex lg:flex-row flex-col lg:space-x-5 space-x-0 items-center lg:space-y-0 space-y-3 mt-14">
          <!-- <button class="bg-primary h-16 px-5 rounded-lg font-nunito font-semibold text-white text-lg border-[2px] border-primary hover:bg-transparent hover:text-primary duration-150">
            Explore Our Services
          </button> -->
          <!-- <button class="bg-primary h-16 px-5 rounded-lg font-nunito font-semibold text-white text-lg border-[2px] border-primary hover:bg-transparent hover:text-primary duration-150">Explore Our Services</button> -->
          <a href="https://wa.me/6282193758418?text=Halo%2C%0ASaya%20tertarik%20untuk%20membuat%20janji%20konsultasi%20dengan%20Waredev%20Digital%20Solution.%0ATerima%20kasih.">
            <button class="bg-[#1a2e44] h-16 px-5 rounded-lg font-nunito font-semibold text-white text-lg border-[2px] border-[#1a2e44] hover:bg-white hover:text-[#1a2e44] duration-150">
              Schedule a Consultation
            </button>
          </a>
        </div>
      </div>
      <div class="hidden lg:flex">
        <nuxt-img src="/img-hero.webp" class="w-[63rem]" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheHero'
}
</script>
