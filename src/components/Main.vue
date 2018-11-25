<template>
  <div class="main">
    <h1 class="main__title">{{ title }}</h1>
    <div v-for="slide in slides">
      <div :class="slides.indexOf(slide)%2 === 0 ? 'main__my-works-right' : 'main__my-works'">
        <article class="main__container">
          <div>
            <h3 class="main__my-work_slide-name">{{ slide.name }}</h3>
            <a class="main__my-work_slide-link" :href="slide.link" target="_blank" rel="noopener">{{ slide.click }}</a>
          </div>
          <p class="main__my-work_description">&nbsp;{{ slide.description }}</p>
        </article>
        <carousel class="main__container" :per-page="1">
          <slide>
            <img class="main__my-work_img" :src="slide.images[0]" alt="Random first slide">
          </slide>
          <slide>
            <img class="main__my-work_img" :src="slide.images[1]" alt="Random second slide">
          </slide>
          <slide>
            <img class="main__my-work_img" :src="slide.images[2]" alt="Random third slide">
          </slide>
          <slide>
            <img class="main__my-work_img" :src="slide.images[3]" alt="Random fourth slide">
          </slide>
          <slide>
            <img class="main__my-work_img" :src="slide.images[4]" alt="Random fifth slide">
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

import angular_task1 from "../assets/images/angular_task/angular_task1.jpg";
import angular_task2 from "../assets/images/angular_task/angular_task2.jpg";
import angular_task3 from "../assets/images/angular_task/angular_task3.jpg";
import angular_task4 from "../assets/images/angular_task/angular_task4.jpg";
import angular_task5 from "../assets/images/angular_task/angular_task5.jpg";

import portfolio1 from "../assets/images/portfolio/portfolio1.jpg";
import portfolio2 from "../assets/images/portfolio/portfolio2.jpg";
import portfolio3 from "../assets/images/portfolio/portfolio3.jpg";
import portfolio4 from "../assets/images/portfolio/portfolio4.jpg";
import portfolio5 from "../assets/images/portfolio/portfolio5.jpg";

import react1 from "../assets/images/react/react1.jpg";
import react2 from "../assets/images/react/react2.jpg";
import react3 from "../assets/images/react/react3.jpg";
import react4 from "../assets/images/react/react4.jpg";
import react5 from "../assets/images/react/react5.jpg";

import match1 from "../assets/images/match/match1.jpg";
import match2 from "../assets/images/match/match2.jpg";
import match3 from "../assets/images/match/match3.jpg";
import match4 from "../assets/images/match/match4.jpg";
import match5 from "../assets/images/match/match5.jpg";

import restaurant1 from '../assets/images/restaurant/restaurant1.jpg';
import restaurant2 from '../assets/images/restaurant/restaurant2.jpg';
import restaurant3 from '../assets/images/restaurant/restaurant3.jpg';
import restaurant4 from '../assets/images/restaurant/restaurant4.jpg';
import restaurant5 from '../assets/images/restaurant/restaurant5.jpg';

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
          images : [angular_task1, angular_task2, angular_task3, angular_task4, angular_task5]
        },
        {
          name: "Portfolio.",
          link: "http://uladzimir-yeudakimovich.ml/portfolio-js/",
          click: "view application",
          description: "It is my first portfolio. I created it on native JavaScript using HTML5 and CSS3. This application is bilingual.",
          images : [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]
        },
        {
          name: "Application on react.",
          link: "http://uladzimir-yeudakimovich.ml/react-app/",
          click: "view application",
          description: "Task Scheduler To-DO-List. The development language is JavaScript. It was written with the use of the React framework, with the connection of the Redux library.",
          images : [react1, react2, react3, react4, react5]
        },
        {
          name: "Math-match-game.",
          link: "http://uladzimir-yeudakimovich.ml/match-match-game/",
          click: "play",
          description: "Game for the development of memory. It was written in HTML5, CSS3 and JavaScript.",
          images : [match1, match2, match3, match4, match5]
        },
        {
          name: "The site of restaurant.",
          link: "http://uladzimir-yeudakimovich.ml/restaurant",
          click: "view site",
          description: "Online page of restaurant. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.",
          images : [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5]
        }
      ]
    }
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