<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Code");
* {
  box-sizing: border-box;
  background-color: #ede7e3;
  color: #212529;
}

#app {
  font-family: "Fira Code", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  margin: 0;
}


@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
