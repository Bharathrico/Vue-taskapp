<template>
  <newcomp/>
  <extracomp/>
</template>

<script>
import newcomp from './components/newcomp.vue'
import extracomp from './components/extracomp.vue'
export default {
  name: 'App',
  components: {
    newcomp,
    extracomp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #09163E;
  margin:0;
  display: flex;
  align-items: center;
  justify-self: center;
}
body
{
  margin: 0;
  padding: 0;
  background-color: #09163E;
  overflow: hidden;
}
</style>
