<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import common from '@/utils/common'
	
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      msg: 'Hello Vjoke!'
    }
  },
	mounted() {
		debugger
		console.log("HelloWorld.vue run mounted")
	},
	methods: {
		aaa: function() {
			console.log("aaaaa")
		},
		bbb() {
			
		}
	},
	mixins:[common.mixin],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h1::selection {
	background-color: yellow;
	color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
