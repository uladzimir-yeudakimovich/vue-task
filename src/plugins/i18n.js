import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'En',
  fallbackLocale: 'En',
  messages: {
    En: {
      header: {
        position: "Software Engineer",
        name: "Uladzimir Yeudakimovich",
        description: "A few words about me. I graduated from Rolling Scopes School in EPAM Systems with a specialization in front-end development. I work as software engineer for OCS Innovation Company (OCSICO®). I use frameworks Angular, AngularJS, Angular Material and Bootstrap, Ajax technology, jQuery library, webpack collector, LESS and SASS preprocessors, Git version control system. I'm experienced in the React and Vue frameworks.",
      },
      main: {
        title: 'My works',
      },
      footer: {
        information: "Contact Information",
        description: "I'm open to new projects. You can send me for evaluation an approximate technical assignment or simply a description of the project in your own words.",
        cvRussian: "CV in russian",
        cvEnglish: "CV in english",
        subname: "Links to my social networks:",
        form: {
          name: "Enter name *",
          email: "Enter email *",
          message: "Enter message *"
        },
        required: {
          name: "Name is required",
          validName: "Name must be at least 4 characters",
          email: "Email is required",
          validEmail: "Email must be a valid email address",
          message: "Message is required",
          validMessage: "Message must be at least 2 characters"
        },
        buttons: {
          update: "Update",
          close: "Close",
          submit: "Submit"
        },
        messages: {
          comments: "Comments",
          name: "Name",
          email: "Email",
          messages: "Messages"
        }
      },
      "view application": "view application",
      "play": "play",
      "view site": "view site",

      "Application on angular.": "Application on angular.",
      "This application was written using frameworks Angular 6 and Bootstrap 4. I used such technologies as structural directives, pipes, services, routing and navigation, forms, ngModules, observables and RxJS, worked with API. With this application, you can download the required number of users from the server. Make a quick search for the right person by name.  Mark the right people.": "This application was written using frameworks Angular 6 and Bootstrap 4. I used such technologies as structural directives, pipes, services, routing and navigation, forms, ngModules, observables and RxJS, worked with API. With this application, you can download the required number of users from the server. Make a quick search for the right person by name.  Mark the right people.",
      "Portfolio.": "Portfolio.",
      "It is my first portfolio. I created it on native JavaScript using HTML5 and CSS3. This application is bilingual.": "It is my first portfolio. I created it on native JavaScript using HTML5 and CSS3. This application is bilingual.",
      "Application on react.": "Application on react.",
      "Task Scheduler To-DO-List. The development language is JavaScript. It was written with the use of the React framework, with the connection of the Redux library.": "Task Scheduler To-DO-List. The development language is JavaScript. It was written with the use of the React framework, with the connection of the Redux library.",
      "Math-match-game.": "Math-match-game.",
      "Game for the development of memory. It was written in HTML5, CSS3 and JavaScript.": "Game for the development of memory. It was written in HTML5, CSS3 and JavaScript.",
      "The site of restaurant.": "The site of restaurant.",
      "Online page of restaurant. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.": "Online page of restaurant. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.",

      "Super work!!!": "Super work!!!",
      "How much is this application?": "How much is this application?"
    },
    Ru: {
      header: {
        position: "Инженер программист",
        name: "Евдокимович Владимир",
        description: "Несколько слов обо мне. Закончил Rolling Scopes School в EPAM Systems по специальности front-end разработка. Работаю инженером программистом в OCS Innovation Company (OCSICO®). Работаю со следующими фреймворками Angular, Angular Material и Bootstrap, технологией Ajax, библеатекой jQuery, сборщиком webpack, препроцессорами LESS и SASS, системой управления версиями Git. Есть небольшой опыт работы с фреймворками AngularJS и React.",
      },
      main: {
        title: 'Мои работы',
      },
      footer: {
        information: "Контактная информация",
        description: "Вы можете отправить мне для оценки приблизительное техническое задание или просто описание проекта своими словами.",
        cvRussian: "резюме на русском",
        cvEnglish: "резюме на английском",
        subname: "Ссылки на мои социальные сети:",
        form: {
          name: "Введите имя *",
          email: "Введите email *",
          message: "Введите сообщение *"
        },
        required: {
          name: "Имя обязательно",
          validName: "Имя должно иметь минимум 4 знака",
          email: "Email обязателен",
          validEmail: "Email должен иметь действительный адрес",
          message: "Сообщение обязательно",
          validMessage: "Сообщение должно иметь минимум 2 знака"
        },
        buttons: {
          update: "Обновить",
          close: "Закрыть",
          submit: "Отправить"
        },
        messages: {
          comments: "Комментарии",
          name: "Имя",
          email: "Email",
          messages: "Сообщения"
        }
      },
      "view application": "посмотреть приложение",
      "play": "играть",
      "view site": "посмотреть сайт",

      "Application on angular.": "Приложение на angular.",
      "This application was written using frameworks Angular 6 and Bootstrap 4. I used such technologies as structural directives, pipes, services, routing and navigation, forms, ngModules, observables and RxJS, worked with API. With this application, you can download the required number of users from the server. Make a quick search for the right person by name.  Mark the right people.": "Это приложение было написано с использованием фреймворков Angular 6 и Bootstrap 4. Я использовал такие технологии, как директивы, пайпы, сервисы, маршрутизацию и навигацию, формы, ng-модули, наблюдатели и RxJS, работающие с API. С помощью этого приложения вы можете скачать требуемое количество пользователей с сервера. Сделайте быстрый поиск подходящего человека по имени. Отметить нужных людей.",
      "Portfolio.": "Портфолио.",
      "It is my first portfolio. I created it on native JavaScript using HTML5 and CSS3. This application is bilingual.": "Это мое первое портфолио. Я создал его на чистом JavaScript, используя HTML5 и CSS3. Это приложение двуязычное.",
      "Application on react.": "Приложение на react.",
      "Task Scheduler To-DO-List. The development language is JavaScript. It was written with the use of the React framework, with the connection of the Redux library.": "Планировщик заданий To-DO-List. Язык разработки - JavaScript. Был написан с использованием фреймворка React, с подключением библиотеки Redux.",
      "Math-match-game.": "Math-match-game.",
      "Game for the development of memory. It was written in HTML5, CSS3 and JavaScript.": "Игра для развития памяти. Разработана с использованием HTML5, CSS3 и JavaScript.",
      "The site of restaurant.": "Сайт ресторана.",
      "Online page of restaurant. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.": "Интернет-страница ресторана. Разработана с использованием HTML5 и CSS Grid Layout и CSS Flexbox.",

      "Super work!!!": "Классная работа!!!",
      "How much is this application?": "Сколько стоит это приложение?"
    }
  }
})