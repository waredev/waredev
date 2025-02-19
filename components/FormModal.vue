<template>
  <div class="fixed z-50 top-0 bottom-0 w-screen h-screen bg-[#1a2e44] bg-opacity-50 flex items-center justify-center lg:px-0 px-10">
    <div class="bg-white rounded-xl w-[45rem] h-[38rem] relative" @click.stop>
      <div class="absolute right-5 top-5 cursor-pointer" @click="$emit('close-modal')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 h-full">
        <img src="~assets/images/3WBHAgicGKZEGKwdGjMxH-transformed.png" class="lg:flex hidden h-full object-cover rounded-l-xl">
        <div class="pt-20 px-10">
          <img src="~assets/images/logo.png" class="w-16 mx-auto">
          <div class="font-nunito text-2xl font-bold text-[#1a2e44] text-center mt-3">Free Consultation</div>
          <div class="font-nunito text-sm text-[#1a2e44] text-center mt-3">Increase the effectiveness of your business through a website with a free consultation with our team</div>
          <input class="font-nunito bg-gray appearance-none border-2 border-gray rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary mt-5" type="text" placeholder="Full Name">
          <input class="font-nunito bg-gray appearance-none border-2 border-gray rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary mt-5" type="number" placeholder="WhatsApp Number">
          <button class="bg-primary py-3 mt-10 px-5 rounded-lg w-full text-white font-nunito font-bold">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
}
</script>
