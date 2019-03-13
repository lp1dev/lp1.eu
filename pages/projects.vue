<template>
  <section class="container">
    <app-header/>
    <app-projects/>
    <app-footer/>
  </section>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppProjects from '@/components/AppProjects'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'Projects',
  components: { AppHeader, AppProjects, AppFooter }
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
</style>
