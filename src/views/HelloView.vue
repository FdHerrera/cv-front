<template>
  <div class="hello-view">
    <div class="main">
      <h1>Federico Herrera</h1>
      <h2>Software Developer</h2>
    </div>
    <div class="my-img">
      <img src="../../public/my-pic.jpg" />
    </div>
    <div class="presentation">
      <h4>Encantado de conocerte&excl;</h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hello-view {
  display: grid;
  color: #991105;
  grid-template: auto / repeat(4, 1fr);
  padding-left: 0;
}

.main {
  grid-column: 1 / 4;
  grid-row: 1;
  z-index: 2;
  background-color: transparent;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: left;

  h1 {
    background: transparent;
    font-size: 4rem;
    animation-name: left-to-center;
    animation-duration: 1s;
  }

  h2 {
    background: transparent;
    font-size: 1.5rem;
    margin-top: -10%;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-delay: 1s;
    opacity: 0;
    animation-fill-mode: forwards;
    text-transform: uppercase;
  }
}

.my-img {
  background-color: transparent;
  grid-column: 3 / 5;
  grid-row: 1 /2;
  z-index: 1;
  justify-content: center;
}

.presentation {
  font-size: 1.5rem;
  grid-column: span 4;
  animation: typing 3s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  justify-content: center;
  text-align: left;
}

img {
  border-radius: 50%;
  max-width: 180%;
}

@keyframes typing {
  from {
    width: 0%;
    opacity: 1;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}

@keyframes left-to-center {
  from {
    margin-left: -100%;
  }
  to {
    left: 0%;
  }
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
