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
      }  
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
    }
  }
})