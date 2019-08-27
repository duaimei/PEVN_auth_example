<template>
  <button @click="handleClick">Log In</button>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',
  methods: {
    ...mapActions(['getLogin']),
    handleClick() {
      console.log('was clicked');
      this.$store.dispatch('getLogin', {});
    },
  },
};
</script>
