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
    <div class="button-container">
      <div class="continue-button"><span>Continuemos&excl;</span></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hello-view {
  display: grid;
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
    color: #003049;
    background: transparent;
    font-size: 4rem;
    animation-name: top-to-center;
    animation-duration: 0.7s;
  }

  h2 {
    color: #1d3557;
    background: transparent;
    font-size: 1.5rem;
    margin-top: -10%;
    animation-name: fade-in;
    animation-duration: 0.7s;
    animation-delay: 0.8s;
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
  color: #003049;
  margin-top: -10%;
  margin-bottom: 0,2%;
  font-size: 1.5rem;
  grid-column: span 4;
  animation: typing 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  justify-content: center;
  text-align: left;
}

.button-container {
  grid-column: span 4;
}

.continue-button {
  border: 2px solid #1d3557;
  width: inherit;
  display: inline-block;
  padding: 3%;
  text-transform: uppercase;
  color: #1d3557;
  opacity: 0;
  animation-name: fade-in;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-delay: 2.5s;
}

img {
  border-radius: 50%;
  border: 2px solid #000;
  max-width: 180%;
  animation-name: right-to-center;
  position: relative;
  animation-duration: 0.4s;
  animation-delay: 0.2s;
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

@keyframes top-to-center {
  from {
    margin-top: -300%;
  }
  to {
    left: 0%;
  }
}

@keyframes right-to-center {
  from {
    right: -300%;
  }
  to {
    right: 0%;
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
