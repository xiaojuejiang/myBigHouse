(function (window) {
	var template = `
	<header class="header">
		<h1>todos</h1>
		<input @keyup.enter='handleKeyup' v-model="msg" class="new-todo" placeholder="placeholder" autofocus>
	</header>
	`
	window.todoHeader={
		template,
		props:['placeholder'],
		data(){
			return {
				msg:''
			}
		},
		methods:{
			handleKeyup(){
				this.$emit('add',this.msg)
				this.msg=''
			}
		}
	}
})(window)
