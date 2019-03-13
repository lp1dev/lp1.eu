<template>
<div id="app-content">
  <div v-html="content"></div>
  <nuxt-link to="/contact">
    <button>Drop me a mail</button>
  </nuxt-link>
</div>
</template>

<script>
import content from '@/content/index/content.md'

export default {
  name: 'AppContent',
  data() {
    return {
      content: content
    }
  }
}
</script>

<style lang="scss">
#app-content {
  color: #424242;
  padding: 4vh;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin-bottom: 7vh;
  h1, h2 {
    margin-bottom: 2vh;
  }
  button {
    font-size: 2.5vh;    
  }
}
</style>
