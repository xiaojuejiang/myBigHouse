(function (window) {
	const template = `
	<div>
	<section class="todoapp">
	<todo-header :placeholder="msg" @add="handleAdd"></todo-header>
	<todo-list v-show="todos.length" :filterText="filterText" :todos="todos" @delet="handleDel" @checked="handleCheck"></todo-list>
	<todo-footer v-show="todos.length" :todos="todos" :count="count" :filterText="filterText" @filter="changeFilter" @clear="handleCls"></todo-footer>
	</section>
		<app-footer></app-footer>
	</div>
	`
	var todos = [{
			id: 1,
			title: "上课",
			complete: true
		},
		{
			id: 2,
			title: "练习",
			complete: false
		},
		{
			id: 3,
			title: "敲代码",
			complete: false
		},
		{
			id: 4,
			title: "睡觉",
			complete: false
		},
	]

	window.app = {
		template,
		data() {
			return {
				todos,
				count: '',
				filterText:'active',
				msg: 'What needs to be done?'
			}
		},
		methods: {
			handleAdd(title) {
				let id = 1
				if (title.trim().length == 0) return
				if (this.todos.length != 0) id = this.todos[this.todos.length - 1].id + 1
				let complete = false
				this.todos.push({
					id,
					title,
					complete
				})
			},
			handleDel(id) {
				this.todos.some((item, i) => {
					if (item.id == id) {
						this.todos.splice(i, 1)
						return true
					}
				})
			},
			handleCheck(id) {
				this.todos.some((item) => {
					if (item.id == id) {
						item.complete = !item.complete
						return true
					}
				})
				this.getCount()
			},
			getCount() {
				let arr = this.todos.filter(function (item) {
					return !item.complete
				})
				this.count = arr.length
			},
			changeFilter(t){
				console.log(t)
				this.filterText=t
			},
			handleCls(){
				let arr = this.todos.filter(function (item) {
					return !item.complete
				})
				this.todos=this.todos.filter(item=>{
					return arr.indexOf(item)!=-1
				})
			}
		},
		created() {
			this.getCount()
		},
		components: {
			todoHeader,
			todoList,
			todoFooter,
			todoFooter,
			appFooter
		},
		watch: {
			'todos': function () {
				this.getCount()
			}
		}
	}
})(window);
