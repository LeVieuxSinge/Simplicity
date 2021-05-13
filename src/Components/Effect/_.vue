<template>
  <div class="--effect" :class="hidden ? '--effect--hidden' : null">

    <!-- MOVEABLE -->
    <div :id="unique ? unique : null" class="--effect--wrap" :class="group ? '--effect--group--' + group : '--effect--group--1'">

      <!-- CONTENT -->
      <slot></slot>

    </div>

  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {

  name: "Effect",

  props: {
    unique: String,
    hidden: Boolean,
    group: String,
  },

}
</script>

<!-- SCSS -->
<style lang="scss" scoped>

.--effect {
  position: relative;
  display: flex;

  &--hidden {
    overflow: hidden;
  }

  &--wrap {
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
  }

}

</style>