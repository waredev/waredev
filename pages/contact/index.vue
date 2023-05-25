<template>
  <section class="pt-32 xl:px-20 px-10 font-nunito mb-32">
    <div class="mb-8">
      <div class="font-bold text-md text-word text-3xl">Contact Us</div>
      <div class="text-md text-light mt-4">
        We are delighted to be ready to answer any questions you may have regarding your project needs and
        <br />
        provide the best solutions. Please feel free to contact our experts to resolve your business issues.
      </div>
    </div>
    <div class="lg:w-4/5 w-full bg-white border border-gray rounded-lg px-5 py-5">
      <div class="font-bold text-word text-xl">What is the type of your project?</div>
      <div class="grid lg:grid-cols-5 grid-cols-1 gap-5 mt-5">
        <div class="border border-gray h-32 py-2 px-3 rounded-md relative">
          <div class="font-bold text-word">Website Development</div>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-20 h-20 text-[#0a1060] absolute right-3 bottom-3 opacity-[0.03]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          <div @click="handleSelectServices('Website Development')" :class="selected.includes('Website Development') ? 'border-primary bg-primary' : 'border-gray bg-white'" class="w-8 h-8 rounded border cursor-pointer border-gray absolute bottom-5 flex items-center justify-center">
            <svg v-if="selected.includes('Website Development')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <div class="border border-gray h-32 py-2 px-3 rounded-md relative">
          <div class="font-bold text-word">Mobile Development</div>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-20 h-20 text-[#0a1060] absolute right-3 bottom-3 opacity-[0.03]"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          <div @click="handleSelectServices('Mobile Development')" :class="selected.includes('Mobile Development') ? 'border-primary bg-primary' : 'border-gray bg-white'" class="w-8 h-8 rounded border cursor-pointer absolute bottom-5 flex items-center justify-center">
            <svg v-if="selected.includes('Mobile Development')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <div class="border border-gray h-32 py-2 px-3 rounded-md relative">
          <div class="font-bold text-word">Custom Backend/API</div>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-20 h-20 text-[#0a1060] absolute right-3 bottom-3 opacity-[0.03]"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
          <div @click="handleSelectServices('Custom Backend/API')" :class="selected.includes('Custom Backend/API') ? 'border-primary bg-primary' : 'border-gray bg-white'" class="w-8 h-8 rounded border cursor-pointer border-gray absolute bottom-5 flex items-center justify-center">
            <svg v-if="selected.includes('Custom Backend/API')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <div class="border border-gray h-32 py-2 px-3 rounded-md relative">
          <div class="font-bold text-word">Internet of Things (iOT)</div>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-20 h-20 text-[#0a1060] absolute right-3 bottom-3 opacity-[0.03]"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
          <div @click="handleSelectServices('Internet of Things (iOT)')" :class="selected.includes('Internet of Things (iOT)') ? 'border-primary bg-primary' : 'border-gray bg-white'" class="w-8 h-8 rounded border cursor-pointer border-gray absolute bottom-5 flex items-center justify-center">
            <svg v-if="selected.includes('Internet of Things (iOT)')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <div class="border border-gray h-32 py-2 px-3 rounded-md relative">
          <div class="font-bold text-word">UI/UX Design</div>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-20 h-20 text-[#0a1060] absolute right-3 bottom-3 opacity-[0.03]"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
          <div @click="handleSelectServices('UI/UX Design')" :class="selected.includes('UI/UX Design') ? 'border-primary bg-primary' : 'border-gray bg-white'" class="w-8 h-8 rounded border cursor-pointer border-gray absolute bottom-5 flex items-center justify-center">
            <svg v-if="selected.includes('UI/UX Design')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
      </div>
      
      <form
        action="https://formspree.io/f/mvonnqlb"
        method="POST">
        <div class="font-bold text-word text-xl mt-5">Form</div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <input type="hidden" name="selected" v-model="selected">
          <label class="w-full mt-5">
            <div for="name" class="text-word">First Name<span class="text-red">*</span></div>
            <input id="name" name="name" type="text" class="h-10 border border-gray mt-0.5 focus:outline-none w-full px-3 rounded-md">
          </label>
          <div class="w-full mt-5">
            <div for="last_name" class="text-word">Last Name<span class="text-red">*</span></div>
            <input id="last_name" name="last_name" type="text" class="h-10 border border-gray mt-0.5 focus:outline-none w-full px-3 rounded-md">
          </div>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <label class="w-full mt-5">
            <div for="email" class="text-word">Email<span class="text-red">*</span></div>
            <input id="email" name="email" type="email" class="h-10 border border-gray mt-0.5 focus:outline-none w-full px-3 rounded-md">
          </label>
          <label class="w-full mt-5">
            <div for="phone" class="text-word">WhatsApp/Phone Number<span class="text-red">*</span></div>
            <input id="phone" name="phone" type="text" class="h-10 border border-gray mt-0.5 focus:outline-none w-full px-3 rounded-md">
          </label>
        </div>
        <label class="w-full mt-5">
          <div for="company" class="text-word">Organization/Company<span class="text-red">*</span></div>
          <input id="company" name="company" type="text" class="h-10 border border-gray mt-0.5 focus:outline-none w-full px-3 rounded-md">
        </label>
        <label class="w-full mt-5">
          <div for="message" class="text-word">Mesage<span class="text-red">*</span></div>
          <textarea id="message" name="message" class="border border-gray mt-0.5 focus:outline-none w-full px-3 py-2 rounded-md" rows="8"></textarea>
        </label>
        <button class="mt-5 font-semibold bg-primary h-10 lg:w-32 w-full flex items-center justify-center text-white rounded-md cursor-pointer" type="submit">
        Submit
      </button>
      </form>
      <!-- <div class="mt-5 font-semibold bg-primary h-10 lg:w-32 w-full flex items-center justify-center text-white rounded-md cursor-pointer">Submit</div> -->
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactPage',
  data(){
    return {
      selected: [],
     
    }
  },
  methods: {
    handleSelectServices(service){
      if(this.selected.includes(service)){
        const newSelected = this.selected.filter(v => v !== service)
        this.selected = newSelected;
        return
      }
      this.selected.push(service);
    }
  }
}
</script>
