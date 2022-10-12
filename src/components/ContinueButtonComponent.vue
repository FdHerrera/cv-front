<template>
  <div class="button-container">
    <div class="continue-button" 
      @click="goHome"
      @mouseenter="showArrow = true" 
      @mouseleave="showArrow = false" 
      >
      <span>Continuemos&excl; 
        <font-awesome-icon 
          icon="fa-solid fa-angles-right" 
          v-show="showArrow"
          :class="{ hovering: showArrow }"/></span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ContinueButton",
  data() {
    return {
      showArrow: false
    }
  },
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

.continue-button:hover:before {
  box-shadow: 0 0 15px #02122a;
  filter: blur(3px);
  transition: 1s;
}

.continue-button:hover {
  transform: scale(1.1);
  color: #000;
  box-shadow: 0 0 15px #02122a;
  text-shadow: 0 0 15px #02122a;
  transition: 1s;
}

.showArrow {
  box-shadow: 0 0 15px #02122a;
  filter: blur(3px);
  transition: 1s;
}

@media (min-width: 600px) {
  .button-container {
  grid-column: span 4;
  }

}

</style>
