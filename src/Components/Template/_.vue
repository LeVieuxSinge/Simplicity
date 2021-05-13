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
      templateData: null,
  }),

  methods: {
    templateMethod() {

    },
  },

}
</script>

<!-- SCSS -->
<style lang="scss" scoped>

.template {
  
}

</style>