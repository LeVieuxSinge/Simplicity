<template>

  <!-- VUETIFY -->
  <v-app v-if="show && vuetify">
    <slot></slot>
  </v-app>

  <!-- ARTISTIC -->
  <div v-else-if="show" class="--framework">
    <div class="--framework--content">
      <slot></slot>
    </div>
  </div>

</template>

<!-- JAVASCRIPT -->
<script>
export default {

  props: {
    vuetify: Boolean,
    observe: Boolean,
  },

  mounted() {

    // Wait for loading to end
    var interval = setInterval(() => {
      if (this.observe) {
        clearInterval(interval);
        this.show = true;
      } else {
        this.show = false;
      }
    }, 10);

  },

  data: () => ({
    show: false,
  }),

}
</script>

<!-- SCSS -->
<style lang="scss" scoped>

.framework {
  display: flex;
}

.framework--content {
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

</style>