<template>
<div id="app-menu">
  <div 
    class="app-menu-item" 
    v-for="(item, index) in content"
    :key="index" @click="navigate(item)">
    {{ item.title }}
  </div>
</div>
</template>

<script>
import content from '@/content/index/menu.js'

export default {
  name: 'AppMenu',
  data() {
    return {
      content: content
    }
  },
  methods: {
    navigate(item) {
      if (item.local) {
        this.$router.push({path: item.url})
        this.$router.forward()
      } else {
        window.open(item.url, '_blank')
      }
    }
  }
}
</script>

<style lang="scss">
#app-menu {
  display: flex;
  justify-content: center;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  margin: 1vh;
}

.app-menu-item {
  padding: 2vh;
}

.app-menu-item:hover {
  transition: 1s all;
  background-color: #e2e2e2;
  color: #1d375a;
}
</style>
