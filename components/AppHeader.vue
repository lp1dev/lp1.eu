<template>
<div id="app-header">
  <div id="app-header-content" v-html="content"></div>
  <app-menu/>
</div>
</template>

<script>

import content from '@/content/index/header.md'
import AppMenu from '@/components/AppMenu.vue'

export default {
  name: 'AppHeader',
  components: { AppMenu },
  data() {
    return {
      content: content
    }
  }
}
</script>

<style lang="scss">
#app-header {
  background-color: #1d375a;
  width: 100%;
  text-align: center;
  padding-bottom: 2vh;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.5);
}

#app-header-content {
  padding-bottom: 4vh;
  img {
    width: 20vh;
  }

  h2 {
    font-weight: 100;
    margin-top: 1vh;
    font-size: 2.5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}
</style>
