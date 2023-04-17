<template>
  <section class="lg:pt-[50px] lg:pb-[50px]">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <h1 class="font-bold font-nunito text-4xl text-[#333333] mb-2 block">
              What Our Services
            </h1>
          </div>
        </div>
        <div>
          <p class="text-base text-[#888888] font-nunito">
            We offer customized IT solutions to help streamline your business
            operations and drive growth. we have the expertise to deliver
            reliable, scalable solutions that meet your specific requirements.
            Contact us today to learn more about how our IT solutions can help
            your business succeed.
          </p>
          <!-- Konten kolom kedua -->
        </div>
      </div>

      <div class="flex flex-wrap mt-20 -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8"
          >
            <img src="~/assets/images/web.png" class="h-16" alt="" />

            <h4 class="font-bold font-nunito text-xl text-[#333333] mb-3 mt-3">
              Website Development
            </h4>
            <p class="text-[#333333] font-nunito">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8"
          >
            <img src="~/assets/images/desktop.png" class="h-16" alt="" />

            <h4 class="font-bold font-nunito text-xl text-[#333333] mb-3 mt-3">
              Web App Development
            </h4>
            <p class="text-[#333333] font-nunito">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8"
          >
            <img src="~/assets/images/mobile.png" class="h-16" alt="" />

            <h4 class="font-bold font-nunito text-xl text-[#333333] mb-3 mt-3">
              Mobile App Development
            </h4>
            <p class="text-[#333333] font-nunito">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "TheServices",
};
</script>
