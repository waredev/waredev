<template>
  <div>
   <div class="w-full bg-light-blue py-16 px-0">
  <div class="py-20 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20 font-nunito">
    <h2 class="font-bold text-[#1a2e44] text-4xl lg:text-left text-center">About Us</h2>
    <p class="text-lg text-light mt-4 leading-relaxed text-left">
      We are a team of dedicated professionals who are passionate about technology and innovation.
      Our mission is to create high-quality, scalable, and efficient digital solutions that empower businesses
      to grow and adapt in an ever-changing digital landscape.
      <br /><br />
      With expertise in web and mobile development, UI/UX design, and backend systems,
      we focus on delivering seamless user experiences, robust architectures,
      and performance-driven applications tailored to meet the unique needs of our clients.
      <br /><br />
      We believe that great technology is built through collaboration, creativity, and precision.
      By leveraging the latest advancements in technology,
      we help businesses transform their ideas into impactful digital products
      that drive success and innovation in the modern world.
    </p>
  </div>
</div>

  <div class="pt-20 pb-32 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20 font-nunito">



    <div class="mb-10">
      <div class="font-bold text-[#1a2e44] text-4xl lg:text-left text-center">About Our Team</div>
      <div class="text-lg text-light mt-2 lg:text-left text-center">
        With a proven process and commitment to quality code, we build stable,
        <br />
        scalable web applications your customers will love.
      </div>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <div v-for="(member, index) in teamMembers" :key="index" class="profile-card">
        <div class="relative w-full h-[22rem] overflow-hidden rounded-lg shadow-lg">
          <div class="profile-img">
            <img :src="member.image" alt="Team Image" class="w-full h-full object-cover scale-125 object-top transition-transform duration-300 ease-in-out" />
            <div class="absolute inset-0 bg-black opacity-40"></div>
          </div>
        </div>

        <div class="profile-content">
          <h4 class="title">
            {{ member.name }}
            <span>{{ member.position }}</span>
          </h4>
          <div class="quote">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-gray-600" viewBox="0 0 24 24">
              <path d="M7 10h2V7H7V5h4v5H9c-1.1 0-2 .9-2 2v3h3v2H5v-5c0-2.2 1.8-4 4-4zm8 0h2V7h-2V5h4v5h-2c-1.1 0-2 .9-2 2v3h3v2h-5v-5c0-2.2 1.8-4 4-4z"/>
            </svg>
            <p>{{ member.quote }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: "AboutUsPage",
  data() {
    return {
      teamMembers: [
        {
          name: "Dudi Ali Murtado",
          position: "Chief Technology Officer",
          image: require('@/assets/images/teams/dudi.jpeg'),
          quote: "Innovation distinguishes between a leader and a follower."
        },
        {
          name: "Andi Firwansyah",
          position: "Chief Executive Officer",
          image: require('@/assets/images/teams/andi.jpg'),
          quote: "Success is not just about making money. It’s about making a difference."
        },
        {
          name: "Pranto Soearno",
          position: "Chief Marketing Officer",
          image: require('@/assets/images/teams/pranto.jpeg'),
          quote: "Creativity is intelligence having fun."
        },
      ],
    };
  },
};
</script>


<style scoped>
.profile-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.profile-card:hover {
  transform: scale(1.05);
}

.profile-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.profile-card .profile-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50% 4%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.profile-card:hover .profile-content {
  opacity: 1;
}

.profile-content .title {
  font-size: 20px;
  color: #333;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(-100px);
  transition: all 0.5s ease-in-out;
}

.profile-card:hover .title {
  opacity: 1;
  transform: translateY(0);
}

.profile-content .title span {
  display: block;
  margin-top: 5px;
  font-size: 14px;
  text-transform: capitalize;
}

.quote {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-style: italic;
  color: #444;
}

.quote svg {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
  color: #888;
}

.quote p {
  font-size: 14px;
  max-width: 250px;
  line-height: 1.5;
  color: #444;
}


</style>
