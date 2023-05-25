<template>
    <section class="pt-32 xl:px-20 px-10 font-nunito mb-20">
    <div class="mb-8">
      <div class="font-bold text-md text-word text-3xl">Our Services</div>
      <div class="text-md text-light mt-4">
        Discover the Range of Solutions We Offer
        <br>
        Feel free to customize it according to your specific needs and preferences. Let me know if there's anything else I can assist you with!
      </div>
    </div>
    <!-- <WebsiteDevelopment></WebsiteDevelopment>
    <MobileDevelopment></MobileDevelopment>
    <CustomBackendApi></CustomBackendApi>
    <InternetOfThings></InternetOfThings>
    <Ui></Ui> -->
    </section>
  </template>

  <script>
  // Import the website-development component
  import WebsiteDevelopment from './website-development.vue';
  import MobileDevelopment from './mobile-development.vue';
  import CustomBackendApi from './custom-backend-api.vue';
  import InternetOfThings from './internet-of-things.vue';
  import Ui from './ui-ux-design.vue';

  export default {
    name: 'Index',
    components: {
      WebsiteDevelopment,
      MobileDevelopment,
      CustomBackendApi,
      InternetOfThings,
      Ui,
    },
  };
  </script>
