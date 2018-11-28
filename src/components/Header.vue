<template>
  <div class="header">
    <div class="languages">
      <button class="change-language" :class="isEnglish ? 'change-language_unactive' : 'change-language_active'" @click="changeLanguage('En')">En</button>
      <button class="change-language" :class="isEnglish ? 'change-language_active' : 'change-language_unactive'" @click="changeLanguage('Ru')">Ru</button>
    </div>
    <figure class="container header__laptop">
      <img class="rectangle" src="../assets/images/logo_laptop.jpg" alt="logo_laptop">
    </figure>
    <article class="container">
      <h3 class="header__subname">{{ $t('header.position') }}</h3>
      <h1 class="header__name">{{ $t('header.name') }}</h1>
      <figure class="header__phone">
        <img class="circle" src="../assets/images/logo_phone.jpg" alt="logo_phone">
      </figure>
      <figure class="header__tablet">
        <img class="circle" src="../assets/images/logo_tablet.jpg" alt="logo_tablet">
      </figure>
      <p class="header__descriptin">&nbsp;{{ $t('header.description') }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data: () => ({ isEnglish: true }),
  methods: {
    changeLanguage(lang) {
      this.isEnglish = !this.isEnglish;
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
  position: absolute;
  top: 10px;
  left: calc(50% - 100px);
}

.change-language {
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 900;
  border-radius: 4px;
  border: none;
}

.change-language_unactive {
  background-color: #0000ff;
  color: white;
}

.change-language_active {
  background-color: white;
  color: #0000ff;
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