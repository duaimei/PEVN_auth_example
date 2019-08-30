<template>
  <div>
      <!-- <button><a href="/auth/google">Google?</a></button> -->
      <button @click="handleClick">LOGIN PLS</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export default {
  name: 'login',
  methods: {
    ...mapActions(['getLogin']),
    handleClick() {
      this.$gAuth.getAuthCode()
        .then((authCode) => {
          console.log(`authcode: ${authCode}`);
          return apiClient.post('/auth/google', { code: authCode, redirect_uri: 'http://localhost:8080/auth/google/callback/' });
        })
        .then((response) => {
          console.log(response);
        // after ajax
        })
        .catch((error) => {
          console.log(error);
        // on fail do something
        });
    },
  },
};
</script>
