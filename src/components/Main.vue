<template>
  <div class="main">
    <h1 class="main__title">{{ $t('main.title') }}</h1>
    <div v-for="slide in slides" v-bind:key="slide.id">
      <div :class="slides.indexOf(slide)%2 === 0 ? 'main__my-works-right' : 'main__my-works'">
        <article class="main__container">
          <div>
            <h3 class="main__my-work_slide-name">{{ slide.name }}</h3>
            <a class="main__my-work_slide-link" :href="slide.link" target="_blank" rel="noopener">{{ slide.click }}</a>
          </div>
          <p class="main__my-work_description">&nbsp;{{ slide.description }}</p>
        </article>
        <carousel class="main__container"
                  :per-page="1"
                  :autoplay="true"
                  :autoplayTimeout="3000"
                  :loop="true"
                  paginationActiveColor="#0000ff">
          <slide>
            <img class="main__my-work_img" :src="'https://uladzimir-yeudakimovich.ml/' + slide.images[0]" alt="Random first slide">
          </slide>
          <slide>
            <img class="main__my-work_img" :src="'https://uladzimir-yeudakimovich.ml/' + slide.images[1]" alt="Random second slide">
          </slide>
          <slide>
            <img class="main__my-work_img" :src="'https://uladzimir-yeudakimovich.ml/' + slide.images[2]" alt="Random third slide">
          </slide>
          <slide>
            <img class="main__my-work_img" :src="'https://uladzimir-yeudakimovich.ml/' + slide.images[3]" alt="Random fourth slide">
          </slide>
          <slide>
            <img class="main__my-work_img" :src="'https://uladzimir-yeudakimovich.ml/' + slide.images[4]" alt="Random fifth slide">
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
const axios = require('axios');

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      slides: []
    }
  },
  mounted () {
    axios
      .get('https://uladzimir-yeudakimovich.ml/assets/data.json')
      .then(response => (this.slides = response.data))
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
.main {
  padding: 0 15px;
}

.main__title {
  display: flex;
  justify-content: center;
}

.main__my-works {
  display: flex;
  margin-top: 20px;
}

.main__my-works-right {
  display: flex;
  margin-top: 20px;
  flex-direction: row-reverse;
  justify-content: center;
}

.main__container {
  width: 48%;
  margin: 8px 1%;
  display: inline-block;
}

.main__my-work_slide-name {
  display: flex;
  justify-content: center;
}

.main__my-work_slide-link {
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #0000FF;
}
.main__my-work_slide-link:hover {
  color: rgb(64, 64, 221)
}

.main__my-work_description {
  opacity: 0.8;
}

.main__my-work_img {
  width: 100%;
}

@media (max-width: 768px) {
  .main__my-works {
    display: block;
    margin-top: 20px;
  }

  .main__my-works-right {
    display: block;
    margin-top: 20px;
    flex-direction: row-reverse;
    justify-content: center;
  }

  .main__container {
    width: 100%;
    margin: 0;
    display: block;
  }
}
</style>