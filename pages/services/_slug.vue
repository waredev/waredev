<template>
  <div class="pt-32 font-nunito xl:px-20 px-10 pb-32">
    <div class="font-bold text-md text-word text-2xl">{{currentService.label}}</div>
    <div class="text-md text-light mt-2">We offer complete web development areas, from Websites, <br> Web Apps & Web Services (API)</div>
  </div>
</template>
<script>
export default {
  name: 'ServicesPage',
  data(){
    return {
      currentService: '',
      services: [
        {
          slug: 'website-development',
          label: 'Website Development'
        },
        {
          slug: 'mobile-development',
          label: 'Mobile Development'
        },
        {
          slug: 'custom-backend-api',
          label: 'Custom Backend/API'
        },
        {
          slug: 'internet-of-things',
          label: 'Internet of Things (iOT)'
        },
        {
          slug: 'ui-ux-design',
          label: 'UI/UX Design'
        },
        {
          slug: 'support-and-maintenance',
          label: 'Support and Maintenance'
        }
      ]
    }
  },
  mounted(){
    this.currentService = this.services.find(v => v.slug === this.$route.params.slug);
  }
}
</script>
