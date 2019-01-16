export default {
	mixin:{
	    methods: {
			aaa: function() {
				console.log("ddddddddddddddd")
			},
	        sayWords: function(o){
				console.log("我是mxins里面的方法" + o)
			},
			foo1() {
				console.info("mixin组件方法")
			}
	    },
		mounted: function(){
			console.log("mixin run mounted")
		},
	    created: function(){
	        console.log("mixin run created")
	    }
	}
}