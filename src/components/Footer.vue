<template>
  <div class="footer">
    <div class="footer__show-modal" v-if="showMessageDetales && showMessage[0]">
      <div class="footer__show-modal_items">
        <h5 class="container">{{ this.showMessage[0].name }}</h5>
        <h5 class="container">{{ this.showMessage[0].email }}</h5>
        <textarea class="container form__input_message form__input_message-modal" v-model.trim="showMessage[0].message"></textarea>
      </div>
      <div class="footer__show-modal_buttons">
        <button class="btn btn-update" v-on:click="updateMessage">{{ $t('footer.buttons.update') }}</button>
        <button class="btn btn-close" v-on:click="closeMessage">{{ $t('footer.buttons.close') }}</button>
      </div>
    </div>

    <h3 class="footer__message_title">{{ $t('footer.messages.comments') }}</h3>
    <div class="footer__message_items">
      <h5 class="container">{{ $t('footer.messages.name') }}</h5>
      <h5 class="container">{{ $t('footer.messages.email') }}</h5>
      <h5 class="container">{{ $t('footer.messages.messages') }}</h5>
    </div>

    <div class="footer__message_items" v-if="messagesFromServer" v-for="later of messagesFromServer" v-bind:key="later.email">
      <p class="container">{{ later.name }}</p>
      <p class="container">{{ later.email }}</p>
      <p class="container">&nbsp;{{ $t(later.message) }}</p>
    </div>
    
    <div class="footer__message_items" v-if="messagesFromLocalStorage" v-for="later of messagesFromLocalStorage" v-bind:key="later.email" v-on:click="showDetails(messagesFromLocalStorage.indexOf(later))">
      <p class="container">{{ later.name }}</p>
      <p class="container">{{ later.email }}</p>
      <p class="container">
        &nbsp;{{ later.message }}
        <span class="footer__message_delete" v-on:click="deleted($event)" :id="messagesFromLocalStorage.indexOf(later)">&times;</span>
      </p>
    </div>

    <div class="footer__register-form">
      <section class="container">
        <h3 class="contacts_title">{{ $t('footer.information') }}</h3>
        <p class="contacts_description">&nbsp;{{ $t('footer.description') }}</p>
        <ul class="contacts_items">
          <li class="contact-item">
            <img src="../assets/images/social_icons/phone.svg" alt="phone">
            <a class="contact-link" href="tel:+375333344201">{{ phone }}</a>
          </li>
          <li class="contact-item">
            <img src="../assets/images/social_icons/envelope.svg" alt="email">
            <a class="contact-link" href="mailto:uladzimir.yeudakimovich@gmail.com">{{ myEmail }}</a>
          </li>
          <li class="contact-item">
            <img src="../assets/images/social_icons/cloud.svg" alt="cloud">
            <a class="contact-link" href="https://uladzimir-yeudakimovich.github.io//assets/CV_Евдокимович Владимир.docx" download>{{ $t('footer.cvRussian') }}</a>
          </li>
          <li class="contact-item">
            <img src="../assets/images/social_icons/cloud.svg" alt="cloud">
            <a class="contact-link" href="https://uladzimir-yeudakimovich.github.io//assets/CV_Uladzimir Yeudakimovich.docx" download>{{ $t('footer.cvEnglish') }}</a>
          </li>
        </ul>
        <h4 class="contacts_title">{{ $t('footer.subname') }}</h4>
        <ul class="contacts_items">
          <li class="contact-item">
            <img src="../assets/images/social_icons/linkedin.svg" alt="linkedin">
            <a class="contact-link" href="https://www.linkedin.com/in/uladzimir-yeudakimovich" target="_blank" rel="noopener">{{ linkedin }}</a>
          </li>
          <li class="contact-item">
            <img src="../assets/images/social_icons/github.svg" alt="github">
            <a class="contact-link" href="https://github.com/uladzimir-yeudakimovich" target="_blank" rel="noopener">{{ github }}</a>
          </li>
          <li class="contact-item">
            <img src="../assets/images/social_icons/codewars.svg" alt="codewars">
            <a class="contact-link" href="https://www.codewars.com/users/uladzimir.yeudakimovich" target="_blank" rel="noopener">{{ codewars }}</a>
          </li>
          <li class="contact-item">
            <img src="../assets/images/social_icons/students-cap.svg" alt="cap">
            <a class="contact-link" href="https://www.duolingo.com/91YN1" target="_blank" rel="noopener">{{ duolingo }}</a>
          </li>
        </ul>
      </section>

      <form class="container footer__register-form" @submit.prevent="submit">
        <div>
          <input class="form__input"
                :class="{ 'form__input_error': $v.name.$error && submitStatus === 'ERROR' }"
                :placeholder="$t('footer.form.name')"
                v-model.trim="$v.name.$model"
                aria-label="name"/>
          <div class="error" v-if="!$v.name.required && submitStatus === 'ERROR'">{{ $t('footer.required.name') }}</div>
          <div class="error" v-if="!$v.name.minLength && submitStatus === 'ERROR'">{{ $t('footer.required.validName') }}</div>
        </div>
        <div>
          <input class="form__input"
                :class="{ 'form__input_error': $v.email.$error && submitStatus === 'ERROR' }"
                :placeholder="$t('footer.form.email')"
                v-model.trim="$v.email.$model"
                aria-label="email"/>
          <div class="error" v-if="!$v.email.required && submitStatus === 'ERROR'">{{ $t('footer.required.email') }}</div>
          <div class="error" v-if="!$v.email.email && submitStatus === 'ERROR'">{{ $t('footer.required.validEmail') }}</div>
        </div>
        <div>
          <textarea class="form__input form__input_message"
                    :class="{ 'form__input_error': $v.message.$error && submitStatus === 'ERROR' }"
                    :placeholder="$t('footer.form.message')"
                    v-model.trim="$v.message.$model"
                    aria-label="message">
          </textarea>
          <div class="error" v-if="!$v.message.required && submitStatus === 'ERROR'">{{ $t('footer.required.message') }}</div>
          <div class="error" v-if="!$v.message.minLength && submitStatus === 'ERROR'">{{ $t('footer.required.validMessage') }}</div>
        </div>
        <div>
          <button class="btn-primary" type="submit" :disabled="submitStatus === 'OK'">{{ $t('footer.buttons.submit') }}</button>
        </div>
      </form>
    </div>
    
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
const axios = require('axios');

