<template>
  <div class="pb-32 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20">

    <div class="pt-32 font-nunito">
      <div class="font-extrabold text-[#1a2e44] text-4xl lg:text-left text-center">Web Application <span class="text-[#FF914D]">Development</span> </div>
      <div class="text-lg text-light mt-2 lg:text-left text-center">
        We offer complete web development areas, from Websites, <br> Web Apps & Web Services (API)      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-10 mt-16">
      <nuxt-img src="/Static website-cuate.svg" class="w-full max-w-[40rem] object-contain mt-10" />
      <div class="font-nunito lg:pr-10 mt-10">
        <div class="font-bold text-[#1a2e44] text-3xl lg:text-left text-center">What we offer?</div>
        <div class="mt-5 text-[#888888] lg:text-justify text-justify">
          Looking to strengthen your online presence? Or build an impressive website for your visitors? Don't worry, we are here to help. Our website development team has experience in developing websites for various types of businesses and organizations.
        </div>
        <div class="mt-5 text-[#888888] lg:text-justify text-justify">
          From designing the layout to integrating the necessary features and functionalities, we are ready to create a website that meets your needs. We prioritize quality and website security, so you can feel confident in running your online business.
        </div>
      </div>
    </div>

    <div class="font-nunito mt-32">
      <div class="font-bold text-center text-[#1a2e44] text-3xl">Technology we use</div>
      <div class="text-center text-[#1a2e44] lg:max-w-3xl mx-auto mt-5">
        Choosing the right tools, tech stack, and processes helped us build a product that is scalable and able to onboard new users.
      </div>

      <div class="font-bold text-center text-[#1a2e44] text-xl mt-10 mb-10 underline">Front End Stacks</div>
      <div class="grid grid-cols-3 lg:grid-cols-4 lg:px-32 gap-6">
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center col-span-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center col-span-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" class="w-16 object-contain">
        </div>
      </div>

      <div class="font-bold text-center text-[#1a2e44] text-xl mt-24 mb-10 underline">Back End Stacks</div>
      <div class="grid grid-cols-3 lg:grid-cols-4 lg:px-32 gap-6">
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://cdn.worldvectorlogo.com/logos/lumen-1.svg" class="w-12 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" class="w-16 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://static.djangoproject.com/img/logos/django-logo-positive.png" class="w-20 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" class="w-24 object-contain">
        </div>
        <div class="flex items-center justify-center">
          <img src="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png" class="w-24 object-contain">
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
      <a href="https://wa.me/6282193758418?text=Halo%2C%0ASaya%20tertarik%20untuk%20membuat%20janji%20konsultasi%20dengan%20Waredev%20Digital%20Solution.%0ATerima%20kasih.">
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
  name: 'WebsiteDevelopmentPage',
  head() {
    return {
      title: 'Waredev - Website Development Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'og:title', content: 'Waredev - Website Development Service' },
        { hid: 'description', name: 'og:description', content: 'We offer complete web development areas, from Websites, Web Apps & Web Services (API)' },
        { hid: 'image', name: 'og:image', content: '/assets/images/2759B.webp' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: 'waredev, waredev website development, services, waredev digital solution, waredev.co.id' }
      ]
    };
  },
};
</script>
