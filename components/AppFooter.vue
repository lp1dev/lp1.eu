<template>
  <div id="app-footer" v-html="content"></div>
</template>

<script>
import content from "@/content/index/footer.md"

export default {
  name: 'AppFooter',
  data() {
    return {
      content: content
    }
  }
}
</script>

<style lang="scss">
#app-footer {
  background-color: #73a4b6;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  padding: 2vh;
  bottom: 0;
  img {
    height: 4vh;
    margin-left: 2vh;
  }
}
</style>
