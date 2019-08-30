<template>
  <div class="home">
    <h1>You're home</h1>
    <h2>{{fetchYes()}}</h2>
    <h2>{{getYes}}</h2>
    <login />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import Login from '@/components/Login.vue';

export default {
  name: 'home',
  components: {
    Login,
  },
  computed: {
    ...mapGetters(['getYes']),
  },
  methods: {
    ...mapActions(['fetchYess']),
    fetchYes() {
      this.$store.dispatch('fetchYess');
    },
    displayYes() {
      return this.getYes;
    },
  },
};
</script>
