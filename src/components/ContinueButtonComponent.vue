<template>
  <div class="button-container">
    <div class="continue-button" @click="goHome">
      <span>Continuemos&excl;</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ContinueButton",
  methods: {
    ...mapActions(["doChangeHelloView"]),
    goHome() {
      this.doChangeHelloView()
      waitASec().then(() => {
        console.log(' TODO route next view')
      });
    }
  }
};

function waitASec() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
</script>
<style lang="scss" scoped>
.button-container {
  grid-column: span 4;
}

.continue-button {
  border: 2px solid #1d3557;
  width: inherit;
  display: inline-block;
  padding: 3%;
  margin: 1%;
  text-transform: uppercase;
  color: #1d3557;
  opacity: 0;
  animation-name: fade-in;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-delay: 2.5s;
  font-size: 1.2rem;
  cursor: pointer;
}

@media (min-width: 600px) {
  .button-container {
  grid-column: span 4;
  }

}

</style>
