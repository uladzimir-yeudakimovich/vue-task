<template>
  <div class="footer">
    <section class="container">
      <h3 class="contacts_title">{{ name }}</h3>
      <p class="contacts_description">&nbsp;{{ description }}</p>
      <ul class="contacts_items">
        <li class="contact-item">
          <img src="../assets/images/social_icons/phone.svg" alt="phone">
          <a class="contact-link" href="tel:phone">{{ phone }}</a>
        </li>
        <li class="contact-item">
          <img src="../assets/images/social_icons/envelope.svg" alt="email">
          <a class="contact-link" href="mailto:email">{{ email }}</a>
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

    <form class="container footer__register-form">
      <div class="form-group">
        <input class="form-control"
              type="text"
              aria-label="name"/>
        <!-- <div class="invalid-feedback" v-if="submitted && f.name.errors">
          <div v-if="f.name.errors.required">{{ footer.required.name }}</div>
        </div> -->
      </div>
      <div class="form-group">
        <input class="form-control"
              type="text"
              aria-label="email"/>
        <!-- <div class="invalid-feedback" v-if="submitted && f.email.errors">
          <div v-if="f.email.errors.required">{{ footer.required.email }}</div>
          <div v-if="f.email.errors.email">{{ footer.required.validEmail }}</div>
        </div> -->
      </div>
      <div class="form-group">
        <textarea class="form-control form-control_message"
              type="text"
              aria-label="message">
        </textarea>
        <!-- <div class="invalid-feedback" v-if="submitted && f.message.errors">
          <div v-if="f.message.errors.required">{{ footer.required.message }}</div>
          <div v-if="f.message.errors.minlength">{{ footer.required.validMessage }}</div>
        </div> -->
      </div>
      <div class="form-group">
        <button class="btn btn-primary">{{ buttons.submit }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: "Contact Information",
      description: "I'm open to new projects. You can send me for evaluation an approximate technical assignment or simply a description of the project in your own words.",
      phone: "+375 33 3344201",
      email: "uladzimir.yeudakimovich@gmail.com",
      cvRussian: "CV in russian",
      cvEnglish: "CV in english",
      subname: "Links to my social networks:",
      linkedin: "Linkedin",
      github: "Github",
      codewars: "CodeWars",
      duolingo: "Duolingo",
      message: {
        comments: "Comments",
        name: "Name",
        email: "Email",
        messages: "Messages"
      },
      form: {
        name: "Enter name *",
        email: "Enter email *",
        message: "Enter message *"
      },
      required: {
        name: "Name is required",
        email: "Email is required",
        validEmail: "Email must be a valid email address",
        message: "Message is required",
        validMessage: "Message must be at least 2 characters"
      },
      buttons: {
        update: "Update",
        close: "Close",
        submit: "Submit"
      }
    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  padding: 15px;
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
  margin-top: 38px;
}

.form-control {
  border-radius: 4px;
  width: 90%;
  height: 48px;
  padding: 0 5%;
  margin-bottom: 15px;
  border: 2px solid grey;
}

.form-control_message {
  height: 135px;
  padding-top: 10px;
}

.form-control:hover {
  border: 2px solid #286090;
}

.btn-primary {
  width: 100%;
  height: 49px;
  margin-bottom: 15px;
  background-color: #0000FF;
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