export default {
  data () {
    return {
      phone: "+375 33 3344201",
      myEmail: "uladzimir.yeudakimovich@gmail.com",
      linkedin: "Linkedin",
      github: "Github",
      codewars: "CodeWars",
      duolingo: "Duolingo",
      name: '',
      email: '',
      message: '',
      submitStatus: null,
      messagesFromServer : null,
      messagesFromLocalStorage: localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages'))['mess'] : [],
      showMessageDetales: false,
      showMessage: [],
      copyMessage: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    message: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        this.submitStatus = 'OK'
        const letter = {
          name: this.$v.name.$model,
          email: this.$v.email.$model,
          message: this.$v.message.$model
        }
        this.messagesFromLocalStorage.push(letter);
        localStorage.setItem('messages', JSON.stringify({ mess: this.messagesFromLocalStorage }));
        this.$v.name.$model = '';
        this.$v.email.$model = '';
        this.$v.message.$model = '';
        this.submitStatus = null;
      }
    },
    deleted(event) {
      this.messagesFromLocalStorage.splice(event.target['id'], 1);
      localStorage.setItem('messages', JSON.stringify({ mess: this.messagesFromLocalStorage }));
    },
    showDetails(e) {
      if (this.messagesFromLocalStorage[e]) {
        this.showMessageDetales = true;
        this.showMessage.push(this.messagesFromLocalStorage[e]);
        this.copyMessage = this.messagesFromLocalStorage[e]['message'];
      }
    },
    updateMessage() {
      this.showMessageDetales = false;
      localStorage.setItem('messages', JSON.stringify({ mess: this.messagesFromLocalStorage }));
      this.showMessage = [];
      this.copyMessage = '';
    },
    closeMessage() {
      this.showMessageDetales = false;
      this.showMessage[0].message = this.copyMessage;
      this.showMessage = [];
      this.copyMessage = '';
    }
  },
  mounted () {
    axios
      .get('https://uladzimir-yeudakimovich.github.io/assets/message.json')
      .then(response => (this.messagesFromServer = response.data.mess))
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
.footer {
  padding: 15px calc(15px + 1%);
  background-image: linear-gradient(-180deg, #E6F0F0 0%, #E9F0E6 100%);
}

.footer__show-modal {
  display: flex;
  flex-direction: column;
  width: calc(78% - 66px);
  margin: 0 10%;
  padding: 15px;
  background-color: rgb(238, 245, 243);
  border: solid;
  border-radius: 5px;
  position: fixed;
  top: 180px;
  z-index: 15;
}

.footer__show-modal_items {
  display: flex;
}

.footer__show-modal_buttons {
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
}

.footer__message_title {
  display: flex;
  justify-content: center;
  margin-top: 0;
}

.footer__message_items {
  display: flex;
  padding-left: 15px;
  background-color: rgb(248, 248, 153);
  border-radius: 4px;
  border-bottom: solid black;
}

.footer__message_delete {
  float: right;
  margin-top: -15px;
  padding-right: 15px;
  color: red;
  font-size: 26px;
  cursor: pointer;
}

.footer__register-form {
  display: flex;
}

.container {
  width: 50%;
  display: inline-block;
}

.contacts_title {
  display: flex;
  justify-content: center;
  margin: 0;
}

.contacts_description {
  padding-right: 15px;
}

.contacts_items {
  padding: 0;
}

.contact-item {
  display: flex;
  list-style-type: none;
}

.contact-link {
  text-decoration: none;
  color: #0000FF;
  padding: 5px 0 5px 12px;
}

.contact-link:hover {
  color: rgb(64, 64, 221)
}

.footer__register-form {
  margin-top: 22px;
}

.form__input {
  border-radius: 4px;
  width: 90%;
  height: 48px;
  padding: 0 5%;
  margin-top: 15px;
  border: 2px solid grey;
}

.form__input_error {
  border: 2px solid red;
}

.form__input_message {
  height: 135px;
  padding-top: 10px;
  font-size: 15px;
}

.form__input_message-modal {
  width: 100%;
  height: 200px;
}

.form__input:hover {
  border: 2px solid #286090;
}

.error {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 14px;
  color: red;
}

.btn {
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: white;
  margin-left: 5px;
}

.btn-update {
  background-color: red;
}

.btn-update:hover {
  background-color: rgb(187, 4, 4);
}

.btn-close {
  background-color: gray;
}

.btn-close:hover {
  background-color: rgb(82, 81, 81);
}

.btn-primary {
  width: calc(100% + 4px);
  height: 49px;
  margin-top: 10px;
  background-color: #0000FF;
  border-radius: 4px;
  color: white;
  border: none;
  font-size: 20px;
}

.btn-primary:hover {background-color: rgb(64, 64, 221)}

@media (max-width: 768px) {
  .footer__show-modal {
    top: 80px;
  }

  .footer__message_items {
    display: block;
  }

  .footer__register-form {
    display: block;
  }

  .footer__show-modal_items {
    display: block;
  }

  .footer__show-modal {
  width: calc(98% - 66px);
  margin: 0;
}

  .container {
    width: 100%;
  }

  .contacts_description {
    padding-right: 0px;
  }
}
</style>