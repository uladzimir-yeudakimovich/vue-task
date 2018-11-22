<template>
  <div>
    <h1 class="main__title">{{ title }}</h1>
    <div v-for="slide in slides">
      <article>
        <div>
          <h3>{{ slide.name }}</h3>
          <a href="{ slide.link }" target="_blank" rel="noopener">{{ slide.click }}</a>
        </div>
        <p>&nbsp;{{ slide.description }}</p>
      </article>
      <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false">
        <slide
          data-index="0"
          data-name="MySlideName1"
          @slideClick="handleSlideClick">
          <img src="{ slide.images[0] }" alt="Random first slide">
        </slide>
        <slide
          data-index="1"
          data-name="MySlideName2"
          @slideClick="handleSlideClick">
          <img src="{ slide.images[1] }" alt="Random second slide">
        </slide>
        <slide
          data-index="2"
          data-name="MySlideName3"
          @slideClick="handleSlideClick">
          <img src="{ slide.images[2] }" alt="Random third slide">
        </slide>
        <slide
          data-index="3"
          data-name="MySlideName4"
          @slideClick="handleSlideClick">
          <img src="{ slide.images[3] }" alt="Random fourth slide">
        </slide>
        <slide
          data-index="4"
          data-name="MySlideName5"
          @slideClick="handleSlideClick">
          <img src="{ slide.images[4] }" alt="Random fifth slide">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Carousel, Slide } from "vue-carousel";
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      title: 'My works',
      slides: [
        {
          name: "Application on angular.",
          link: "http://uladzimir-yeudakimovich.ml/angular-app/",
          click: "view application",
          description: "This application was written using frameworks Angular 6 and Bootstrap 4. I used such technologies as structural directives, pipes, services, routing and navigation, forms, ngModules, observables and RxJS, worked with API. With this application, you can download the required number of users from the server. Make a quick search for the right person by name.  Mark the right people.",
          images : [
            "../assets/images/angular_task/angular_task1.jpg",
            "../assets/images/angular_task/angular_task2.jpg",
            "../assets/images/angular_task/angular_task3.jpg",
            "../assets/images/angular_task/angular_task4.jpg",
            "../assets/images/angular_task/angular_task5.jpg"
          ]
        },
        {
          name: "Portfolio.",
          link: "http://uladzimir-yeudakimovich.ml/portfolio-js/",
          click: "view application",
          description: "It is my first portfolio. I created it on native JavaScript using HTML5 and CSS3. This application is bilingual.",
          images : [
            "../assets/images/portfolio/portfolio1.jpg",
            "../assets/images/portfolio/portfolio2.jpg",
            "../assets/images/portfolio/portfolio3.jpg",
            "../assets/images/portfolio/portfolio4.jpg",
            "../assets/images/portfolio/portfolio5.jpg"
          ]
        },
        {
          name: "Application on react.",
          link: "http://uladzimir-yeudakimovich.ml/react-app/",
          click: "view application",
          description: "Task Scheduler To-DO-List. The development language is JavaScript. It was written with the use of the React framework, with the connection of the Redux library.",
          images : [
            "../assets/images/react/react1.jpg",
            "../assets/images/react/react2.jpg",
            "../assets/images/react/react3.jpg",
            "../assets/images/react/react4.jpg",
            "../assets/images/react/react5.jpg"
          ]
        },
        {
          name: "Math-match-game.",
          link: "http://uladzimir-yeudakimovich.ml/match-match-game/",
          click: "play",
          description: "Game for the development of memory. It was written in HTML5, CSS3 and JavaScript.",
          images : [
            "../assets/images/match/match1.jpg",
            "../assets/images/match/match2.jpg",
            "../assets/images/match/match3.jpg",
            "../assets/images/match/match4.jpg",
            "../assets/images/match/match5.jpg"
          ]
        },
        {
          name: "The site of restaurant.",
          link: "http://uladzimir-yeudakimovich.ml/restaurant",
          click: "view site",
          description: "Online page of restaurant. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.",
          images : [
            "../assets/images/restaurant/restaurant1.jpg",
            "../assets/images/restaurant/restaurant2.jpg",
            "../assets/images/restaurant/restaurant3.jpg",
            "../assets/images/restaurant/restaurant4.jpg",
            "../assets/images/restaurant/restaurant5.jpg"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
