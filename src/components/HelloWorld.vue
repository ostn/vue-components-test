<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
		<input v-model="user" v-focus />
		<button type="button" @click="foo1">哈哈哈</button>
  </div>
</template>

<script>
import common from '@/utils/common'
	
export default {
  name: 'HelloWorld',
	// 注册一个局部的自定义指令 v-focus
	directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    }
  },
  data: function() {
    return {
			user: '',
      msg: 'Hello Vjoke!'
    }
  },
	mounted() {
		console.log("HelloWorld.vue run mounted")
	},
	methods: {
		aaa: function() {
			console.log("aaaaa")
		},
		foo() {
			console.info("hello组件方法")
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
