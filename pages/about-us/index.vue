<template>
  <div class="pt-32 font-nunito">
    <div class="mb-24 xl:px-20 px-10">
      <div class="font-bold text-md text-word text-3xl">- About Our Team</div>
      <div class="text-md text-light mt-2">
        With a proven process and commitment to quality code, we build stable,
        <br />
        scalable web applications your customer will love.
      </div>
    </div>
    <div class="bg-light-blue xl:px-20 px-10 py-20">
      <div class="font-bold text-md text-word text-3xl">
        - Head of Team
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-2 gap-5 py-10">
        <div class="flex flex-col items-center">
          <div class="lg:w-72 w-auto mb-5">
            <img src="~assets/images/teams/dudi.jpeg" class="lg:w-72 lg:h-80 w-full h-48 object-cover rounded-md" />
            <div class="text-word font-nunito font-bold text-xl mt-5">Dudi Ali Murtado</div>
            <div class="text-word font-nunito text-sm mt-2">Chief Technology Officer</div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="lg:w-72 w-auto mb-5">
            <img src="~assets/images/teams/andi.jpg" class="lg:w-72 lg:h-80 w-full h-48 object-cover rounded-md" />
            <div class="text-word font-nunito font-bold text-xl mt-5">Andi Firwansyah</div>
            <div class="text-word font-nunito text-sm mt-2">Chief Executive Officer</div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="lg:w-72 w-auto mb-5">
            <img src="~assets/images/teams/pranto.jpeg" class="lg:w-72 lg:h-80 w-full h-48 object-cover rounded-md" />
            <div class="text-word font-nunito font-bold text-xl mt-5">Pranto Suwarno</div>
            <div class="text-word font-nunito text-sm mt-2">Chief Marketing Officer</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-light-blue xl:px-20 px-10 py-20">
      <div class="font-bold text-md text-word text-3xl">
        - The Engineer
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-2 gap-5 py-10">
        <div class="flex flex-col items-center">
          <div class="lg:w-72 w-auto mb-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" class="lg:w-72 lg:h-80 w-full h-48 object-cover rounded-md" />
            <div class="text-word font-nunito font-bold text-xl mt-5">Ichwan Setyawan</div>
            <div class="text-word font-nunito text-sm mt-2">Front End Developer</div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="lg:w-72 w-auto mb-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" class="lg:w-72 lg:h-80 w-full h-48 object-cover rounded-md" />
            <div class="text-word font-nunito font-bold text-xl mt-5">Herry Legowo</div>
            <div class="text-word font-nunito text-sm mt-2">Junior Developer</div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "AboutUsPage",
  head(){
    return {
      title: 'Waredev - About Us',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'og:title', content: 'Waredev - About Us' },
        { hid: 'description', name: 'og:description', content: 'With a proven process and commitment to quality code, we build stable, scalable web applications your customer will love.' },
        { hid: 'image', name: 'og:image', content: '/assets/images/img-hero.webp' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: 'waredev, waredev about us, services, waredev digital solution, waredev.co.id' }
      ]
    }
  },
};
</script>
