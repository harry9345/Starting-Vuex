<template>
  <h3>>we do more in here :{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizeCounter'];
    }
  }
};
</script>