<template>
  <section class="bg-[#f8f8ff] w-full h-auto font-nunito pt-40">
    <div class="lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-4xl font-extrabold text-[#1a2e44] text-center">
        Reviews
      </div>
      <div class="text-[#1a2e44] text-center lg:max-w-3xl mx-auto px-6 mt-3">
        We are proud of what we do, and it is reflected in what our customers say about their experience with us. Here are some reviews from our satisfied clients.
      </div>
      <div class="w-full pb-14 lg:overflow-x-hidden overflow-x-auto">
        <div class="grid lg:grid-cols-3 gap-8 mt-10">
          <div v-for="(review, index) in reviews" :key="index" :data-aos-delay="index * 200" data-aos="zoom-in" data-aos-duration="2000"
            class="bg-white w-full flex-shrink-0 custom-shadow px-8 py-10 rounded-xl transition-transform hover:scale-[1.02] duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-light w-10 h-10" viewBox="0 0 24 24">
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
            </svg>
            <div class="italic text-[#1a2e44] mt-1.5">{{ review.text }}</div>
            <div class="flex items-center space-x-3 mt-5">
              <img :src="review.image" class="w-10 h-10 rounded-full">
              <div>
                <div class="font-bold">{{ review.name }}</div>
                <div class="text-xs">{{ review.position }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reviews",
  data() {
    return {
      reviews: [
        {
          text: "The Sepasar.id application by Waredev demonstrates a high level of professionalism and meticulousness. All essential features are perfectly available, and the seamless user experience makes me want to use this app again and again.",
          name: "Awan Santosa, SE., M.Sc",
          position: "CO-Founder Sepasar.id",
          image: "https://sepasar.id/assets/public/images/people/110/awan.jpeg",
        },
        {
          text: "I am delighted to collaborate with Waredev.id from Bengkelmania.com. Their expertise and professionalism have greatly impressed me, making our partnership a truly enjoyable experience.",
          name: "Rizky Jonathan",
          position: "CEO bengkelmania.com",
          image: "https://media.licdn.com/dms/image/v2/D5603AQGNAansBBa06A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731545076689?e=1745452800&v=beta&t=w0gRpDsONJDQ_unQlwNiB65BWa5Q5QVNEyDrqEJsJjg",
        },
        {
          text: "Dashboard TB Indonesia is eager to collaborate with Waredev once again. Our previous experience working together was exceptional, and we look forward to continuing our partnership for future projects.",
          name: "Anonymous",
          position: "CEO Dashboard TB Indonesia",
          image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
        }
      ]
    };
  }
};
</script>
