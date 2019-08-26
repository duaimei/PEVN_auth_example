<template>
  <button @click="handleClick">Log In</button>
</template>
<script>
export default {
  name: 'login',
  methods: {
    handleClick() {
      console.log('was clicked');
    },
  },
};
</script>
