(function (window) {
	var template = `
	<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul  class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class editing when editing and completed when marked as completed -->
					<li v-for="item in filterTodos" :class="item.complete?'completed':''" :key="item.id">
						<div class="view">
							<input class="toggle" type="checkbox" :checked="item.complete" @input="handleInput(item.id)">
							<label>{{item.title}}</label>
							<button @click="handleClick(item.id)" class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
				</ul>
			</section>
	`
	window.todoList = {
		template,
		props: ['todos','filterText'],
		data() {
			return {

			}
		},
		methods: {
			handleClick(id) {
				this.$emit("delet", id)
			},
			handleInput(id) {
				this.$emit("checked", id)
			}
		},
		computed: {
			filterTodos() {
				switch (this.filterText) {
					case "Active":
						return this.todos.filter(item => {
							return !item.complete
						});
						break;
					case "Completed":
						return this.todos.filter(item => {
							return item.complete
						});
						break;
					default:
						return this.todos;
						break;
				}
			}
		}
	}
})(window)
