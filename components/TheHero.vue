<template>
  <div class="h-screen relative bg-light-blue">
    <nuxt-img src="/bg-pattern.webp" class="w-[45.25rem] h-[35.5rem] absolute z-0" />
    <div class="z-10 relative pt-40 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-28 flex items-center">
      <div class="lg:pr-2 pr-0 2xl:pt-32">
        <div data-aos="fade-right" data-aos-duration="2000" class="lg:text-5xl text-4xl font-nunito font-bold text-[#1a2e44] mb-8 leading-tight lg:text-left text-center">
          Transforming Ideas into
          <span class="text-[#FF914D]">Powerful Digital </span>Solutions.
        </div>

        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000" class="font-nunito font-regular text-[#888888] lg:text-left text-center">
          Unlock your business's full potential with our expert IT consultancy. Our team expertise to help your business stay ahead of the curve.
        </div>
        <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000" class="flex lg:flex-row flex-col lg:space-x-5 space-x-0 items-center lg:space-y-0 space-y-3 mt-14">
          <a href="https://wa.me/6287713763012?text=Halo%2C%0ASaya%20tertarik%20untuk%20membuat%20janji%20konsultasi%20dengan%20Waredev%20Digital%20Solution.%0ATerima%20kasih.">
            <button class="bg-[#1a2e44] h-16 px-5 rounded-lg font-nunito font-semibold text-white text-lg border-[2px] border-[#1a2e44] hover:bg-white hover:text-[#1a2e44] duration-150">
              Schedule a Consultation
            </button>
          </a>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" class="hidden lg:flex">
        <nuxt-img src="/Online world-amico.svg" class="lg:w-[62rem] 2xl:pt-34" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHero'
}
</script>
