<template>
  <div class="template">
    <slot></slot>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {

  components: {

  },

  props: {
      templateProp: null,
  },

  mounted() {

  },

  data: () => ({
      template: null,
  }),

  methods: {
    template() {

    },
  },

}
</script>

<!-- UNSCOPED SCSS -->
<style lang="scss">

.template {
  
}

</style>

<!-- SCOPED SCSS -->
<style lang="scss" scoped>
@import '_variables.scss';
.template {
  
}

</style>