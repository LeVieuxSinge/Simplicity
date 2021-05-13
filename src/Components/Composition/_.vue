<template>

  <!-- VUETIFY -->
  <v-main v-if="vuetify">
    <slot></slot>
  </v-main>

  <!-- ARTISTIC -->
  <div v-else class="--composition">
    <div class="--composition--content">
      <slot></slot>
    </div>
  </div>

</template>

<!-- JAVASCRIPT -->
<script>
export default {

  props: {
    vuetify: Boolean,
  },

}
</script>

<!-- SCSS -->
<style lang="scss" scoped>

.--composition {
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
}

.--compositon--content {
  position: relative;
  flex: 1 1 auto;
  max-width: 100%;
}

</style>