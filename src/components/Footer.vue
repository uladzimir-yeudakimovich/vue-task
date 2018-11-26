<template>
  <div class="footer">
    <section class="container">
      <h3 class="contacts_title">{{ information }}</h3>
      <p class="contacts_description">&nbsp;{{ description }}</p>
      <ul class="contacts_items">
        <li class="contact-item">
          <img src="../assets/images/social_icons/phone.svg" alt="phone">
          <a class="contact-link" href="tel:phone">{{ phone }}</a>
        </li>
        <li class="contact-item">
          <img src="../assets/images/social_icons/envelope.svg" alt="email">
          <a class="contact-link" href="mailto:myEmail">{{ myEmail }}</a>
        </li>
        <li class="contact-item">
          <img src="../assets/images/social_icons/cloud.svg" alt="cloud">
          <a class="contact-link" href="../assets/CV_Евдокимович Владимир.docx" download>{{ cvRussian }}</a>
        </li>
        <li class="contact-item">
          <img src="../assets/images/social_icons/cloud.svg" alt="cloud">
          <a class="contact-link" href="../assets/CV_Uladzimir Yeudakimovich.docx" download>{{ cvEnglish }}</a>
        </li>
      </ul>
      <h4 class="contacts_title">{{ subname }}</h4>
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
        <input class="form__input" :class="{ 'form__input_error': $v.name.$error }" :placeholder="form.name" v-model.trim="$v.name.$model"/>
        <div class="error" v-if="!$v.name.required && submitStatus === 'ERROR'">{{ required.name }}</div>
        <div class="error" v-if="!$v.name.minLength && submitStatus === 'ERROR'">{{ required.validName }}</div>
      </div>
      <div>
        <input class="form__input" :class="{ 'form__input_error': $v.email.$error }" :placeholder="form.email" v-model.trim="$v.email.$model"/>
        <div class="error" v-if="!$v.email.required && submitStatus === 'ERROR'">{{ required.email }}</div>
        <div class="error" v-if="!$v.email.email && submitStatus === 'ERROR'">{{ required.validEmail }}</div>
      </div>
      <div>
        <textarea class="form__input form__input_message" :class="{ 'form__input_error': $v.message.$error }" :placeholder="form.message"  v-model.trim="$v.message.$model"></textarea>
        <div class="error" v-if="!$v.message.required && submitStatus === 'ERROR'">{{ required.message }}</div>
        <div class="error" v-if="!$v.message.minLength && submitStatus === 'ERROR'">{{ required.validMessage }}</div>
      </div>
      <div>
        <button class="btn-primary" type="submit" :disabled="submitStatus === 'OK'">{{ buttons.submit }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  data () {
    return {
      information: "Contact Information",
      description: "I'm open to new projects. You can send me for evaluation an approximate technical assignment or simply a description of the project in your own words.",
      phone: "+375 33 3344201",
      myEmail: "uladzimir.yeudakimovich@gmail.com",
      cvRussian: "CV in russian",
      cvEnglish: "CV in english",
      subname: "Links to my social networks:",
      linkedin: "Linkedin",
      github: "Github",
      codewars: "CodeWars",
      duolingo: "Duolingo",
      name: '',
      email: '',
      message: '',
      submitStatus: null,
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
        submit: "Submit"
      }
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
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'OK'
        const letter = {
          name: this.$v.name.$model,
          email: this.$v.email.$model,
          message: this.$v.message.$model
        }
        console.log(letter);
        this.$v.name.$model = '';
        this.$v.email.$model = '';
        this.$v.message.$model = '';
      }
    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  padding: 30px;
  background-image: linear-gradient(-180deg, #E6F0F0 0%, #E9F0E6 100%);
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
  .footer {
    display: block;
  }

  .container {
    width: 100%;
  }

  .contacts_description {
    padding-right: 0px;
  }
}
</style>