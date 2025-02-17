<template>
  <section class="lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex xl:space-x-24 space-x-0 xl:mt-0 mt-14 py-16">
    <div data-aos="fade-up" data-aos-duration="2000" class="xl:flex hidden">
      <img src="~/assets/images/Devices-cuate.svg" alt="Services" class="w-[50rem]">
    </div>

    <div class="font-nunito w-full">
      <h2 class="text-4xl font-extrabold text-[#1a2e44] lg:text-left text-center">What Our Services</h2>
      <p class="text-md text-[#888888] mb-14 lg:text-left text-center">
        We offer customized IT solutions to help streamline your business operations and drive growth.
      </p>

      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <nuxt-link
          v-for="(service, index) in services"
          :key="index"
          :to="`/services/${service.slug}`"
          data-aos="zoom-in"
          :data-aos-delay="index * 200"
          data-aos-duration="2000"
          class="bg-white shadow-md hover:shadow-lg hover:scale-[1.03] w-full h-48 rounded-xl flex flex-col items-center justify-between py-8 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <svg :viewBox="service.iconViewBox" class="w-12 h-12 text-[#1a2e44]">
            <path v-for="(path, i) in service.iconPaths" :key="i" :d="path" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <div class="font-bold text-lg text-center text-[#1a2e44] px-10">{{ service.name }}</div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          name: "Website Development",
          slug: "website-development",
          iconViewBox: "0 0 24 24",
          iconPaths: [
            "M2 3h20v14H2z",
            "M8 21h8",
            "M12 17v4"
          ]
        },
        {
          name: "Mobile Development",
          slug: "mobile-development",
          iconViewBox: "0 0 24 24",
          iconPaths: [
            "M5 2h14v20H5z",
            "M12 18h.01"
          ]
        },
        {
          name: "Custom Software",
          slug: "custom-backend-api",
          iconViewBox: "0 0 24 24",
          iconPaths: [
            "M12 2a10 10 0 1 0 0 20",
            "M12 8a4 4 0 1 1 0 8",
            "M4.93 4.93l4.24 4.24",
            "M14.83 14.83l4.24 4.24"
          ]
        }
      ]
    };
  }
};
</script>
