<template>
  <div class="header">
    <div class="languages">
      <button class="change-language" v-for="lang in languages" v-bind:key="lang" @click="changeLanguage(lang)">
        {{ lang }}
      </button>
    </div>
    <figure class="container header__laptop">
      <img class="rectangle" src="../assets/images/logo_laptop.jpg" alt="logo_laptop">
    </figure>
    <article class="container">
      <h3 class="header__subname">{{ $t('position') }}</h3>
      <h1 class="header__name">{{ $t('name') }}</h1>
      <figure class="header__phone">
        <img class="circle" src="../assets/images/logo_phone.jpg" alt="logo_phone">
      </figure>
      <figure class="header__tablet">
        <img class="circle" src="../assets/images/logo_tablet.jpg" alt="logo_tablet">
      </figure>
      <p class="header__descriptin">&nbsp;{{ $t('description') }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data: () => ({ languages: ['En', 'Ru'] }),
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
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

.languages {
  position: fixed;
  top: 10px;
  left: calc(50% - 100px);
}

.change-language {
  width: 100px;
  height: 40px;
  background-color: #0000ff;
  color: white;
  font-size: 16px;
  font-weight: 900;
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