<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <footer>
    <div class="project">
      <a href="https://github.com/ssshooter/ps-trophy" target="_blank">
        PS-trophy-displayer
      </a>
    </div>
    <div class="author">
      <a href="https://github.com/ssshooter" target="_blank">
        Developed by SSShooter
      </a>
    </div>
    <img id="github" src="@/assets/github.svg" alt="github" />
  </footer>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  margin: auto;
  max-width: 600px;
  font-family: 'Noto Sans SC', sans-serif;
}
footer {
  margin: 30px 0 20px;
  text-align: center; 
  a {
    text-decoration: none;
  }
  .project * {
    vertical-align: middle;
    color: #003b9c;
  }
  .author {
    margin-bottom: 6px;
    a {
      font-size: 0.8em;
      color: #4e4e4e;
    }
  }
  #github {
    height: 1.3em;
  }
}
input {
  padding: 16px;
}
button {
  padding: 12px 28px;
}
input,
button {
  border: none;
  box-shadow: #bdbdbd $shadow;
  border-radius: 5px;
}
</style>
