<template>
  <div id="app">
    <router-view/>
		<copy-right></copy-right>
  </div>
</template>
<script>
import CopyRight from './components/CopyRight'
export default {
  name: 'App',
	components: {
		CopyRight,
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
