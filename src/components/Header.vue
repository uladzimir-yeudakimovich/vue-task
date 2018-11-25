<template>
  <div class="header">
    <figure class="container header__laptop">
      <img class="rectangle" src="../assets/images/logo_laptop.jpg" alt="logo_laptop">
    </figure>
    <article class="container">
      <h3 class="header__subname">{{ position }}</h3>
      <h1 class="header__name">{{ name }}</h1>
      <figure class="header__phone">
        <img class="circle" src="../assets/images/logo_phone.jpg" alt="logo_phone">
      </figure>
      <figure class="header__tablet">
        <img class="circle" src="../assets/images/logo_tablet.jpg" alt="logo_tablet">
      </figure>
      <p class="header__descriptin">&nbsp;{{ description }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      position: "Software Engineer",
      name: "Uladzimir Yeudakimovich",
      description: "A few words about me. I graduated from Rolling Scopes School in EPAM Systems with a specialization in front-end development. I work as software engineer for OCS Innovation Company (OCSICO®). I use frameworks Angular, AngularJS, Angular Material and Bootstrap, Ajax technology, jQuery library, webpack collector, LESS and SASS preprocessors, Git version control system. I'm experienced in the React and Vue frameworks."
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  background-color: #3a3842;
  color: white;
}

.container {
  width: 50%;
}

.header__laptop {
  margin: 0;
}

.header__phone {
  display: none;
  justify-content: center;
  margin-top: 30px;
}

.header__subname {
  text-align: center;
  padding-top: 60px;
}

.header__name {
  font-size: 2.2rem;
  text-align: center;
  margin: 30px 0 0 30px;
}

.header__descriptin {
  margin: 15px auto;
  padding: 15px;
  text-align: justify;
  line-height: 1.4;
}

.header__tablet {
  display: none;
  justify-content: center;
  margin-top: 30px;
}

.rectangle {
  width: 100%;
  height: 100%;
}

.circle {
  border-radius: 50%;
}

@media (max-width: 992px) {
  .header {
    margin-top: -19px;
  }

  .container {
    width: 100%;
  }
  
  .header__laptop {
    display: none;
  }

  .header__tablet {
    display: flex;
  }
}

@media (max-width: 768px) {
  .header__tablet {
    display: none;
  }

  .header__phone {
    display: flex;
  }
}
</style>