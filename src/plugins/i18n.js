import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      position: "Software Engineer",
      name: "Uladzimir Yeudakimovich",
      description: "A few words about me. I graduated from Rolling Scopes School in EPAM Systems with a specialization in front-end development. I work as software engineer for OCS Innovation Company (OCSICO®). I use frameworks Angular, AngularJS, Angular Material and Bootstrap, Ajax technology, jQuery library, webpack collector, LESS and SASS preprocessors, Git version control system. I'm experienced in the React and Vue frameworks.",
      title: 'My works',
    },
    ru: {
      position: "Инженер программист",
      name: "Евдокимович Владимир",
      description: "Несколько слов обо мне. Закончил Rolling Scopes School в EPAM Systems по специальности front-end разработка. Работаю инженером программистом в OCS Innovation Company (OCSICO®). Работаю со следующими фреймворками Angular, Angular Material и Bootstrap, технологией Ajax, библеатекой jQuery, сборщиком webpack, препроцессорами LESS и SASS, системой управления версиями Git. Есть небольшой опыт работы с фреймворками AngularJS и React.",
      title: 'Мои работы',
    }
  }
})