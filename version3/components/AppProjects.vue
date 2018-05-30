<template>
<div id="app-projects">
  <a v-for="(project, index) in content" :key="index" 
  :href="project.link.url" target="_blank">
    <div class="app-projects-item" 
    :style="{backgroundImage: 'url('+project.img+')'}">
      <h1>{{ project.title.toUpperCase()}}</h1>
      <p>{{ project.description }}</p>
    </div>
  </a>
</div>
</template>

<script>
import content from '@/content/projects.js'

export default {
  name: 'Projects',
  data() {
    return {
      content: content
    }
  }
}
</script>

<style lang="scss">
#app-projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  $item-width: 50vh;
  $item-height: 50vh;
  padding: 2vh;
  color: #e2e2e2;  
  margin-bottom: 10vh;

  .app-projects-item {
    box-shadow: 0 3px 3px 0 #424242;
    height: $item-height;
    width: $item-width;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 1vh;

    h1 {
      position: absolute;
      width: $item-width;
      text-align: center;
      margin-top: $item-height / 2 - 2vh;
      text-shadow: 
      -2px -2px rgba(0, 0, 0, 0.1),
      2px 2px rgba(0, 0, 0, 0.6);
    }
    p {
      transition: 1s all;
      font-family: 'Raleway', sans-serif;      
      padding: 4vh;      
      width: $item-width;
      vertical-align: middle;
      display: table-cell;
      color: #e2e2e2;
      position: absolute;
      height: $item-height;
      background-color: rgba(0,0,0,0.5);
      background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,1));
      opacity: 0;
    }
    button {
      position: absolute;
    }
  }
  .app-projects-item:hover {
    p {
      opacity:100;
    }
  }
}
</style>
