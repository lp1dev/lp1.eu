<template>
  <section class="container">
    <app-header/>
    <app-content/>
    <app-footer/>
  </section>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppContent from '@/components/AppContent.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>

<style>

html {
  font-family: "Raleway", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #e2e2e2;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a:active, a:focus {
  text-decoration: none;
  outline: 0;
  border: none;
  -moz-outline-style: none;
}

a {
  color: inherit;
  text-decoration: none;  
}
button {
    margin: auto;
    margin-top: 4vh;
    padding: 1vh 3vh;
    border: 1px solid #73a4b6;
    font-size: 2vh;
    background-color: transparent;
    font-family: 'Open Sans', sans-serif;
    transition: 1s all;
  }
  button:hover {
    background-color: #73a4b6;
    color: white;
  }
</style>
