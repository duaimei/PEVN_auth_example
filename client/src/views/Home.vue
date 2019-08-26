<template>
  <div class="home">
    <h1>You're home</h1>
    <login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue';

export default {
  name: 'home',
  components: {
    Login,
  },
};
</script>
