<template>

  <section class="pt-32 font-nunito" ref="sectionBox">
    <div v-if="article" class=" pb-10 lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20 font-nunito">
      <div class="font-extrabold text-3xl font-word">{{article.title}}</div>
      <div class="font-bold text-light mt-1.5 uppercase">{{$dayjs(article.gitCreatedAt).format('DD, MMM YYYY')}}</div>
      <div class="flex lg:flex-row flex-col items-start justify-between mt-10">
        <div>
          <div class="font-bold text-light uppercase">Penulis</div>
          <div class="flex items-center space-x-3 mt-2">
            <img :src="article.avatar" class="w-10 h-10 rounded-full">
            <div class="font-bold text-[#1a2e44] text-md uppercase">{{article.author}}</div>
          </div>
        </div>
        <div class="lg:mt-0 mt-5">
          <div class="font-bold text-light uppercase text-justify">Bagikan Artikel Ini</div>
          <div class="flex items-center space-x-5 mt-2">
            <a :href="socialLink.facebook + encodeURIComponent(articleUrl)" target="_blank">
            <img src="~assets/images/5282541_fb_social.svg" class="w-6 h-6">
            </a>
            <a :href="socialLink.linkedin + encodeURIComponent(articleUrl)" target="_blank">
              <img src="~assets/images/5282542_linkedin_social.svg" class="w-6 h-6">
            </a>
            <a :href="socialLink.twitter + encodeURIComponent(articleUrl)" target="_blank">
              <img src="~assets/images/5282551_tweet.svg" class="w-6 h-6">
            </a>
            <a :href="socialLink.whatsapp + encodeURIComponent(articleUrl)" target="_blank">
              <img src="~assets/images/5282549_whatsapp.svg" class="w-6 h-6">
            </a>
            <div class="h-4 w-0.5 bg-[#cacdd5] rounded-full"></div>
            <div class="relative">
              <button @click="handleShowTooltip('#tooltip1')" class="mt-1">
                <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6dcfaef2b5a6fed096_u_link-h.svg" class="w-6 h-6">
              </button>
              <div v-if="showTooltip === '#tooltip1'" class="bg-light transition-all duration-200 top-10 text-white font-nunito font-semibold py-2 px-5 w-32 rounded-lg absolute right-0">
                Link Copied
              </div>
            </div>
          </div>
        </div>
      </div>
      <img :src="article.image.src" :alt="article.image.alt" class="w-3/4 mx-auto object-contain mt-10">
      <div class="mt-10" id="content-box" ref="contentBox">
        <nuxt-content :document="article" class="font-nunito text-[#1a2e44] nuxt-contentx" />
      </div>
      <div class="flex lg:flex-row flex-col items-start justify-between mt-24">
        <div>
          <div class="font-bold text-light uppercase">Penulis</div>
          <div class="flex items-center space-x-3 mt-2">
            <img :src="article.avatar" class="w-10 h-10 rounded-full">
            <div class="font-bold text-[#1a2e44] text-md uppercase">{{article.author}}</div>
          </div>
        </div>
        <div class="lg:mt-0 mt-5">
          <div class="font-bold text-light uppercase text-justify">Bagikan Artikel Ini</div>
          <div class="flex items-center space-x-5 mt-2">
            <a :href="socialLink.facebook + encodeURIComponent(articleUrl)" target="_blank">
              <img src="~assets/images/5282541_fb_social.svg" class="w-6 h-6">
            </a>
            <a :href="socialLink.linkedin + encodeURIComponent(articleUrl)" target="_blank">
              <img src="~assets/images/5282542_linkedin_social.svg" class="w-6 h-6">
            </a>
            <a :href="socialLink.twitter + encodeURIComponent(articleUrl)" target="_blank">
              <img src="~assets/images/5282551_tweet.svg" class="w-6 h-6">
            </a>
            <a :href="socialLink.whatsapp + encodeURIComponent(articleUrl)" target="_blank">
              <img src="~assets/images/5282549_whatsapp.svg" class="w-6 h-6">
            </a>
            <div class="h-4 w-0.5 bg-[#cacdd5] rounded-full"></div>
            <div class="relative">
              <button @click="handleShowTooltip('#tooltip2')" data-tooltip-target="tooltip-default" type="button" class="mt-1">
                <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6dcfaef2b5a6fed096_u_link-h.svg" class="w-6 h-6">
              </button>
              <div v-if="showTooltip === '#tooltip2'" class="bg-light transition-all duration-200 top-10 text-white font-nunito font-semibold py-2 px-5 w-32 rounded-lg absolute right-0">
                Link Copied
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="scrollPosition > 300 && scrollPosition < minHeight" class="lg:w-56 w-3/4 lg:mx-0 lg:inset-x-auto mx-auto inset-x-0 transition-all lg:px-0 lg:py-0 px-5 py-5 duration-300 fixed lg:right-0 lg:bg-transparent bg-white lg:shadow-none custom-shadow rounded-xl lg:bottom-52 bottom-10">
        <div class="font-nunito font-bold text-[#1a2e44] lg:text-center text-justify lg:mb-3 mb-1.5">BAGIKAN</div>
        <div class="flex lg:flex-col flex-row items-center lg:space-y-5 lg:space-x-0 space-x-5 space-y-0">
          <a :href="socialLink.facebook + encodeURIComponent(articleUrl)" target="_blank">
            <img src="~assets/images/5282541_fb_social.svg" class="w-6 h-6">
          </a>
          <a :href="socialLink.linkedin + encodeURIComponent(articleUrl)" target="_blank">
            <img src="~assets/images/5282542_linkedin_social.svg" class="w-6 h-6">
          </a>
          <a :href="socialLink.twitter + encodeURIComponent(articleUrl)" target="_blank">
            <img src="~assets/images/5282551_tweet.svg" class="w-6 h-6">
          </a>
          <a :href="socialLink.whatsapp + encodeURIComponent(articleUrl)" target="_blank">
            <img src="~assets/images/5282549_whatsapp.svg" class="w-6 h-6">
          </a>
          <div class="h-4 w-0.5 bg-[#cacdd5] rounded-full"></div>
          <div class="flex flex-col items-center justify-center">
            <button @click="handleShowTooltip('#tooltip3')" class="w-12 h-12 cursor-pointer rounded-full border border-gray flex items-center justify-center">
              <img src="https://assets-global.website-files.com/5d8a2887296e9177accb65bc/636b5c6dcfaef2b5a6fed096_u_link-h.svg" class="w-6 h-6">
            </button>
            <span class="font-nunito text-xs text-[#1a2e44] text-center mt-2 uppercase">Copy Link</span>
            <div v-if="showTooltip === '#tooltip3'" class="bg-light transition-all duration-200 lg:bottom-7 bottom-24 left-48 lg:-left-12 text-white font-nunito font-semibold py-2 px-5 w-32 rounded-lg absolute right-0">
              Link Copied
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        scrollPosition: 0,
        minHeight: 0,
        maxHeight: 0,
        showTooltip: null,
        articleUrl: '',
        socialLink: {
          facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
          linkedin: 'https://www.linkedin.com/shareArticle?mini=true&title=&url=',
          twitter: 'https://twitter.com/intent/tweet?text=&url=',
          whatsapp: 'https://web.whatsapp.com/send?text=',
        }
      }
    },
    head(){
      return {
        title: this.article.title,
        meta: [
          {
            charset: 'utf-8'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial scale=1'
          },
          {
            hid: "title",
            name: "og:title",
            content: this.article.title,
          },
          {
            hid: "description",
            name: "og:description",
            content: this.article.description,
          },
          {
            hid: "image",
            name: "og:image",
            content: this.article.image.src,
          },
          {
            hid: "keywords",
            name: "og:keywords",
            content: this.article.head.meta.keywords.content,
          },
          {
            hid: "robots",
            name: "og:robots",
            content: this.article.head.meta.robots.content,
          },
          {
            hid: "author",
            name: "og:author",
            content: this.article.head.meta.author.content,
          },
          {
            hid: "copyright",
            name: "og:copyright",
            content: this.article.head.meta.copyright.content,
          },
        ]
      }
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch();
      return { article }
    },
    mounted () {
      this.matchHeight()
      this.articleUrl = window.location.href
    },

    methods: {
      handleScroll() {
        this.scrollPosition = window.scrollY;
      },
      matchHeight () {
        let heightOfScreen = this.$refs.sectionBox.clientHeight;
        let heightOfContent = this.$refs.contentBox.clientHeight;

        this.minHeight = heightOfContent + window.innerHeight - 300;
        this.maxHeight = heightOfScreen
      },
      handleShowTooltip(id){
        this.showTooltip = id;
        navigator.clipboard.writeText(this.articleUrl);
        setTimeout(() => {
          this.showTooltip = null
        },2000)
      }
    },
    created() {
      if (process.client) {
        window.addEventListener("scroll", this.handleScroll);
      }
    },
    destroyed() {
      if (process.client) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },

  }
</script>
<style scoped>
.nuxt-content h1 {
  font-weight: bold;
  font-size: 32px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
/* .icon.icon-link {
  background-image: url('~assets/images/u_link.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-right: 5px;
} */
.nuxt-content ol li {
  list-style-type: decimal;
  margin-bottom: 20px;
}
.nuxt-content ul li {
  list-style-type:disc;
  margin-bottom: 20px;
}
</style>
